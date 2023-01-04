import { Stock } from "../models/Stock";
import { IStockRepository } from "../repositories/interfaces";

export class StockController {
  constructor(private stockRepository: IStockRepository) {}

  async findOne(ticker: string) {
    const stock = await this.stockRepository.findOne(ticker);
    return stock;
  }
}
