import styled from "styled-components";

export const TopListContainer = styled.div`
  main {
    width: 80vw;
    margin: auto;

    display: grid;
    grid-template-rows: 40px 1fr 40px 1fr;
    row-gap: 8px;

    h2 {
      font-size: 24px;

      display: flex;
      align-items: center;

      @media (max-width: 400px) {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 760px) {
    grid-template-rows: 100px 200px 1fr 25px;
  }
`;

export const TopListSection = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 16px;
`;
