import { Router } from "express";
import { OrderingFiiController } from "../controllers/OrderingFiiController";
import { OrderingStockController } from "../controllers/OrderingStockController";

export const indexRouter = Router();

indexRouter.get("/", async (request, response) => {
  const orderingFiiController = OrderingFiiController.getInstance();
  const orderingStockController = OrderingStockController.getInstance();

  const totalFiis = orderingFiiController.numberOfFiis;
  const totalStocks = orderingStockController.numberOfStocks;

  return response.json({ totalFiis: totalFiis, totalStocks: totalStocks });
});
