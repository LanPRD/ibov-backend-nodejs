import { useEffect, useState } from "react";

import api from "../../services/api";

import FilterFiis from "../../components/FilterFiis";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavOptions from "../../components/NavOptions";

import { useFilter } from "../../hooks/FilterContext";

import { ContainerPage, Nav, Table } from "./styles";

export function Fiis() {
  const { dataToFilter, clearFilter, setDataToFilter } = useFilter();

  const [infos, setInfos] = useState([]);
  const [error, setError] = useState(false);

  function checkAndReplaceDot(string, checkField = false) {
    if (checkField) {
      showError(string);
    }

    if (string.includes(".") && string.includes(",")) {
      return string.replace(".", "").replace(",", ".");
    } else if (string.includes(",")) {
      return string.replace(",", ".");
    } else if (string.includes(".") && !string.includes(",")) {
      return string.replace(".", "");
    } else {
      return string;
    }
  }

  function showError(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === ",") {
        count += 1;
      }
    }

    if (count > 1) {
      setError(true);
      count = 0;
      return;
    }
  }

  useEffect(() => {
    api.get("/fiis").then((response) => setInfos(response.data.fiiList));
    setDataToFilter([]);
    setError(false);
  }, [clearFilter]);

  useEffect(() => {
    let filteredList = [...infos];

    if (dataToFilter) {
      for (let field in dataToFilter) {
        const valueFilter = Number(
          checkAndReplaceDot(dataToFilter[field].value, true)
        );

        switch (field) {
          case "maxDy":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.DY));
              return value <= valueFilter;
            });
            break;
          case "maxPrice":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.PRECO));
              return value <= valueFilter;
            });
            break;
          case "maxPvp":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.PVP));
              return value <= valueFilter;
            });
            break;
          case "minDy":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.DY));
              return value >= valueFilter;
            });
            break;
          case "minPrice":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.PRECO));
              return value >= valueFilter;
            });
            break;
          case "minPvp":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.PVP));
              return value >= valueFilter;
            });
            break;
          case "ticker":
            filteredList = filteredList.filter(
              (ticker) => ticker.TICKER === dataToFilter[field].value
            );
            break;
          default:
        }
      }
    }

    setInfos(filteredList);
  }, [dataToFilter]);

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
        {!error ? (
          <>
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
          </>
        ) : (
          <p>Erro! Limpe os filtros e cheque os campos novamente!</p>
        )}
      </Table>

      <Footer />
    </ContainerPage>
  );
}
