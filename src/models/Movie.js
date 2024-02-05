import { DataTypes } from "sequelize";
import sequelize from "../utils/connection.js";

const Movie = sequelize.define("movie", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Movie;