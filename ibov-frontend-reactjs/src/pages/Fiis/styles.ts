import styled from "styled-components";

export const FiiContainer = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-rows: 100px 64px auto 1fr 24px;
  grid-template-areas:
    "header"
    "nav"
    "filters"
    "main"
    "footer";
`;

export const Table = styled.table`
  margin: 24px auto 0;
  min-width: 760px;
  text-align: center;

  th {
    font-size: 14px;
    padding-bottom: 8px;
  }

  td {
    padding-bottom: 2px;
    font-size: 12px;
  }
`;
