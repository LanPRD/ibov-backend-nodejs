import { Router } from "express";
import { OrderingStockController } from "../controllers/OrderingStockController";

export const statisticsRouter = Router();

statisticsRouter.get("/", async (request, response) => {
  const orderingStockController = OrderingStockController.getInstance();

  const { bestROA } = await orderingStockController.topRatios();

  return response.json(bestROA);
});
