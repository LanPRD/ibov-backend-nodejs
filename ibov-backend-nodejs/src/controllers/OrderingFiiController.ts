import { Fii } from "../models/Fii";
import { FiiRepository } from "../repositories/FiiRepository";
import { IIbovRepository } from "../repositories/interfaces";
import { OrderingDataController, TypeOrdering } from "./OrderingDatasController";

export class OrderingFiiController extends OrderingDataController {
  private _data: Fii[] = [];
  private static instance: OrderingFiiController;

  private constructor(private ibovRepository: IIbovRepository) {
    super();
  }

  get numberOfFiis() {
    return this._data.length;
  }

  public static getInstance(): OrderingFiiController {
    if (!OrderingFiiController.instance) {
      OrderingFiiController.instance = new OrderingFiiController(new FiiRepository());
    }

    return OrderingFiiController.instance;
  }

  async getData(): Promise<Fii[]> {
    return (await this.ibovRepository.getAll()) as Fii[];
  }

  async buildController() {
    this._data = await this.getData();
  }

  orderByDY(type: TypeOrdering): Fii[] {
    return this.ascendingOrDescending(this._data, type, "dy");
  }

  orderByPrice(type: TypeOrdering): Fii[] {
    return this.ascendingOrDescending(this._data, type, "price");
  }

  orderByPVP(type: TypeOrdering): Fii[] {
    return this.ascendingOrDescending(this._data, type, "p_vp");
  }

  topRatios() {
    const bestDY = this.orderByDY("descending");
    const bestPrice = this.orderByPrice("descending");
    const bestPvp = this.orderByPVP("descending");

    return {
      bestDY: bestDY,
      bestPrice: bestPrice,
      bestPvp: bestPvp
    };
  }
}
