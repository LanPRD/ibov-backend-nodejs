export class BaseRepository {
  private static readonly _baseUrl: string = "https://statusinvest.com.br";
  protected static readonly listAllUrl: string = `${this._baseUrl}/category/advancedsearchresult`;
  protected static readonly indicatorHistoricalListUrl: string = `${this._baseUrl}/acao/indicatorhistoricallist`;
  protected static readonly fiiIndicatorHistoricalListUrl: string = `${this._baseUrl}/fii/indicatorhistoricallist`;
  protected static stockId: number = 1;
  protected static fiiId: number = 2;
  protected static readonly headers: { [key: string]: string } = {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)"
  };
}
