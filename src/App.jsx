import "./App.css"
import { BgGradient } from "./components/BgGradient"
import { Container } from "./components/Container"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Todo } from "./components/Todo"
import { TodoList } from "./components/TodoList"

function App() {
  return (
    <>
      <BgGradient />
      <Container>
        <Header />
        <Form />
        <TodoList>
          <Todo />
        </TodoList>
      </Container>
    </>
  )
}

export default App
