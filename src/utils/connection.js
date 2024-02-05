import { Sequelize } from "sequelize";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const sequelize = new Sequelize(process.env.DATABASE_URL);

export default sequelize;