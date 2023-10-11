import { useState } from "react"
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

export const Form = ({ setTodos }) => {
  const [task, setTask] = useState("")
  const [error, setError] = useState(false)
  const [completed, setCompleted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task === "") {
      setError("Please enter a task")
      return
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, task, completed },
    ])
    setTask("")
    setCompleted(false)
    setError("")
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Radio
          onChange={() => {
            setCompleted(!completed)
          }}
          checked={completed}
        />
        <StyledInput
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
          placeholder='Create a new todo...'
        />
      </StyledForm>
      {error && <p>{error}</p>}
    </>
  )
}
