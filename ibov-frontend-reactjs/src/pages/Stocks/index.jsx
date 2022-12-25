import { useEffect, useState } from "react";

import api from "../../services/api";

import FilterStocks from "../../components/FilterStocks";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavOptions from "../../components/NavOptions";

import { useFilter } from "../../hooks/FilterContext";

import { ContainerPage, Nav, Table } from "./styles";

export function Stocks() {
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
    api.get("/stocks").then((response) => setInfos(response.data.stockList));
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
          case "maxRoe":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.ROE));
              return value <= valueFilter;
            });
            break;
          case "maxRoa":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.ROA));
              return value <= valueFilter;
            });
            break;
          case "maxVpa":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.VPA));
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
          case "minRoe":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.ROE));
              return value >= valueFilter;
            });
            break;
          case "minRoa":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.ROA));
              return value >= valueFilter;
            });
            break;
          case "minVpa":
            filteredList = filteredList.filter((ticker) => {
              const value = Number(checkAndReplaceDot(ticker.VPA));
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
        {!error ? (
          <>
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
          </>
        ) : (
          <p>Erro! Limpe os filtros e cheque os campos novamente!</p>
        )}
      </Table>

      <Footer />
    </ContainerPage>
  );
}
