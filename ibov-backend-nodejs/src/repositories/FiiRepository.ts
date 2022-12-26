import axios from "axios";
import qs from "qs";
import { FiiFilter, FiiFilterProps } from "../constants/filters";
import { DTOFii } from "../dtos/DTOFii";
import { BaseRepository } from "./BaseRepository";
import { IFiiRepository } from "./interfaces";

export class FiiRepository extends BaseRepository implements IFiiRepository {
  private _fiiFilter = JSON.stringify(FiiFilter).trim();

  public set fiiFilter(filters: FiiFilterProps) {
    this._fiiFilter = JSON.stringify(filters);
  }

  public get fiiFilter(): FiiFilterProps {
    return JSON.parse(this._fiiFilter);
  }

  async getAll(): Promise<DTOFii[]> {
    const { data } = await axios.get(`${FiiRepository.listAllUrl}?search=${encodeURIComponent(this._fiiFilter)}`, {
      method: "GET",
      headers: FiiRepository.headers,
      params: {
        CategoryType: FiiRepository.fiiId
      }
    });

    return data;
  }

  async findOne(ticker: string): Promise<DTOFii> {
    console.log(ticker);

    try {
      const { data } = await axios.get(FiiRepository.fiiIndicatorHistoricalListUrl, {
        method: "POST",
        headers: { ...FiiRepository.headers, "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          "codes[]": ticker,
          time: 0,
          byQuarter: false,
          futureData: false
        })
      });

      console.log(data);

      return data.data[ticker];
    } catch (error) {
      throw error;
    }
  }
}
