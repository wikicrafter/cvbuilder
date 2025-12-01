import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>CV Builder</h1>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
`

const HeaderWrapper = styled.div`
  font-family: 'Zen Tokyo Zoo', cursive;
  display: flex;
  align-items: center;
  max-width: 1800px;
  padding: 3rem 8rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.2rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    font-size: 1.5rem;
  }
`

export default Header
