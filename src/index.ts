import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());
const pgClient = new Client(
  "postgresql://neondb_owner:npg_ms4LNuTi8yXn@ep-patient-rain-a1utvzlz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

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

  const response = await pgClient.query(
    `insert into user (username,password) values ('${username}', '${password}');`
  );
  res.json({
    mgs: "you are signup",
  });
  //wrong code
});

app.listen(3000);
