import styled from "styled-components"

export const Radio = styled.input.attrs({
  type: "checkbox",
})`
  appearance: none;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  border: 2px solid var(--blue-100);
  border-radius: 50%;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;

  &:checked {
    background-image: url("images/icon-check.svg"), var(--check-bg);
  }
`
