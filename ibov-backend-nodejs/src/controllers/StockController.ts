import { Stock } from "../models/Stock";
import { IStockRepository } from "../repositories/interfaces";

export class StockController {
  constructor(private stockRepository: IStockRepository) {}

  async findOne(ticker: string) {
    try {
      const stock = await this.stockRepository.findOne(ticker);
      return new Stock(stock);
    } catch (error) {
      console.error("Error on find one stock", error);
    }
  }
}
