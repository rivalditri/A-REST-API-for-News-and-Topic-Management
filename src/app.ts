import express from "express";
import connection from "./configs/config";
import { json, urlencoded } from "body-parser";
import Router from "./routes/route";

const app = express();

app.use(json()); 

app.use(urlencoded({ extended: true }));

app.use("/routes", Router);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
});

connection
  .sync()
  .then(() => {
    console.log("Database Synced Successfully");
  })
  .catch((err) => {
    console.log("Database Sync Failed");
    console.log(err);
  });

app.listen(3000);
console.log("Server Started at http://localhost:3000");