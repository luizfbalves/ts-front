import React from 'react'
import styled, { keyframes } from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import { Profile } from '../components'

//Keyframes
const rotate = keyframes`
from { transform: rotate(0deg);} 
to   { transform: rotate(180deg)}
`
//Components
const NavBar = styled.nav`
display: flex;
align-items: center;
height: 60px;
background-color: whitesmoke;
margin: 5px 5px 0px 5px;
padding: 5px 5px 5px 0px;
border-radius: 10px;
`
const Button = styled(IconButton)`
:focus{
  outline: none;  
}
:hover{
  animation: ${rotate} 0.3s linear alternate-reverse;
}
`
const Tittle = styled.span`
margin-left: 5px;
font-size: 18px;
cursor: pointer;
user-select:none;
`
const ProfileWrapper = styled.div`
margin-left: auto;
`
//interfaces
interface TProps {
  isOpen: boolean
  setIsOpen: Function
}

export default function Component({ isOpen, setIsOpen }: TProps) {

  return (
    <NavBar>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "ri-menu-fold-line" : "ri-menu-unfold-line"} />
      </Button>
      <Tittle>JS-F r o n t</Tittle>
      <ProfileWrapper>
        <Profile color="black" background="whitesmoke" />
      </ProfileWrapper>
    </NavBar>
  )
}