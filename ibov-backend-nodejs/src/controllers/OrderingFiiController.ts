import { DTOFii } from "../dtos/DTOFii";
import { FiiRepository } from "../repositories/FiiRepository";
import { IFiiRepository } from "../repositories/interfaces";
import { OrderingDataController, TypeOrdering } from "./OrderingDatasController";

export class OrderingFiiController extends OrderingDataController {
  private _data: DTOFii[] = [];
  private static instance: OrderingFiiController;

  private constructor(private fiiRepository: IFiiRepository) {
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

  async getData(): Promise<DTOFii[]> {
    return await this.fiiRepository.getAll();
  }

  async buildController() {
    this._data = await this.getData();
  }

  orderByDY(type: TypeOrdering): DTOFii[] {
    return this.ascendingOrDescending(this._data, type, "dy");
  }

  orderByPrice(type: TypeOrdering): DTOFii[] {
    return this.ascendingOrDescending(this._data, type, "price");
  }

  orderByPVP(type: TypeOrdering): DTOFii[] {
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
