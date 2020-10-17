/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import { Profile } from '../components'
import { history } from '../helpers/history'

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
background-color: #5822b9;
margin: 5px 5px 0px 5px;
padding: 5px 5px 5px 0px;
border-radius: 10px;
`
const Button = styled(IconButton)`
color: whitesmoke;
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
color: whitesmoke;
cursor: pointer;
user-select:none;
`
const ProfileWrapper = styled.div`
margin-left: auto;
margin-right: 13px;
`
//interfaces
interface iProps {
  isOpen: boolean
  setIsOpen: Function
}

export default function Component({ isOpen, setIsOpen }: iProps) {

  const handleTittle = () => {
    setIsOpen(false)
    history.push('/app/home')
  }
  return (
    <Fragment>
      <NavBar>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "ri-menu-fold-line" : "ri-menu-unfold-line"} />
        </Button>
        <Tittle onClick={() => handleTittle()}>TS-F r o n t</Tittle>
        <ProfileWrapper>
          <Profile color="whitesmoke" />
        </ProfileWrapper>
      </NavBar>
    </Fragment>
  )
}