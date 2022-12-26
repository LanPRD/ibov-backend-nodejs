import { useEffect, useState } from "react";

import api from "../../services/api";

import FilterStocks from "../../components/FilterStocks";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavOptions } from "../../components/NavOptions";

import { IStock } from "../../interfaces/Stock";

import { StocksContainer, Table } from "./styles";

export function Stocks() {
  const [stocks, setStocks] = useState<IStock[]>([]);

  useEffect(() => {
    api.get("/stocks").then((response) => setStocks(response.data.stockList));
  }, []);

  if (!stocks) {
    return <p>Loading...</p>;
  }

  return (
    <StocksContainer>
      <Header title="Stocks" />

      <NavOptions />

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
          {stocks.map((stock, index) => (
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
    </StocksContainer>
  );
}
