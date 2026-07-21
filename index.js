import express from "express";
import { CreateParentsController } from "./src/controllers/Parents/create-parents.js";

const app = express();

app.listen(30000, () => {
  console.log("O servidor está funcionando na porta 30000");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Fundionou legal");
});

app.post("/createParents", async (req, res) => {
  const createParentsController = new CreateParentsController();

  const { statusCode, result } = await createParentsController.execute(req);

  res.status(statusCode).send(result);
});
