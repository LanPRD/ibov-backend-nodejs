import styled from "styled-components";

export const ContainerPage = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 100px 64px 1fr 25px;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";

  main {
    grid-area: main;

    width: 80vw;
    height: 100%;
    margin: auto;

    display: grid;
    grid-template-rows: 40px 1fr 40px 1fr;
    row-gap: 8px;

    h1 {
      font-size: 24px;

      display: flex;
      align-items: center;

      @media (max-width: 400px) {
        font-size: 16px;
      }
    }
  }

  footer {
    grid-area: footer;

    font-size: 14px;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  @media (max-width: 760px) {
    grid-template-rows: 100px 200px 1fr 25px;
  }
`;

export const Nav = styled.nav`
  grid-area: nav;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr 5fr 5fr 1fr;
  grid-template-areas: ". top1 top2 top3 .";
  column-gap: 16px;

  @media (max-width: 1130px) {
    grid-template-columns: 5fr 1fr 1fr 1fr 5fr;
    grid-template-areas:
      ". . . . ."
      ". top1 top1 top1 ."
      ". top2 . top3 ."
      ". . . . .";
    row-gap: 16px;
  }

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "."
      "top1"
      "top2"
      "top3"
      ".";
    row-gap: 16px;
  }

  & > div {
    min-width: 310px;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:nth-child(1) {
      grid-area: top1;
    }

    &:nth-child(2) {
      grid-area: top2;
    }

    &:nth-child(3) {
      grid-area: top3;
    }

    & + div {
      margin-left: 8px;
    }

    @media (max-width: 760px) {
      min-width: auto;
    }
  }
`;
