import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { dropdown } from '../config'
import { logout } from '../auth/auth'
import { ExitToApp } from '@material-ui/icons'
import {
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  IconButton,
  ClickAwayListener
} from '@material-ui/core'

const Button = styled(IconButton)`
`

const Item = styled(MenuItem)`
  padding-left: 2px;
  font-size: 15px;
`
interface TComponent {
  color?: string
}
export default function Component({ color }: TComponent) {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownRef = React.useRef<HTMLButtonElement>(null)

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (dropDownRef.current && dropDownRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setIsOpen(false)
  }

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  return (
    <Fragment>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        ref={dropDownRef}
        aria-controls={isOpen ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
      >
        <i style={{ color: color }} className={isOpen ? "ri-arrow-drop-up-line" : "ri-arrow-drop-down-line"} />
      </Button>
      <Popper
        anchorEl={dropDownRef.current}
        role={undefined}
        transition
        disablePortal
        open={isOpen}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={true}
                  onKeyDown={e => handleListKeyDown(e)}
                >
                  {
                    dropdown.map(item => (
                      <Item
                        key={item.index}
                        onClick={() => item.callback()}
                      >
                        {<item.icon style={{ marginRight: "5px" }} />}
                        {item.title}
                      </Item>
                    ))
                  }
                  <Item onClick={() => logout()}>
                    <ExitToApp style={{ marginRight: "5px" }} />
                    Logout
                  </Item>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  )
}