import styled from "styled-components";

export const WrapperCurrency = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: inline-block;
  width: 80px;
`;

export const ControlForm = styled.input`
  margin: 10px 5px;
  padding: 7px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(204, 207, 211);
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid rgb(52, 152, 219);
  }

  &:read-only {
    background: rgb(250, 252, 254);
  }

  &:focus:read-only {
    border: 1px solid rgb(158, 160, 163);
  }
`;
