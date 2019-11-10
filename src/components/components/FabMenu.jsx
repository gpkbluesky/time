import React, { useState } from 'react'

import BlurOnIcon from '@material-ui/icons/BlurOn'
import { Fab } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import SettingPopover from './SettingPopover'
import SettingsIcon from '@material-ui/icons/Settings'
import { Zoom } from '@material-ui/core'
import { social_url } from 'constants/social'

const FabMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showPopover, setShowPopover] = useState({
    setting: false,
    social: false
  })
  const [anchorEl, setAnchorEl] = useState(null)

  const toggleShowMenu = () => setShowMenu(prev => !prev)

  const onOpen = (event, name) => {
    setShowPopover(prev => ({ ...prev, [name]: true }))
    setAnchorEl(event.currentTarget)
  }
  const onClose = name => {
    setShowPopover(prev => ({ ...prev, [name]: false }))
    setAnchorEl(null)
  }

  const moveTo = link => {
    window.open(link, '_blank')
  }

  return (
    <div className="fab-menu">
      <Fab color="primary" aria-label="menu" onClick={toggleShowMenu}>
        <BlurOnIcon />
      </Fab>
      <div className="fab-menu-group">
        <div className="fab-menu-item">
          <Zoom
            in={showMenu}
            style={{ transitionDelay: showMenu ? '100ms' : '0ms' }}
          >
            <Fab
              color="secondary"
              aria-label="setting"
              onClick={e => onOpen(e, 'setting')}
            >
              <SettingsIcon />
            </Fab>
          </Zoom>
          <SettingPopover
            open={showPopover.setting}
            onClose={() => onClose('setting')}
            anchorEl={anchorEl}
          />
        </div>
        <div className="fab-menu-item">
          <Zoom
            in={showMenu}
            style={{ transitionDelay: showMenu ? '200ms' : '100ms' }}
          >
            <Fab
              aria-label="social"
              onClick={() => moveTo(social_url.facebook)}
            >
              <FacebookIcon />
            </Fab>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default FabMenu
