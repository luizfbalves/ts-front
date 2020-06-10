import React from 'react'
import styled from 'styled-components'
import DropDown from './dropdown'

//Components
const Wrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
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
  color?: string
  background?: string
  showProfilePic?: boolean
}

//image recomended size: 35px
export default function Component({ color, background, showProfilePic = true }: TComponent) {

  return (
    <Wrapper style={{ background: background }}>
      <div>
        {
          showProfilePic
            ?
            <Image src="https://api.adorable.io/avatars/35/ss%40adorable.io" alt="Avatar" />
            :
            null
        }
      </div>
      <UserName style={{ color: color }}>Luiz Bandeira</UserName>
      <DropDown color={color} />
    </Wrapper >
  )
}