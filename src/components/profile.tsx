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

  const profilePic = "https://avatars2.githubusercontent.com/u/31023594?s=400&u=d416393324f50802fd5078c2ae5fe7b21efab889&v=4"

  return (
    <Wrapper style={{ background: background }}>
      <div>
        {
          showProfilePic
            ?
            <Image
              style={{
                width: "45px"
              }}
              src={profilePic} alt="Avatar" />
            :
            null
        }
      </div>
      <UserName style={{ color: color }}>Luiz Bandeira</UserName>
      <DropDown color={color} />
    </Wrapper >
  )
}