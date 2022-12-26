import { IFii } from "../../interfaces/Fii";
import { IStock } from "../../interfaces/Stock";
import { TableTopContainer, TableContent } from "./styles";

interface TableTopProps {
  title: string;
  header: string[];
  type: string;
  data: IFii[] | IStock[];
}

export function TableTop({ title, header, type, data }: TableTopProps) {
  if (!data) {
    return <p>Loading ...</p>;
  }

  return (
    <TableTopContainer>
      <h3>{title}</h3>

      <TableContent>
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
              {type === "DY" && (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                </>
              )}

              {type === "ROA" && (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.roa}</td>
                </>
              )}

              {type === "ROE" && (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.roe}</td>
                </>
              )}

              {type === "DY Fii" && (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                  <td>{data.p_vp}</td>
                </>
              )}

              {type === "Lowest Price Fii" && (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                  <td>{data.p_vp}</td>
                </>
              )}

              {type === "P/VP Fii" && (
                <>
                  <td>{data.ticker}</td>
                  <td>{data.price}</td>
                  <td>{data.dy}</td>
                  <td>{data.p_vp}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </TableContent>
    </TableTopContainer>
  );
}
