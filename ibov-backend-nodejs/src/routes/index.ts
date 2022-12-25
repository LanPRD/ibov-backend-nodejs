import { Router } from "express";

export const routes = Router();

import { indexRouter } from "./index.routes";
import { listRouter } from "./list.routes";
import { stocksRouter } from "./stocks.routes";
import { fiisRouter } from "./fiis.routes";
import { statisticsRouter } from "./datas.routes";

routes.use("/", indexRouter);
routes.use("/list", listRouter);
routes.use("/stocks", stocksRouter);
routes.use("/fiis", fiisRouter);
routes.use("/statistics", statisticsRouter);
