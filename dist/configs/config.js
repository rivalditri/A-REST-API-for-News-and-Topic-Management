"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const News_1 = __importDefault(require("../models/News"));
const topic_1 = __importDefault(require("../models/topic"));
const news_topic_1 = __importDefault(require("../models/news-topic"));
// Initialize Sequelize connection
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "article",
    logging: false,
});
// Define models and associations
const models = {
    News: (0, News_1.default)(connection),
    Topic: (0, topic_1.default)(connection),
    NewsTopic: (0, news_topic_1.default)(connection),
};
// Set up associations
Object.values(models).forEach((model) => {
    if (model.associate) {
        model.associate(models);
    }
});
// Sync the models with the database
connection.sync({ force: true }).then(() => {
    console.log('Models synced with the database');
});
exports.default = models;
