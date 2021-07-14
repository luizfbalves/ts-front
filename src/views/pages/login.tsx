import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import auth from '../../auth/auth'
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'

//Styles
const flex = css`
  display: flex;  
  align-items: center;
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100 % { opacity: 0 }
`

//Components
const Wrapper = styled.div`
  ${flex}
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: whitesmoke;
`
const Form = styled.form`
  ${flex}
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: stretch;
  padding: 10px 10px 10px 10px;
  height: 300px;
  width: 300px;
  background-color: whitesmoke;
  animation: ${fadeIn};
  animation-duration: 0.7s;
`
const Title = styled.span`
  font-size: x-large;
  color: #616161;
`
const ButtonStyled = styled(Button)`
  color: #616161;
  background-color: #e7e5e8;

  :hover {
    color: whitesmoke;
    background-color: #5822b9;
  }
  :focus {
    color: whitesmoke;
    background-color: #5822b9;
    outline: none;
  }
`
const CheckBoxStyled = styled(FormControlLabel)`
  user-select: none;
  margin: 0px 0px 0px -11px;
  .MuiTypography-body1 {
    font-size: 13px;
    color: #616161;
  }
`

const BannerStyled = styled.div`
  ${flex}
  float: left;
  width: 67%;
  height: 100%;
  background-color: #5822b9;
  justify-content: center;
  strong {
    color: whitesmoke;
    font-size: 50px;
    text-align: center;
  }
`

const LoginStyled = styled.div`
  ${flex}
  float: right;
  width: 33%;
  height: 100%;
  justify-content: center;  
`

export default function Component() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Wrapper >
      <BannerStyled ><strong>Your info goes here!!!</strong></BannerStyled>
      <LoginStyled>
        <Form >
          <Title>DashBoard</Title>
          <TextField
            onChange={e => setUser(e.target.value)}
            autoFocus={true}
            type="text"
            label="User"
            autoComplete="username"
            variant="outlined"
            required
          />
          <TextField
            onChange={e => setPassword(e.target.value)}
            autoComplete="new-password"
            type="password"
            variant="outlined"
            label="Password"
            required
          />
          <CheckBoxStyled
            control={<Checkbox size="small" color="primary" />}
            label="Lembrar-me"
          />
          <ButtonStyled onClick={() => auth(user, password)}>
            Log-in
        </ButtonStyled>
        </Form>
      </LoginStyled>
    </Wrapper >
  )
}