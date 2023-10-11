import styled from "styled-components"
import { Radio } from "./Radio"

export const StyledTodo = styled.div`
  padding: 8px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Task = styled.p`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`

export const Todo = ({ id, task, completed, handleComplete }) => {
  return (
    <StyledTodo>
      <Radio
        onChange={() => {
          handleComplete(id)
        }}
        checked={completed}
      />
      <Task completed={completed}>{task}</Task>
    </StyledTodo>
  )
}
