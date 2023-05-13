"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
// import { Todos } from "../models/todos";
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "todo",
    logging: false,
    //   models: [Todos],
});
exports.default = connection;
