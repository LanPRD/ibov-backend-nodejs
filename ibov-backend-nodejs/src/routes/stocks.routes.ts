import { Router } from "express";
import { OrderingStockController } from "../controllers/OrderingStockController";
import { StockController } from "../controllers/StockController";
import { StockRepository } from "../repositories/StockRepository";
import { AppError } from "../utils/Error";

const stockController = new StockController(new StockRepository());

export const stocksRouter = Router();

stocksRouter.get("/", async (request, response) => {
  const orderingStockController = OrderingStockController.getInstance();

  const stocksList = await orderingStockController.getData();

  return response.json(stocksList);
});

stocksRouter.post("/:ticker", async (request, response) => {
  const ticker = request.params.ticker;

  try {
    const stock = await stockController.findOne(ticker);
    return response.json(stock);
  } catch (error) {
    console.trace(error);

    const errorCode = error.statusCode ?? 500;

    return response.status(errorCode).json({ statusCode: errorCode, message: error.message });
  }
});
