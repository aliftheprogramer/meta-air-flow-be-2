// src/models/predictionLog.model.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Atribut yang disimpan setiap kali ada prediksi
interface PredictionLogAttributes {
  id: number;
  // Input yang diberikan oleh user
  input_location: string;
  input_size_sqft: number;
  input_rooms: number;
  input_is_furnished: boolean;
  // Output dari model Anda
  suggested_price: number;
  confidence_score: number;
  // (Opsional) Versi model yang digunakan untuk prediksi ini
  model_version?: string;
}

interface PredictionLogCreationAttributes extends Optional<PredictionLogAttributes, 'id'> {}

class PredictionLog extends Model<PredictionLogAttributes, PredictionLogCreationAttributes> implements PredictionLogAttributes {
  public id!: number;
  public input_location!: string;
  public input_size_sqft!: number;
  public input_rooms!: number;
  public input_is_furnished!: boolean;
  public suggested_price!: number;
  public confidence_score!: number;
  public model_version?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PredictionLog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    input_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    input_size_sqft: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    input_rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    input_is_furnished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    suggested_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    confidence_score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    model_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'prediction_logs',
    timestamps: true,
  }
);

export default PredictionLog;