import { useEffect, useState } from "react";

import api from "../../services/api";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavOptions } from "../../components/NavOptions";
import TableTopList from "../../components/TableTopList";

import { ContainerPage, Nav, Section } from "./styles";

export function TopList() {
  const [infos, setInfos] = useState({});

  useEffect(() => {
    api.get("/list").then(({ data }) => {
      setInfos({
        bestFiiDY: data.fii.bestDY.slice(0, 6),
        bestFiiPrice: data.fii.bestPrice.slice(0, 6),
        bestFiiPvp: data.fii.bestPvp.slice(0, 6),
        bestStockDY: data.stock.bestDY.slice(0, 6),
        bestStockROA: data.stock.bestROA.slice(0, 6),
        bestStockROE: data.stock.bestROE.slice(0, 6),
      });
    });
  }, []);

  if (!infos) {
    return <p>Loading ...</p>;
  }

  return (
    <ContainerPage>
      <Header title="Stocks and FIIs" />
      <Nav>
        <NavOptions
          linksName={[
            { nav: "HOME", to: "/" },
            { nav: "STOCK LIST", to: "/stocks" },
            { nav: "FII LIST", to: "/fiis" },
          ]}
        />
      </Nav>
      <main>
        <h1>TOP STOCKS</h1>
        <Section>
          <div>
            <TableTopList
              title="Best D.Y"
              header={["Ticker", "Price", "DY"]}
              type="DY"
              data={infos.bestStockDY}
            />
          </div>
          <div>
            <TableTopList
              title="Best ROA"
              header={["Ticker", "Price", "ROA"]}
              type="ROA"
              data={infos.bestStockROA}
            />
          </div>
          <div>
            <TableTopList
              title="Best ROE"
              header={["Ticker", "Price", "ROE"]}
              type="ROE"
              data={infos.bestStockROE}
            />
          </div>
        </Section>

        <h1>TOP FIIS</h1>
        <Section>
          <div>
            <TableTopList
              title="Best D.Y"
              header={["Ticker", "Price", "DY", "P/VP"]}
              type="DY Fii"
              data={infos.bestFiiDY}
            />
          </div>
          <div>
            <TableTopList
              title="Lowest Price"
              header={["Ticker", "Price", "DY", "P/VP"]}
              type="Lowest Price Fii"
              data={infos.bestFiiPrice}
            />
          </div>
          <div>
            <TableTopList
              title="Best P/VP"
              header={["Ticker", "Price", "DY", "P/VP"]}
              type="P/VP Fii"
              data={infos.bestFiiPvp}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </ContainerPage>
  );
}
