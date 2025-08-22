import dotenv from "dotenv";
import sequelize from "./config/database";
import app from "./server";
dotenv.config();
const port = Number(process.env.PORT);

const start = async (): Promise<void> => {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

void start();
