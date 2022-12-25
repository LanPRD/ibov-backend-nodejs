export class Fii {
  public readonly companyId?: number;
  public readonly companyName?: string;
  public readonly ticker?: string;
  public readonly price?: number;
  public readonly gestao?: string;
  public readonly dy?: number;
  public readonly p_vp?: number;
  public readonly valorpatrimonialcota?: number;
  public readonly liquidezmediadiaria?: number;
  public readonly percentualcaixa?: number;
  public readonly dividend_cagr?: number;
  public readonly cota_cagr?: number;
  public readonly numerocotistas?: number;
  public readonly numerocotas?: number;
  public readonly patrimonio?: number;
  public readonly lastdividend?: number;

  constructor(props: Fii) {
    Object.assign(this, props); // attribute each object from props to this.
  }
}
