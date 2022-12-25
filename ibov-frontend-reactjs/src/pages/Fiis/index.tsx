import { useEffect, useState } from "react";

import api from "../../services/api";

import FilterFiis from "../../components/FilterFiis";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavOptions } from "../../components/NavOptions";

import { ContainerPage, Nav, Table } from "./styles";

export function Fiis() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    api.get("/fiis").then((response) => setInfos(response.data.fiiList));
  }, []);

  if (!infos) {
    return <p>Loading...</p>;
  }

  return (
    <ContainerPage>
      <Header title="Fiis" />

      <Nav>
        <NavOptions
          linksName={[
            { nav: "HOME", to: "/" },
            ,
            { nav: "STOCK LIST", to: "/stocks" },
            { nav: "TOP LIST", to: "/toplist" },
          ]}
        />
      </Nav>

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
          {infos.map((fii, index) => (
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
    </ContainerPage>
  );
}
