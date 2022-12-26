import styled from "styled-components";

export const NavOption = styled.ul`
  list-style-type: none;
  color: white;
  font-weight: 700;

  background: #4bebd0;
  border: 1px solid #4bebd0;
  border-radius: 12px;

  padding: 16px 56px;

  display: flex;
  justify-content: space-between;

  @media (min-width: 760px) {
    min-width: 760px;
  }

  @media (max-width: 760px) {
    width: 100%;

    flex-direction: column;
    align-items: center;
  }

  li {
    width: 18%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    & + li {
      @media (max-width: 760px) {
        margin-top: 8px;
      }
    }

    a {
      text-decoration: none;
      color: white;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const NavOptionContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 32px;
`;
