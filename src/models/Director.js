import { DataTypes } from "sequelize";
import sequelize from "../utils/connection.js";

const Director = sequelize.define("director", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.TEXT,
    },
    birthday: {
        type: DataTypes.STRING,
    }
})

export default Director;