import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Divider from '@material-ui/core/Divider'
import { content } from '../App'

//interfaces
interface TAsideProps {
  isOpen: boolean;
  handleSide: Function;
}
//Keyframes
const leftToRight = keyframes`
0% {left: -12rem }
100% {left: 0rem }
`
//Components
const Aside = styled.aside<TAsideProps>`
display: inline-flex;
flex-direction: column;
position: fixed;
padding: 7px 7px 7px 7px;
width: 12rem;
overflow-x: hidden;
height: calc(100vh - 75px);
background-color: #353b48;
margin: 5px 0px 0px 5px;
border-radius: 10px;
left: ${props => props.isOpen ? "0rem" : "-12rem"};
animation: ${props => props.handleSide()};
animation-duration: 0.3s;
`
const Item = styled(Link)`
text-decoration: none;
height: 2rem;
margin-bottom: 4px;
letter-spacing: 1px;
padding: 6px 6px;
cursor: pointer;
color: whitesmoke;
border-radius: 8px;
:hover {
background-color: #f5f5f533;
color: whitesmoke;
}
`
const Separator = styled(Divider)`
height: 1px;
margin-top: 4px;
margin-bottom: 8px;
background-color: #f5f5f5b5;
`
//interfaces
interface TProps {
  isOpen: boolean
  setIsOpen: Function
}

var loaded = false

export default function Component({ isOpen, setIsOpen }: TProps) {

  useEffect(() => {
    loaded = true
  }, [isOpen])

  const handleSide = () => { if (loaded) { return isOpen ? leftToRight : null } }

  return (
    <Aside handleSide={handleSide} isOpen={isOpen}>
      <span style={{ color: "whitesmoke", textAlign: "center" }} >Menu</span>
      <Separator variant="middle" />
      {
        content.map(item => (
          <Item key={item.index} onClick={() => setIsOpen(false)} to={item.route} children={item.title} />
        ))
      }
    </Aside>
  )
}
