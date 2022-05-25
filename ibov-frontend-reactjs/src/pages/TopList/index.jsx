import React, { useEffect, useState } from "react";

import api from "../../services/api";

import Header from "../../components/Header";
import NavOptions from "../../components/NavOptions";
import TableTopList from "../../components/TableTopList";
import Footer from "../../components/Footer";

import { ContainerPage, Nav, Section } from "./styles";

const TopList = () => {
  const [infos, setInfos] = useState({});

  useEffect(() => {
    api.get("/list").then((reponse) => {
      setInfos({
        fiiTopDy: reponse.data.fiiTopDy,
        fiiTopPrice: reponse.data.fiiTopPrice,
        fiiTopPvp: reponse.data.fiiTopPvp,
        stockTopDy: reponse.data.stockTopDy,
        stockTopRoa: reponse.data.stockTopRoa,
        stockTopRoe: reponse.data.stockTopRoe,
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
              data={infos.stockTopDy}
            />
          </div>
          <div>
            <TableTopList
              title="Best ROA"
              header={["Ticker", "Price", "ROA"]}
              type="ROA"
              data={infos.stockTopRoa}
            />
          </div>
          <div>
            <TableTopList
              title="Best ROE"
              header={["Ticker", "Price", "ROE"]}
              type="ROE"
              data={infos.stockTopRoe}
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
              data={infos.fiiTopDy}
            />
          </div>
          <div>
            <TableTopList
              title="Lowest Price"
              header={["Ticker", "Price", "DY", "P/VP"]}
              type="Lowest Price Fii"
              data={infos.fiiTopPrice}
            />
          </div>
          <div>
            <TableTopList
              title="Best P/VP"
              header={["Ticker", "Price", "DY", "P/VP"]}
              type="P/VP Fii"
              data={infos.fiiTopPvp}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </ContainerPage>
  );
};

export default TopList;
