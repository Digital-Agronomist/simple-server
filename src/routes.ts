import { Router, Request, Response } from 'express';
import { models } from './sequelize';

const router = Router();

// Fetch all plants
router.get('/plants', async (req: Request, res: Response) => {
  try {
    const plants = await models.plants.findAll();
    res.json(plants);
  } catch (error) {
    console.error('Error fetching plants:', error);
    res.status(500).send('Failed to fetch plants');
  }
});

// Fetch all soils
router.get('/soils', async (req: Request, res: Response) => {
  try {
    const soils = await models.soils.findAll();
    res.json(soils);
  } catch (error) {
    console.error('Error fetching soils:', error);
    res.status(500).send('Failed to fetch soils');
  }
});

// Fetch all analytical methods
router.get('/analytical_methods', async (req: Request, res: Response) => {
  try {
    const methods = await models.analyticalMethods.findAll();
    res.json(methods);
  } catch (error) {
    console.error('Error fetching analytical methods:', error);
    res.status(500).send('Failed to fetch analytical methods');
  }
});

// Fetch all locations
router.get('/locations', async (req: Request, res: Response) => {
  try {
    const locations = await models.locations.findAll();
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).send('Failed to fetch locations');
  }
});

// Fetch all nutrients
router.get('/nutrients', async (req: Request, res: Response) => {
  try {
    const nutrients = await models.nutrients.findAll();
    res.json(nutrients);
  } catch (error) {
    console.error('Error fetching nutrients:', error);
    res.status(500).send('Failed to fetch nutrients');
  }
});

// Fetch all time periods
router.get('/time_periods', async (req: Request, res: Response) => {
  try {
    const timePeriods = await models.timePeriods.findAll();
    res.json(timePeriods);
  } catch (error) {
    console.error('Error fetching time periods:', error);
    res.status(500).send('Failed to fetch time periods');
  }
});

export default router;
