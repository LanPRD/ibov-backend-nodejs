export class Stock {
  public readonly companyId?: number;
  public readonly companyName?: string;
  public readonly ticker?: string;
  public readonly price?: number;
  public readonly p_L?: number;
  public readonly dy?: number;
  public readonly p_VP?: number;
  public readonly p_Ebit?: number;
  public readonly p_Ativo?: number;
  public readonly eV_Ebit?: number;
  public readonly margemBruta?: number;
  public readonly margemEbit?: number;
  public readonly margemLiquida?: number;
  public readonly p_SR?: number;
  public readonly p_CapitalGiro?: number;
  public readonly p_AtivoCirculante?: number;
  public readonly giroAtivos?: number;
  public readonly roe?: number;
  public readonly roa?: number;
  public readonly roic?: number;
  public readonly dividaliquidaPatrimonioLiquido?: number;
  public readonly dividaLiquidaEbit?: number;
  public readonly pl_Ativo?: number;
  public readonly passivo_Ativo?: number;
  public readonly liquidezCorrente?: number;
  public readonly peg_Ratio?: number;
  public readonly receitas_Cagr5?: number;
  public readonly lucros_Cagr5?: number;
  public readonly liquidezMediaDiaria?: number;
  public readonly vpa?: number;
  public readonly lpa?: number;
  public readonly valorMercado?: number;

  constructor(props: Stock) {
    Object.assign(this, props); // attribute each object from props to this.
  }
}
