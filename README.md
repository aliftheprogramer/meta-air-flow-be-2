# Meta Air Flow

This project is a boilerplate REST API built with the following tech stack:

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Sequelize**: Promise-based Node.js ORM for SQL databases
- **SQLite**: Lightweight, file-based SQL database
- **dotenv**: Loads environment variables from a `.env` file

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Development mode**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Start production build**
   ```bash
   npm start
   ```

## Project Structure

- `src/app.ts` - Main entry point, initializes database and server
- `src/config/database.ts` - Sequelize configuration for SQLite
- `src/routes/` - API route definitions
- `.env` - Environment variables (e.g., `PORT`)

## Notes
- The API runs on the port specified in `.env` (`PORT=3000` by default).
- Database file is `database.sqlite` in the project root.

---
Feel free to extend this project for your own needs!
