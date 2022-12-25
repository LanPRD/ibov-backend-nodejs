import { Router } from "express";
import { OrderingFiiController } from "../controllers/OrderingFiiController";
import { OrderingStockController } from "../controllers/OrderingStockController";

export const indexRouter = Router();

indexRouter.get("/", async (request, response) => {
  const orderingFiiController = OrderingFiiController.getInstance();
  const orderingStockController = OrderingStockController.getInstance();

  const totalFii = orderingFiiController.numberOfFiis;
  const totalStock = orderingStockController.numberOfStocks;

  return response.json({ totalFii: totalFii, totalStock: totalStock });
});
