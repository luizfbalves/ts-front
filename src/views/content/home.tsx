import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 
  width: 100%; 
`

export default function Component() {

  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}