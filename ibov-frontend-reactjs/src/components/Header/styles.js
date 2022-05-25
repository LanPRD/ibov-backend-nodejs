import styled from "styled-components";

export const HeaderStyle = styled.header`
  grid-area: header;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    275deg,
    rgba(78, 189, 208, 1) 0%,
    rgba(100, 69, 182, 1) 100%
  );

  h1 {
    color: white;
    font-size: 36px;
  }
`;
