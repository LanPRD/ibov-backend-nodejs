import { Router } from "express";
import { OrderingFiiController } from "../controllers/OrderingFiiController";
import { OrderingStockController } from "../controllers/OrderingStockController";

export const listRouter = Router();

listRouter.get("/", (request, response) => {
  const orderingStockController = OrderingStockController.getInstance();
  const orderingFiiController = OrderingFiiController.getInstance();

  const stockTopRatios = orderingStockController.topRatios();
  const fiiTopRatios = orderingFiiController.topRatios();

  return response.json({
    fii: fiiTopRatios,
    stock: stockTopRatios
  });
});
