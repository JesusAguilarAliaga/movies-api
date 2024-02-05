import express from "express";
import helmet from "helmet";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import router from "./routes/index.js";
import errorHandler from "./utils/errorHandler.js";

dotenvConfig();

// Create express app
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false
}));
app.use(cors());
app.use(router);

// routes
app.get("/", (req, res) => {
    return res.send("Welcome to express api")
})

// Error handler
app.use(errorHandler);

export default app