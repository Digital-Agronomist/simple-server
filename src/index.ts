import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import { sequelize } from "./sequelize"; // Assumes this is configured elsewhere
import routes from "./routes"; // Your routes file
import helmet from "helmet"; // Security headers
import morgan from "morgan"; // HTTP request logging
import cors from "cors"; // Cross-origin resource sharing

const app = express();
const port = process.env.APP_PORT || 5000;
const nodeEnv = process.env.NODE_ENV || "development";

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(helmet()); // Set security headers
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" })); // Allow CORS (customize origin in .env)
if (nodeEnv !== "production") {
  app.use(morgan("combined")); // Log requests in dev/test environments only
}

// Database initialization
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log(
      `Database connection established successfully to ${sequelize.config.database}`
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit if database connection fails
  }
}

// Health check endpoint
app.get("/health", async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    res.status(200).send("OK");
  } catch (error) {
    console.error("Health check failed:", error);
    res.status(500).send("Database connection failed");
  }
});

async function startServer() {
  await initializeDatabase(); 
  // Routes
  app.use("/api", routes);

  // Error handling middleware
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError && "body" in err) {
      return res.status(400).json({ message: "Invalid JSON payload" });
    }
    console.error(err.stack); // Log full stack trace for debugging
    res.status(500).json({ message: "Internal Server Error" });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port} in ${nodeEnv} mode`);
  });
}

process.on("SIGINT", async () => {
  try {
    await sequelize.close();
    console.log("Database connection closed due to app termination.");
    process.exit(0);
  } catch (error) {
    console.error("Error closing database connection:", error);
    process.exit(1);
  }
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1); // Optional: exit or handle based on your needs
});

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});