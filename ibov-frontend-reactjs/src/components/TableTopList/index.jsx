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
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                </>
              ) : null}

              {type === "ROA" ? (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.roa}</td>
                </>
              ) : null}

              {type === "ROE" ? (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.roe}</td>
                </>
              ) : null}

              {type === "DY Fii" ? (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                  <td>{data.p_vp}</td>
                </>
              ) : null}

              {type === "Lowest Price Fii" ? (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                  <td>{data.p_vp}</td>
                </>
              ) : null}

              {type === "P/VP Fii" ? (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                  <td>{data.p_vp}</td>
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
