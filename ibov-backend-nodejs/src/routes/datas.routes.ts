import { Router } from "express";
import { OrderingStockController } from "../controllers/OrderingStockController";

export const statisticsRouter = Router();

statisticsRouter.get("/", (request, response) => {
  const orderingStockController = OrderingStockController.getInstance();

  const { bestROA } = orderingStockController.topRatios();

  return response.json(bestROA);
});
