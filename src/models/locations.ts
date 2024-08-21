import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface LocationsAttributes {
  id: number;
  longitude: string;
  latitude: string;
  country: string;
  state: string;
  county: string;
  city: string;
  created_at: Date;
  updated_at: Date;
}

export type LocationsCreationAttributes = 
  Optional<LocationsAttributes, 'id' | 'created_at' | 'updated_at'>;

export class LocationsModel extends Model<LocationsAttributes,
  LocationsCreationAttributes> implements LocationsAttributes {
  public id!: number;
  public longitude!: string;
  public latitude!: string;
  public country!: string;
  public state!: string;
  public county!: string;
  public city!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initModel(sequelize: Sequelize): typeof LocationsModel {
    return LocationsModel.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        longitude: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        latitude: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        country: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        county: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        city: {
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
        tableName: 'locations',
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

export default LocationsModel;
