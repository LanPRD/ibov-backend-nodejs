import axios from "axios";
import qs from "qs";
import { StockFilter, StockFilterProps } from "../constants/filters";
import { DTOStock } from "../dtos/DTOStock";
import { AppError } from "../utils/Error";
import { BaseRepository } from "./BaseRepository";
import { IStockRepository } from "./interfaces";

export class StockRepository extends BaseRepository implements IStockRepository {
  private _stockFilter = JSON.stringify(StockFilter).trim();

  public set stockFilter(filters: StockFilterProps) {
    this._stockFilter = JSON.stringify(filters);
  }

  public get stockFilter(): StockFilterProps {
    return JSON.parse(this._stockFilter);
  }

  async getAll(): Promise<DTOStock[]> {
    const { data } = await axios.get(`${StockRepository.listAllUrl}?search=${encodeURIComponent(this._stockFilter)}`, {
      method: "GET",
      headers: StockRepository.headers,
      params: {
        CategoryType: StockRepository.stockId
      }
    });

    return data;
  }

  async findOne(ticker: string): Promise<DTOStock> {
    try {
      const { data } = await axios.get(StockRepository.stockIndicatorHistoricalListUrl, {
        method: "POST",
        headers: { ...StockRepository.headers, "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          "codes[]": ticker,
          time: 7,
          byQuarter: false,
          futureData: false
        })
      });

      if (data.success) {
        return data.data[ticker];
      }

      throw new AppError("Código (Ticker) inválido", 400);
    } catch (error) {
      throw new AppError("Internal server error", 500);
    }
  }
}
