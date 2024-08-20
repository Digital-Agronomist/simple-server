import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface TimePeriodsAttributes {
  id: number;
  start_date: string;
  end_date: string;
  period: string;
  created_at: Date;
  updated_at: Date;
}

export type TimePeriodsCreationAttributes = 
  Optional<TimePeriodsAttributes, 'id' | 'created_at' | 'updated_at'>;

export class TimePeriodsModel extends Model<TimePeriodsAttributes,
  TimePeriodsCreationAttributes> implements TimePeriodsAttributes {
  public id!: number;
  public start_date!: string;
  public end_date!: string;
  public period!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initModel(sequelize: Sequelize): typeof TimePeriodsModel {
    return TimePeriodsModel.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        start_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        end_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        period: {
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
        tableName: 'time_periods',
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

export default TimePeriodsModel;
