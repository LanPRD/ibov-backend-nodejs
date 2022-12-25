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

  async orderByDY(type: TypeOrdering): Promise<Fii[]> {
    return this.ascendingOrDescending(
      this._data.filter(stock => stock.dy && stock.dy > 0).sort((a, b) => b.dy! - a.dy!),
      type
    );
  }

  async orderByPrice(type: TypeOrdering): Promise<Fii[]> {
    return this.ascendingOrDescending(
      this._data.filter(stock => stock.price && stock.price > 0).sort((a, b) => b.price! - a.price!),
      type
    );
  }

  async topRatios() {
    const bestDY = await this.orderByDY("descending");
    const bestPrice = await this.orderByPrice("descending");

    return {
      bestDY: bestDY,
      bestPrice: bestPrice
    };
  }
}
