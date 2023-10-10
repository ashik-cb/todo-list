import styled from "styled-components"
import { ThemeToggler } from "./ThemeToggler"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--gray);
`

export const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>TODO</StyledH1>
      <ThemeToggler />
    </StyledHeader>
  )
}
