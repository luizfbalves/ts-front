import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Divider from '@material-ui/core/Divider'
import { content } from '../config'
import { ClickAwayListener } from '@material-ui/core'

//interfaces
interface TAsideProps {
  isOpen: boolean;
  handleAnimation: Function;
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
  animation: ${props => props.handleAnimation()};
  animation-duration: 0.3s;
`
const Item = styled(Link)`
  display: flex;
  align-items: flex-end;
  width: 100%;
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
interface iProps {
  isOpen: boolean
  setIsOpen: Function
}

var canAnimate = false

export default function Component({ isOpen, setIsOpen }: iProps) {

  const handleAnimation = () => (canAnimate && isOpen) ? leftToRight : null
  const handleClickAway = () => isOpen ? setIsOpen(false) : setIsOpen(isOpen)

  useEffect(() => { canAnimate = true }, [])
  return (
    <ClickAwayListener onClickAway={() => handleClickAway()}>
      <Aside handleAnimation={handleAnimation} isOpen={isOpen}>
        <span style={{ color: "whitesmoke", textAlign: "center", WebkitUserSelect: "none" }}>Menu</span>
        <Separator variant="middle" />
        {
          content.map(item => (
            <Item
              key={item.index}
              to={item.route}
              onClick={() => setIsOpen(false)}
            >
              {<item.icon style={{ marginRight: "10px" }} />}
              {item.title}
            </Item>
          ))
        }
      </Aside>
    </ClickAwayListener>
  )
}
