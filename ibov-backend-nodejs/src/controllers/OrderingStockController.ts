import { Stock } from "../models/Stock";
import { IIbovRepository } from "../repositories/interfaces";
import { StockRepository } from "../repositories/StockRepository";
import { OrderingDataController, TypeOrdering } from "./OrderingDatasController";

export class OrderingStockController extends OrderingDataController {
  private _data: Stock[] = [];
  private static instance: OrderingStockController;

  private constructor(private ibovRepository: IIbovRepository) {
    super();
  }

  get numberOfStocks() {
    return this._data.length;
  }

  public static getInstance(): OrderingStockController {
    if (!OrderingStockController.instance) {
      OrderingStockController.instance = new OrderingStockController(new StockRepository());
    }

    return OrderingStockController.instance;
  }

  async getData(): Promise<Stock[]> {
    return (await this.ibovRepository.getAll()) as Stock[];
  }

  async buildController() {
    this._data = await this.getData();
  }

  orderByROE(type: TypeOrdering): Stock[] {
    return this.ascendingOrDescending(this._data, type, "roe");
  }

  orderByROA(type: TypeOrdering): Stock[] {
    return this.ascendingOrDescending(this._data, type, "roa");
  }

  orderByPVP(type: TypeOrdering): Stock[] {
    return this.ascendingOrDescending(this._data, type, "p_VP");
  }

  orderByDY(type: TypeOrdering): Stock[] {
    return this.ascendingOrDescending(this._data, type, "dy");
  }

  orderByPrice(type: TypeOrdering): Stock[] {
    return this.ascendingOrDescending(this._data, type, "price");
  }

  topRatios() {
    const bestROE = this.orderByROE("descending");
    const bestROA = this.orderByROA("descending");
    const bestPVP = this.orderByPVP("descending");
    const bestDY = this.orderByDY("descending");
    const bestPrice = this.orderByPrice("descending");

    return {
      bestROE: bestROE,
      bestROA: bestROA,
      bestPVP: bestPVP,
      bestDY: bestDY,
      bestPrice: bestPrice
    };
  }
}
