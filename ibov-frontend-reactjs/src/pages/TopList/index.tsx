import { useEffect, useState } from "react";

import api from "../../services/api";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavOptions } from "../../components/NavOptions";
import { TableTop } from "../../components/TableTop";

import { IFii } from "../../interfaces/Fii";
import { IStock } from "../../interfaces/Stock";
import { TopListContainer, TopListSection } from "./styles";

interface Infos {
  bestFiiDY: IFii[];
  bestFiiPrice: IFii[];
  bestFiiPvp: IFii[];
  bestStockDY: IStock[];
  bestStockROA: IStock[];
  bestStockROE: IStock[];
}

export function TopList() {
  const [infos, setInfos] = useState<Infos>({} as Infos);

  useEffect(() => {
    api.get("/list").then(({ data }) => {
      setInfos({
        bestFiiDY: data.fii.bestDY.slice(0, 10),
        bestFiiPrice: data.fii.bestPrice.slice(0, 10),
        bestFiiPvp: data.fii.bestPvp.slice(0, 10),
        bestStockDY: data.stock.bestDY.slice(0, 10),
        bestStockROA: data.stock.bestROA.slice(0, 10),
        bestStockROE: data.stock.bestROE.slice(0, 10),
      });
    });
  }, []);

  if (!infos) {
    return <p>Loading ...</p>;
  }

  return (
    <TopListContainer>
      <Header title="Stocks and FIIs" />

      <NavOptions />

      <main>
        <h2>TOP STOCKS</h2>

        <TopListSection>
          <TableTop
            title="Best D.Y"
            header={["Ticker", "Price", "DY"]}
            type="DY"
            data={infos.bestStockDY}
          />

          <TableTop
            title="Best ROA"
            header={["Ticker", "Price", "ROA"]}
            type="ROA"
            data={infos.bestStockROA}
          />

          <TableTop
            title="Best ROE"
            header={["Ticker", "Price", "ROE"]}
            type="ROE"
            data={infos.bestStockROE}
          />
        </TopListSection>

        <h2>TOP FIIS</h2>

        <TopListSection>
          <TableTop
            title="Best D.Y"
            header={["Ticker", "Price", "DY", "P/VP"]}
            type="DY Fii"
            data={infos.bestFiiDY}
          />

          <TableTop
            title="Lowest Price"
            header={["Ticker", "Price", "DY", "P/VP"]}
            type="Lowest Price Fii"
            data={infos.bestFiiPrice}
          />

          <TableTop
            title="Best P/VP"
            header={["Ticker", "Price", "DY", "P/VP"]}
            type="P/VP Fii"
            data={infos.bestFiiPvp}
          />
        </TopListSection>
      </main>

      <Footer />
    </TopListContainer>
  );
}
