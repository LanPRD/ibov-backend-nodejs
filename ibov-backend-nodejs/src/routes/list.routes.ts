import { Router } from "express";
import { OrderingFiiController } from "../controllers/OrderingFiiController";
import { OrderingStockController } from "../controllers/OrderingStockController";

export const listRouter = Router();

listRouter.get("/", async (request, response) => {
  const orderingFiiController = OrderingFiiController.getInstance();
  const orderingStockController = OrderingStockController.getInstance();

  const fiiTopRatios = await orderingFiiController.topRatios();
  const stockTopRatios = await orderingStockController.topRatios();

  return response.json({
    fii: fiiTopRatios,
    stock: stockTopRatios
  });
});
