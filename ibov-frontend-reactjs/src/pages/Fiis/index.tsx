import { useEffect, useState } from "react";

import api from "../../services/api";

import FilterFiis from "../../components/FilterFiis";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavOptions } from "../../components/NavOptions";

import { IFii } from "../../interfaces/Fii";

import { FiiContainer, Table } from "./styles";

export function Fiis() {
  const [fiis, setFiis] = useState<IFii[]>([]);

  useEffect(() => {
    api.get("/fiis").then((response) => setFiis(response.data.fiiList));
  }, []);

  if (!fiis) {
    return <p>Loading...</p>;
  }

  return (
    <FiiContainer>
      <Header title="Fiis" />

      <NavOptions />

      <FilterFiis />

      <Table>
        <thead>
          <tr>
            <th>TICKER</th>
            <th>PREÇO</th>
            <th>DY</th>
            <th>PVP</th>
          </tr>
        </thead>
        <tbody>
          {fiis.map((fii, index) => (
            <tr key={index}>
              <td>{fii.ticker}</td>
              <td>{fii.price}</td>
              <td>{fii.dy}</td>
              <td>{fii.p_vp}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer />
    </FiiContainer>
  );
}
