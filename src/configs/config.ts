import { Sequelize } from "sequelize-typescript";


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "",
  logging: false,
//   models: [article],
});

export default connection;