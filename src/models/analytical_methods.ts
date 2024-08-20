import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface AnalyticalMethodsAttributes {
  id: number;
  name: string;
  analytical_method_type: string;
  created_at: Date;
  updated_at: Date;
}

export type AnalyticalMethodsCreationAttributes = Optional<AnalyticalMethodsAttributes, 'id' | 'created_at' | 'updated_at'>;

export class AnalyticalMethodsModel extends Model<AnalyticalMethodsAttributes, AnalyticalMethodsCreationAttributes> implements AnalyticalMethodsAttributes {
  public id!: number;
  public name!: string;
  public analytical_method_type!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initModel(sequelize: Sequelize): typeof AnalyticalMethodsModel {
    return AnalyticalMethodsModel.init(
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
        analytical_method_type: {
          type: DataTypes.STRING(255),
          allowNull: false,
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
        tableName: 'analytical_methods',
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

export default AnalyticalMethodsModel;
