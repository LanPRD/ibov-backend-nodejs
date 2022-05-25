import styled from "styled-components";

export const Content = styled.div`
  h1 {
    margin: 0 0 8px 0;
    font-size: 24px;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  font-size: 12px;

  @media (max-width: 400px) {
    font-size: 10px;
  }

  thead {
    font-size: 14px;
    line-height: 24px;
  }

  td {
    padding: 2px 16px;

    @media (max-width: 400px) {
      padding: 2px 8px;
    }
  }
`;
