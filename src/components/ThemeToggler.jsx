import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext"

const StyledButton = styled.button`
  color: var(--gray);
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <StyledButton onClick={toggleTheme}>
      <img
        src={
          theme === "light" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"
        }
        alt='Current Theme'
        width={15}
        height={15}
      />
    </StyledButton>
  )
}
