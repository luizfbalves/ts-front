import React from 'react'
import styled from 'styled-components'
import DropDown from './dropdown'

//Components
const Wrapper = styled.div`
  display: inline-flex;
  padding: 5px;
`
const Image = styled.img`
border-radius: 50px;
`
const UserName = styled.span`
align-self: center;
color: whitesmoke;
padding-left: 7px;
`
interface TComponent {
  color?: string;
  background?: string;
}

//image recomended size: 35px
export default function Component({ color, background }: TComponent) {

  return (
    <Wrapper style={{ background: background }}>
      <div>
        <Image src="https://api.adorable.io/avatars/35/ss%40adorable.io" alt="Avatar" />
      </div>
      <UserName style={{ color: color }}>Luiz Bandeira</UserName>
      <DropDown />
    </Wrapper >
  )
}