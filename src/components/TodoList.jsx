import styled from "styled-components"

export const TodoList = styled.div`
  background-color: var(--gray);
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--blue-200);
  }
`
