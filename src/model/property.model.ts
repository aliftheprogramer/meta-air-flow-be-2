// src/models/property.model.ts

import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';


interface PropertyAttributes {
  id: number;
  location: string;
  size_sqft: number;
  rooms: number;
  is_furnished: boolean;
  rental_price: number; 
}

// Atribut yang opsional saat pembuatan (misal: id tidak perlu diinput)
interface PropertyCreationAttributes extends Optional<PropertyAttributes, 'id'> {}

class Property extends Model<PropertyAttributes, PropertyCreationAttributes> implements PropertyAttributes {
  public id!: number;
  public location!: string;
  public size_sqft!: number;
  public rooms!: number;
  public is_furnished!: boolean;
  public rental_price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size_sqft: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_furnished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rental_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'properties',
    timestamps: true,
  }
);

export default Property;