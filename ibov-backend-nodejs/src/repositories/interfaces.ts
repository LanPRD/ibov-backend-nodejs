import { Fii } from "../models/Fii";
import { Stock } from "../models/Stock";

export interface IIbovRepository {
  getAll(): Promise<Stock[] | Fii[]>;
}
