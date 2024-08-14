import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface plantsAttributes {
  id: number;
  name: string;
  plant_type: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
}

export type plantsPk = "id";
export type plantsId = plants[plantsPk];
export type plantsOptionalAttributes = "id" | "description" | "created_at" | "updated_at";
export type plantsCreationAttributes = Optional<plantsAttributes, plantsOptionalAttributes>;

export class plants extends Model<plantsAttributes, plantsCreationAttributes> implements plantsAttributes {
  id!: number;
  name!: string;
  plant_type!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof plants {
    return plants.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    plant_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plants',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
