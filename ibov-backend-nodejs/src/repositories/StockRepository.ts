import axios from "axios";
import { Stock } from "../models/Stock";
import { BaseRepository } from "./BaseRepository";
import { StockFilter, StockFilterProps } from "../constants/filters";
import { IIbovRepository } from "./interfaces";

export class StockRepository extends BaseRepository implements IIbovRepository {
  private _stockFilter = JSON.stringify(StockFilter).trim();

  public set stockFilter(filters: StockFilterProps) {
    this._stockFilter = JSON.stringify(filters);
  }

  public get stockFilter(): StockFilterProps {
    return JSON.parse(this._stockFilter);
  }

  async getAll(): Promise<Stock[]> {
    const { data } = await axios.get(`${StockRepository.baseUrl}?search=${encodeURIComponent(this._stockFilter)}`, {
      method: "GET",
      headers: StockRepository._headers,
      params: {
        CategoryType: StockRepository._stockId
      }
    });

    // console.log(data);

    return data;
  }
}
