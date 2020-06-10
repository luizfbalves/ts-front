import React, { useState } from 'react'
import styled, { css } from 'styled-components'
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
justify-content: center;
align-items: center;
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
position: absolute;
padding: 10px 20px 10px 20px;
height: 300px;
width: 300px;
background-color: whitesmoke;
`
const Title = styled.span`
font-size: x-large;
color: #616161;
`
const ButtonSC = styled(Button)`
color: #616161;
background-color: #e7e5e8;

:hover {
  color: whitesmoke;
  background-color: #6628ea;
}
:focus {
  color: whitesmoke;
  background-color: #6628ea;
  outline: none;
}
`
const FormControlLabelSC = styled(FormControlLabel)`
user-select: none;
margin: 0px 0px 0px -11px;
.MuiTypography-body1 {
  font-size: 13px;
  color: #616161;
}
`

export default function Component() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Wrapper >
      <Form >
        <Title>Log-in</Title>
        <TextField
          onChange={e => setUser(e.target.value)}
          autoFocus={true}
          size="small"
          type="text"
          label="Usuário"
          autoComplete="username"
          variant="outlined"
          required
        />
        <TextField
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          size="small"
          type="password"
          variant="outlined"
          label="Senha"
          required
        />
        <FormControlLabelSC
          control={<Checkbox size="small" color="primary" />}
          label="Lembrar-me"
        />
        <ButtonSC onClick={() => auth(user, password)}>
          Continuar
        </ButtonSC>
      </Form>
    </Wrapper >
  )
}