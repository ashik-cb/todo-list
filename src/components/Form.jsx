import styled from "styled-components"
import { Radio } from "./Radio"

const StyledForm = styled.form`
  background-color: var(--gray);
  border-radius: 5px;
  padding: 8px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
`

const StyledInput = styled.input`
  background: transparent;
  font-size: 20px;
  padding-left: 10px;
  border: none;
  outline: none;
  flex-grow: 1;
`

export const Form = () => {
  return (
    <StyledForm>
      <Radio />
      <StyledInput placeholder='Create a new todo...' />
    </StyledForm>
  )
}
