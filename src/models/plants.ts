import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface Plant {
  id: number;
  name: string;
  plant_type: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
}

export type PlantCreationAttributes = 
  Optional<Plant, 'id' | 'description' | 'created_at' | 'updated_at'>;

export class PlantModel extends Model<Plant, PlantCreationAttributes> implements Plant {
  public id!: number;
  public name!: string;
  public plant_type!: string;
  public description?: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initModel(sequelize: Sequelize): typeof PlantModel {
    return PlantModel.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        plant_type: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'created_at',
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        tableName: 'plants',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
        ],
      }
    );
  }
}

export default PlantModel;
