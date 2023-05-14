import { Sequelize } from 'sequelize-typescript';
import NewsModel from '../models/News';
import TopicModel from '../models/topic';
import NewsTopicModel from '../models/news-topic';

// Initialize Sequelize connection
const connection = new Sequelize({
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
  News: NewsModel(connection),
  Topic: TopicModel(connection),
  NewsTopic: NewsTopicModel(connection),
};

// Set up associations
Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Sync the models with the database
connection.sync({ force: true }).then(() => {
  console.log('Models synced with the database');
});

export default models;
