import React, { useState, Fragment } from 'react'
import { NavBar, Aside, Feed } from '../../components'
import styled from 'styled-components'

//components
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
    <HomeContext.Provider value={ctx}>
      <HomeContext.Consumer>
        {
          ({ isOpen, setIsOpen }) => (
            <Fragment>
              <NavBar {...{ isOpen, setIsOpen }} />
              <Wrapper>
                <Aside {...{ isOpen, setIsOpen }} />
                <Feed />
              </Wrapper>
            </Fragment>
          )
        }
      </HomeContext.Consumer>
    </HomeContext.Provider>
  )
}