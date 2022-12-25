import cors from "cors";
import express from "express";

import { OrderingFiiController } from "./controllers/OrderingFiiController";
import { OrderingStockController } from "./controllers/OrderingStockController";

import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(routes);

app.listen(port, async () => {
  const orderingStockController = OrderingStockController.getInstance();
  const orderingFiiController = OrderingFiiController.getInstance();

  await Promise.all([orderingStockController.buildController(), orderingFiiController.buildController()]);

  console.log(`Server is running on port ${port}`);
});
