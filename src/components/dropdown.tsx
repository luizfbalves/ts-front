import React, { Fragment, useState, useRef } from 'react'
import styled from 'styled-components'
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
interface TComponent {
  color?: string
}
export default function Component({ color }: TComponent) {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownRef = useRef(null)

  const handleListKeyDown = (e: any) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  const handleClose = (e: any) => {
    return
    // if (dropDownRef.current && dropDownRef.current.contains(e.target)) {
    //   return
    // }
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
                  {/* {
                    props.items.map(items => (
                      <MenuItem onClick={items.event} children={items.name} />
                    ))
                  } */}
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  )
}