"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_ms4LNuTi8yXn@ep-patient-rain-a1utvzlz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
// async function main() {
//   await pgClient.connect();
//   const res = await pgClient.query("select * from todo");
//   console.log(res.rows);
// }
// main();
pgClient.connect();
app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const response = await pgClient.query(`insert into user (username,password) values ('${username}', '${password}');`);
    res.json({
        mgs: "you are signup",
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map