import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import AnalyticalMethodsModel from './analytical_methods';

export interface AnalyticalInstrumentsAttributes {
  id: number;
  name: string;
  analytical_method_id: number;
  created_at: Date;
  updated_at: Date;
}

export type AnalyticalInstrumentsCreationAttributes = Optional<AnalyticalInstrumentsAttributes, 'id' | 'created_at' | 'updated_at'>;

export class AnalyticalInstrumentsModel extends Model<AnalyticalInstrumentsAttributes, AnalyticalInstrumentsCreationAttributes> implements AnalyticalInstrumentsAttributes {
  public id!: number;
  public name!: string;
  public analytical_method_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  static initModel(sequelize: Sequelize): typeof AnalyticalInstrumentsModel {
    return AnalyticalInstrumentsModel.init(
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
        analytical_method_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: AnalyticalMethodsModel,
            key: 'id',
          },
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
        tableName: 'analytical_instruments',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );
  }
}

export default AnalyticalInstrumentsModel;
