import { Router } from "express";
import { OrderingStockController } from "../controllers/OrderingStockController";

export const stocksRouter = Router();

stocksRouter.get("/", async (request, response) => {
  const orderingStockController = OrderingStockController.getInstance();

  const stocksList = await orderingStockController.getData();

  return response.json({ stockList: stocksList });
});
