import { DTOFii } from "../dtos/DTOFii";
import { DTOStock } from "../dtos/DTOStock";

export interface IStockRepository {
  getAll(): Promise<DTOStock[]>;
  findOne(ticker: string): Promise<DTOStock>;
}

export interface IFiiRepository {
  getAll(): Promise<DTOFii[]>;
  findOne(ticker: string): Promise<DTOFii>;
}
