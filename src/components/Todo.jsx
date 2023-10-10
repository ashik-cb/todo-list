import styled from "styled-components"
import { Radio } from "./Radio"

export const StyledTodo = styled.div`
  padding: 8px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Task = styled.p``

export const Todo = () => {
  return (
    <StyledTodo>
      <Radio />
      <Task>Complete online JavaScript course</Task>
    </StyledTodo>
  )
}
