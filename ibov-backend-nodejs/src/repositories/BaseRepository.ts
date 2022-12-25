export class BaseRepository {
  protected static readonly baseUrl: string = "https://statusinvest.com.br/category/advancedsearchresult";
  protected static _stockId: number = 1;
  protected static _fiiId: number = 2;
  protected static readonly _headers: { [key: string]: string } = {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)"
  };
}
