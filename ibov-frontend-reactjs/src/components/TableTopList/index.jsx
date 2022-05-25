import React from "react";

import { Content, Table } from "./styles";

const TableTop = ({ title, header, type, data }) => {
  if (!data) {
    return <p>Loading ...</p>;
  }

  return (
    <Content>
      <h1>{title}</h1>
      <Table>
        <thead>
          <tr>
            {header.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              {type === "DY" ? (
                <>
                  <td>{data.TICKER}</td>
                  <td>{data.PRECO}</td>
                  <td>{data.DY}</td>
                </>
              ) : null}

              {type === "ROA" ? (
                <>
                  <td>{data.TICKER}</td>
                  <td>{data.PRECO}</td>
                  <td>{data.ROA}</td>
                </>
              ) : null}

              {type === "ROE" ? (
                <>
                  <td>{data.TICKER}</td>
                  <td>{data.PRECO}</td>
                  <td>{data.ROE}</td>
                </>
              ) : null}

              {type === "DY Fii" ? (
                <>
                  <td>{data.TICKER}</td>
                  <td>{data.PRECO}</td>
                  <td>{data.DY}</td>
                  <td>{data.PVP}</td>
                </>
              ) : null}

              {type === "Lowest Price Fii" ? (
                <>
                  <td>{data.TICKER}</td>
                  <td>{data.PRECO}</td>
                  <td>{data.DY}</td>
                  <td>{data.PVP}</td>
                </>
              ) : null}

              {type === "P/VP Fii" ? (
                <>
                  <td>{data.TICKER}</td>
                  <td>{data.PRECO}</td>
                  <td>{data.DY}</td>
                  <td>{data.PVP}</td>
                </>
              ) : null}
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );
};

export default TableTop;
