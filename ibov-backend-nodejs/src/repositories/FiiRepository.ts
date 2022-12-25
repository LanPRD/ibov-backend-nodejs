import axios from "axios";
import { BaseRepository } from "./BaseRepository";
import { FiiFilter, FiiFilterProps } from "../constants/filters";
import { Fii } from "../models/Fii";

export class FiiRepository extends BaseRepository {
  private _fiiFilter = JSON.stringify(FiiFilter).trim();

  public set fiiFilter(filters: FiiFilterProps) {
    this._fiiFilter = JSON.stringify(filters);
  }

  public get fiiFilter(): FiiFilterProps {
    return JSON.parse(this._fiiFilter);
  }

  async getAll(): Promise<Fii[]> {
    const { data } = await axios.get(`${FiiRepository.baseUrl}?search=${encodeURIComponent(this._fiiFilter)}`, {
      method: "GET",
      headers: FiiRepository._headers,
      params: {
        CategoryType: FiiRepository._fiiId
      }
    });

    // console.log(data);

    return data;
  }
}
