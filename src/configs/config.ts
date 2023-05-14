import { Sequelize } from "sequelize-typescript";
import {ArticleModel} from "../models/article";


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "article",
  logging: false,
  models: [ArticleModel],
});

export default connection;