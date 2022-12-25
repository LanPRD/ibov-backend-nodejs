import { useEffect, useState } from "react";

import api from "../../services/api";

import FilterStocks from "../../components/FilterStocks";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavOptions } from "../../components/NavOptions";

import { ContainerPage, Nav, Table } from "./styles";

export function Stocks() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    api.get("/stocks").then((response) => setInfos(response.data.stockList));
  }, []);

  if (!infos) {
    return <p>Loading...</p>;
  }

  return (
    <ContainerPage>
      <Header title="Stocks" />

      <Nav>
        <NavOptions
          linksName={[
            { nav: "HOME", to: "/" },
            { nav: "TOP LIST", to: "/toplist" },
            { nav: "FII LIST", to: "/fiis" },
          ]}
        />
      </Nav>

      <FilterStocks />

      <Table>
        <thead>
          <tr>
            <th>TICKER</th>
            <th>PREÇO</th>
            <th>DY</th>
            <th>ROE</th>
            <th>ROA</th>
            <th>VPA</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((stock, index) => (
            <tr key={index}>
              <td>{stock.ticker}</td>
              <td>{stock.price}</td>
              <td>{stock.dy}</td>
              <td>{stock.roe}</td>
              <td>{stock.roa}</td>
              <td>{stock.vpa}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer />
    </ContainerPage>
  );
}
