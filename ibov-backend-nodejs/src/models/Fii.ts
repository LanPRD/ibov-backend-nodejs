import { DTOFii } from "../dtos/DTOFii";

export class Fii {
  public readonly company_id?: number;
  public readonly company_name?: string;
  public readonly ticker?: string;
  public readonly price?: number;
  public readonly dy?: number;
  public readonly gestao?: string;
  public readonly p_vp?: number;
  public readonly valor_patrimonial_cota?: number;
  public readonly liquidez_media_diaria?: number;
  public readonly percentual_caixa?: number;
  public readonly dividend_cagr?: number;
  public readonly cota_cagr?: number;
  public readonly numero_cotistas?: number;
  public readonly numero_cotas?: number;
  public readonly patrimonio?: number;
  public readonly ultimo_dividendo?: number;

  constructor(props: DTOFii) {
    this.company_id = props["companyId"];
    this.company_name = props["companyName"];
    this.ticker = props["ticker"];
    this.price = props["price"];
    this.dy = props["dy"];
    this.gestao = props["gestao"];
    this.p_vp = props["p_vp"];
    this.valor_patrimonial_cota = props["valorpatrimonialcota"];
    this.liquidez_media_diaria = props["liquidezmediadiaria"];
    this.percentual_caixa = props["percentualcaixa"];
    this.dividend_cagr = props["dividend_cagr"];
    this.cota_cagr = props["cota_cagr"];
    this.numero_cotistas = props["numerocotistas"];
    this.numero_cotas = props["numerocotas"];
    this.patrimonio = props["patrimonio"];
    this.ultimo_dividendo = props["lastdividend"];
  }
}
