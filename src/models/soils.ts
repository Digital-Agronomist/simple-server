import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface Soil {
  id: number;
  name: string;
  soil_type?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
}

export type SoilCreationAttributes = 
  Optional<Soil, 'id' | 'soil_type' | 'description' | 'created_at' | 'updated_at'>;

export class SoilModel extends Model<Soil, SoilCreationAttributes> implements Soil {
  public id!: number;
  public name!: string;
  public soil_type?: string;
  public description?: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initModel(sequelize: Sequelize): typeof SoilModel {
    return SoilModel.init(
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
        soil_type: {
          type: DataTypes.STRING(255),
          allowNull: true,
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
        tableName: 'soils',
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

export default SoilModel;
