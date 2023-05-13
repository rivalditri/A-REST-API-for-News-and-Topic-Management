"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import connection from "./config/config";
const body_parser_1 = require("body-parser");
// import todoRoutes from "./routes/todos";
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/", (req, res) => {
    res.send({
        status: 200,
        message: "Server Started at http://localhost:3000",
    });
});
// app.use("/todos", todoRoutes);
// app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   res.status(500).json({ message: err.message });
// });
// connection
//   .sync()
//   .then(() => {
//     console.log("Database Synced Successfully");
//   })
//   .catch((err) => {
//     console.log("Database Sync Failed");
//     console.log(err);
//   });
app.listen(3000);
console.log("Server Started at http://localhost:3000");
