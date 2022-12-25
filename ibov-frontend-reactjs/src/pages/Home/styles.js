import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;

  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "content background";
  }

  @media (max-width: 600px) {
    grid-template-areas:
      "content"
      "background";
  }
`;

export const Background = styled.div`
  grid-area: "background";

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  color: white;
  text-align: center;

  background: linear-gradient(
    275deg,
    rgba(78, 189, 208, 1) 0%,
    rgba(100, 69, 182, 1) 95%
  );

  h1 {
    font-size: 34px;
    font-weight: 700;
  }

  h2 {
    font-size: 21px;
    font-weight: normal;

    margin-bottom: 34px;
  }

  a {
    font-weight: 700;
    font-size: 14px;

    padding: 14px 88px;

    color: #4ebdd0;
    border: 1px solid white;
    border-radius: 21px;
    background: white;
    opacity: 0.4;

    text-decoration: none;
    transition: 500ms;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: clamp(21px, 6vw, 27px);
    }

    h2 {
      font-size: clamp(14px, 4vw, 18px);
    }

    a {
      padding: 16px 64px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: clamp(18px, 50vw, 21px);
    }

    h2 {
      font-size: clamp(10px, 50vw, 14px);
    }

    a {
      padding: 8px 48px;
    }
  }
`;

export const Content = styled.div`
  grid-area: "content";

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;

  position: relative;

  header {
    text-align: center;

    h2 {
      font-size: 21px;
    }

    p {
      font-size: 14px;
    }

    & + header {
      margin-top: 32px;
    }
  }

  footer {
    position: absolute;
    bottom: 0;

    font-size: 14px;

    @media (max-width: 768px) {
      font-size: clamp(8px, 50vw, 12px);
    }
  }
`;
