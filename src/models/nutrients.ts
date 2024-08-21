import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface NutrientsAttributes {
  id: number;
  name: string;
  symbol: string;
  nutrient_type: string;
  created_at: Date;
  updated_at: Date;
}

export type NutrientsCreationAttributes = 
  Optional<NutrientsAttributes, 'id' | 'created_at' | 'updated_at'>;

export class NutrientsModel extends Model<NutrientsAttributes,
  NutrientsCreationAttributes> implements NutrientsAttributes {
  public id!: number;
  public name!: string;
  public symbol!: string;
  public nutrient_type!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initModel(sequelize: Sequelize): typeof NutrientsModel {
    return NutrientsModel.init(
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
        symbol: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        nutrient_type: {
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
        tableName: 'nutrients',
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

export default NutrientsModel;
