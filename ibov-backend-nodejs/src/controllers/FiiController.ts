import { Fii } from "../models/Fii";
import { IFiiRepository } from "../repositories/interfaces";

export class FiiController {
  constructor(private fiiRepository: IFiiRepository) {}

  async findOne(ticker: string) {
    try {
      const fii = await this.fiiRepository.findOne(ticker);
      return new Fii(fii);
    } catch (error) {
      console.error("Error on find one fii", error);
      throw error;
    }
  }
}
