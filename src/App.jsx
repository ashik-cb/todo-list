import { useState } from "react"
import "./App.css"
import { BgGradient } from "./components/BgGradient"
import { Container } from "./components/Container"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Todo } from "./components/Todo"
import { TodoList } from "./components/TodoList"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Learn JSX", completed: true },
    { id: 3, task: "Learn CSS-in-JS", completed: false },
  ])

  const handleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed, // true -> false, false -> true
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <ThemeProvider>
      <BgGradient />
      <Container>
        <Header />
        <Form setTodos={setTodos} />
        <TodoList>
          {todos.map((todo, index) => (
            <Todo
              handleComplete={handleComplete}
              key={`todo-${index}`}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </Container>
    </ThemeProvider>
  )
}

export default App
