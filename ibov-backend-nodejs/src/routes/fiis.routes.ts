import { Router } from "express";
import { FiiController } from "../controllers/FiiController";
import { OrderingFiiController } from "../controllers/OrderingFiiController";
import { FiiRepository } from "../repositories/FiiRepository";

const fiiController = new FiiController(new FiiRepository());

export const fiisRouter = Router();

fiisRouter.get("/", async (request, response) => {
  const orderingFiiController = OrderingFiiController.getInstance();

  const fiiList = await orderingFiiController.getData();

  return response.json(fiiList);
});

fiisRouter.post("/:ticker", async (request, response) => {
  const ticker = request.params.ticker;

  const fii = await fiiController.findOne(ticker);

  return response.json(fii);
});
