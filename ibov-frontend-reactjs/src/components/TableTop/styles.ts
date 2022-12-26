import styled from "styled-components";

export const TableTopContainer = styled.div`
  min-width: 40rem;
  width: 400px;
  padding: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;

  h3 {
    margin: 0 0 1.6rem 0;
    font-size: 2.4rem;
  }
`;

export const TableContent = styled.table`
  width: 100%;
  text-align: center;

  thead {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  td {
    padding: 2px 16px;
    font-size: 1.4rem;

    @media (max-width: 400px) {
      padding: 2px 8px;
    }
  }
`;
