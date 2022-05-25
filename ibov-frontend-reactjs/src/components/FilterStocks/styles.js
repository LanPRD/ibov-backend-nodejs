import styled from "styled-components";

export const FilterStyle = styled.div`
  grid-area: filters;

  margin: auto;

  display: grid;
  grid-template-rows: auto 1fr 36px;
  grid-area: "title" "fields" "button";
  row-gap: 12px;

  form {
    display: flex;

    p {
      font-weight: 700;
    }

    label {
      margin-top: 8px;
    }

    input {
      padding: 4px 8px;
      font-size: 14px;
    }

    div {
      display: flex;
      flex-direction: column;

      & + div {
        margin-left: 16px;
      }
    }
  }

  button {
    width: 320px;
    margin: 0 auto;
  }
`;
