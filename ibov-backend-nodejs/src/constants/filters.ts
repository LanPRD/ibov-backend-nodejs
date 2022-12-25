interface OptionsFilter {
  Item1: string | null;
  Item2: string | null;
}

export interface FiiFilterProps {
  Segment: string;
  Gestao: string;
  my_range: string;
  dy: OptionsFilter;
  p_vp: OptionsFilter;
  percentualcaixa: OptionsFilter;
  numerocotistas: OptionsFilter;
  dividend_cagr: OptionsFilter;
  cota_cagr: OptionsFilter;
  liquidezmediadiaria: OptionsFilter;
  patrimonio: OptionsFilter;
  valorpatrimonialcota: OptionsFilter;
  numerocotas: OptionsFilter;
  lastdividend: OptionsFilter;
}

export interface StockFilterProps {
  Sector: string;
  SubSector: string;
  Segment: string;
  my_range: string;
  dy: OptionsFilter;
  p_L: OptionsFilter;
  p_VP: OptionsFilter;
  p_Ativo: OptionsFilter;
  margemBruta: OptionsFilter;
  margemEbit: OptionsFilter;
  margemLiquida: OptionsFilter;
  p_Ebit: OptionsFilter;
  eV_Ebit: OptionsFilter;
  dividaLiquidaEbit: OptionsFilter;
  dividaliquidaPatrimonioLiquido: OptionsFilter;
  p_SR: OptionsFilter;
  p_CapitalGiro: OptionsFilter;
  p_AtivoCirculante: OptionsFilter;
  roe: OptionsFilter;
  roic: OptionsFilter;
  roa: OptionsFilter;
  liquidezCorrente: OptionsFilter;
  pl_Ativo: OptionsFilter;
  passivo_Ativo: OptionsFilter;
  giroAtivos: OptionsFilter;
  receitas_Cagr5: OptionsFilter;
  lucros_Cagr5: OptionsFilter;
  liquidezMediaDiaria: OptionsFilter;
}

export let FiiFilter: FiiFilterProps = {
  Segment: "",
  Gestao: "",
  my_range: "0;20",
  dy: { Item1: null, Item2: null },
  p_vp: { Item1: null, Item2: null },
  percentualcaixa: { Item1: null, Item2: null },
  numerocotistas: { Item1: null, Item2: null },
  dividend_cagr: { Item1: null, Item2: null },
  cota_cagr: { Item1: null, Item2: null },
  liquidezmediadiaria: { Item1: null, Item2: null },
  patrimonio: { Item1: null, Item2: null },
  valorpatrimonialcota: { Item1: null, Item2: null },
  numerocotas: { Item1: null, Item2: null },
  lastdividend: { Item1: null, Item2: null }
};

export let StockFilter: StockFilterProps = {
  Sector: "",
  SubSector: "",
  Segment: "",
  my_range: "0;25",
  dy: { Item1: null, Item2: null },
  p_L: { Item1: null, Item2: null },
  p_VP: { Item1: null, Item2: null },
  p_Ativo: { Item1: null, Item2: null },
  margemBruta: { Item1: null, Item2: null },
  margemEbit: { Item1: null, Item2: null },
  margemLiquida: { Item1: null, Item2: null },
  p_Ebit: { Item1: null, Item2: null },
  eV_Ebit: { Item1: null, Item2: null },
  dividaLiquidaEbit: { Item1: null, Item2: null },
  dividaliquidaPatrimonioLiquido: { Item1: null, Item2: null },
  p_SR: { Item1: null, Item2: null },
  p_CapitalGiro: { Item1: null, Item2: null },
  p_AtivoCirculante: { Item1: null, Item2: null },
  roe: { Item1: null, Item2: null },
  roic: { Item1: null, Item2: null },
  roa: { Item1: null, Item2: null },
  liquidezCorrente: { Item1: null, Item2: null },
  pl_Ativo: { Item1: null, Item2: null },
  passivo_Ativo: { Item1: null, Item2: null },
  giroAtivos: { Item1: null, Item2: null },
  receitas_Cagr5: { Item1: null, Item2: null },
  lucros_Cagr5: { Item1: null, Item2: null },
  liquidezMediaDiaria: { Item1: null, Item2: null }
};
