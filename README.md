# Meta Air Flow - Rental Price Prediction API

This is a REST API built as a solution for the Challenge: Basic Rental Price Simulator. This project serves as a backend that accepts property attributes, processes them through a simple calculation logic or regression model, and returns a predicted rental price along with a confidence score.

The application architecture is designed to be modular, separating concerns (routes, controllers, models) to ensure maintainability and scalability.

## Tech Stack
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Sequelize
- **Database:** SQLite
- **Environment:** dotenv

## Project Structure
The folder structure is designed for scalability and ease of navigation, separating each logical component into its own module.

```
.
├── src/
│   ├── app.ts                # Main entry point, initializes Express & middleware
│   ├── server.ts             # Runs the server & connects to the database
│   ├── config/
│   │   └── database.ts       # Sequelize configuration for SQLite connection
│   ├── controllers/
│   │   └── prediction.controller.ts # Main logic for handling prediction requests
│   ├── models/
│   │   ├── property.model.ts     # Model for property data from the dataset
│   │   └── predictionLog.model.ts# Model for logging prediction history
│   ├── routes/
│   │   └── prediction.route.ts # API endpoint definition for predictions
│   └── scripts/
│       └── seed.ts           # Script to populate the database from a sample dataset
├── .env                      # Environment variables file (PORT, etc.)
├── database.sqlite           # SQLite database file
└── tsconfig.json
```

## Setup & Installation
Follow these steps to get the project running on your local environment.

### Clone the Repository

```bash
git clone [YOUR_REPOSITORY_URL]
cd meta-air-flow
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables
Create a `.env` file in the project root. You can copy the contents from `.env.example` if it exists, or create it manually.

```
# Port for the Express.js server
PORT=3000
```

### Setup & Seed the Database
This application uses an SQLite database to store the sample dataset and prediction logs. To populate the database with initial data:
a. Place your dataset file (e.g., `sample_data.csv`) inside a `src/data/` folder.
b. Run the seeding script to load the data into the properties table.

```bash
# Ensure ts-node is installed globally or use npx
npx ts-node src/scripts/seed.ts
```

This script will read your dataset and save it to the `database.sqlite` file using the Property model.

## Running the Application

### Development Mode (with auto-reload)

```bash
npm run dev
```

The server will run on the port specified in your `.env` file (default: 3000).

### Build for Production

```bash
npm run build
```

This command compiles the TypeScript code into JavaScript inside the `/dist` folder.

### Start Production Application

```bash
npm start
```

This command runs the application from the compiled files in the `/dist` folder.

## API Endpoint

### Suggest Rental Price
**Endpoint:** `POST /api/v1/predict`

**Description:** Accepts property attributes and returns a predicted rental price along with a confidence score. Every successful request is logged using the PredictionLog model.

#### Request Body (`application/json`):

```json
{
   "location": "Kuala Lumpur",
   "size_sqft": 1100,
   "rooms": 3,
   "is_furnished": true
}
```

#### Success Response (`200 OK`):

```json
{
   "status": "success",
   "data": {
      "suggested_price": 2450.5,
      "confidence_score": 0.88
   }
}
```

#### Error Response (`400 Bad Request` - on validation failure):

```json
{
   "status": "fail",
   "message": "Field 'size_sqft' must be a positive number."
}
```

## Database Models

The application utilizes two primary models managed by Sequelize:

### Property

- **Purpose:** To store and represent data from the provided sample dataset. This model serves as the basis for training or for price calculation logic.
- **Fields:** id, location, size_sqft, rooms, is_furnished, rental_price (actual price).

### PredictionLog

- **Purpose:** To log every incoming prediction request and its result. This is useful for monitoring, analytics, and demonstrates a robust application design.
- **Fields:** id, input_location, input_size_sqft, input_rooms, input_is_furnished, suggested_price, confidence_score.

---
This README was created for the Meta Air Flow project.
