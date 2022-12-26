import { Router } from "express";
import { OrderingStockController } from "../controllers/OrderingStockController";
import { StockController } from "../controllers/StockController";
import { StockRepository } from "../repositories/StockRepository";

const stockController = new StockController(new StockRepository());

export const stocksRouter = Router();

stocksRouter.get("/", async (request, response) => {
  const orderingStockController = OrderingStockController.getInstance();

  const stocksList = await orderingStockController.getData();

  return response.json(stocksList);
});

stocksRouter.post("/:ticker", async (request, response) => {
  const ticker = request.params.ticker;

  const stock = await stockController.findOne(ticker);

  return response.json(stock);
});
