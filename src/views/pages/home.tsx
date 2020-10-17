import React, { useState, Fragment } from 'react'
import { NavBar, Aside, Content } from '../../components'
import styled, { keyframes } from 'styled-components'

//components
const fadeIn = keyframes`
  0% { opacity: 0 }
  100 % { opacity: 1 }
`
const Form = styled.div`
animation: ${fadeIn};
animation-duration: 0.7s;
`
const Wrapper = styled.div`
display: flex;
background-color: white;
height: calc(100vh - 75px);
`

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const HomeContext = React.createContext({
    isOpen,
    setIsOpen,
  })

  const ctx = { isOpen, setIsOpen }

  return (
    <Form>
      <HomeContext.Provider value={ctx}>
        <HomeContext.Consumer>
          {
            ({ isOpen, setIsOpen }) => (
              <Fragment>
                <NavBar {...{ isOpen, setIsOpen }} />
                <Wrapper>
                  <Aside {...{ isOpen, setIsOpen }} />
                  <Content />
                </Wrapper>
              </Fragment>
            )
          }
        </HomeContext.Consumer>
      </HomeContext.Provider>
    </Form>
  )
}