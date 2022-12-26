import { DTOStock } from "../dtos/DTOStock";
import { IStockRepository } from "../repositories/interfaces";
import { StockRepository } from "../repositories/StockRepository";
import { OrderingDataController, TypeOrdering } from "./OrderingDatasController";

export class OrderingStockController extends OrderingDataController {
  private _data: DTOStock[] = [];
  private static instance: OrderingStockController;

  private constructor(private stockRepository: IStockRepository) {
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

  async getData(): Promise<DTOStock[]> {
    return await this.stockRepository.getAll();
  }

  async buildController() {
    this._data = await this.getData();
  }

  orderByROE(type: TypeOrdering): DTOStock[] {
    return this.ascendingOrDescending(this._data, type, "roe");
  }

  orderByROA(type: TypeOrdering): DTOStock[] {
    return this.ascendingOrDescending(this._data, type, "roa");
  }

  orderByPVP(type: TypeOrdering): DTOStock[] {
    return this.ascendingOrDescending(this._data, type, "p_VP");
  }

  orderByDY(type: TypeOrdering): DTOStock[] {
    return this.ascendingOrDescending(this._data, type, "dy");
  }

  orderByPrice(type: TypeOrdering): DTOStock[] {
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
