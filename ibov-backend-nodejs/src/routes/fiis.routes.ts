import { Router } from "express";
import { OrderingFiiController } from "../controllers/OrderingFiiController";

export const fiisRouter = Router();

fiisRouter.get("/", async (request, response) => {
  const orderingFiiController = OrderingFiiController.getInstance();

  const fiiList = await orderingFiiController.getData();

  return response.json({ fiiList: fiiList });
});
