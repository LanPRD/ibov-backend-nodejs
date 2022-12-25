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

  async orderByROE(type: TypeOrdering): Promise<Stock[]> {
    return this.ascendingOrDescending(
      this._data.filter(stock => stock.roe && stock.roe > 0).sort((a, b) => b.roe! - a.roe!),
      type
    );
  }

  async orderByROA(type: TypeOrdering): Promise<Stock[]> {
    return this.ascendingOrDescending(
      this._data.filter(stock => stock.roa && stock.roa > 0).sort((a, b) => b.roa! - a.roa!),
      type
    );
  }

  async orderByPVP(type: TypeOrdering): Promise<Stock[]> {
    return this.ascendingOrDescending(
      this._data.filter(stock => stock.p_VP && stock.p_VP > 0).sort((a, b) => b.p_VP! - a.p_VP!),
      type
    );
  }

  async orderByDY(type: TypeOrdering): Promise<Stock[]> {
    return this.ascendingOrDescending(
      this._data.filter(stock => stock.dy && stock.dy > 0).sort((a, b) => b.dy! - a.dy!),
      type
    );
  }

  async orderByPrice(type: TypeOrdering): Promise<Stock[]> {
    return this.ascendingOrDescending(
      this._data.filter(stock => stock.price && stock.price > 0).sort((a, b) => b.price! - a.price!),
      type
    );
  }

  async topRatios() {
    const bestROE = await this.orderByROE("descending");
    const bestROA = await this.orderByROA("descending");
    const bestPVP = await this.orderByPVP("descending");
    const bestDY = await this.orderByDY("descending");
    const bestPrice = await this.orderByPrice("descending");

    return {
      bestROE: bestROE,
      bestROA: bestROA,
      bestPVP: bestPVP,
      bestDY: bestDY,
      bestPrice: bestPrice
    };
  }
}
