import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))

const SettingPopover = ({ onClose, open, anchorEl }) => {
  const classes = useStyles()
  return (
    <Popover
      className="menu-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <Paper className={classes.root}>
        <Typography component="h3" variant="h5">
          Settings
        </Typography>
        <Typography component="p">I have no idea..</Typography>
      </Paper>
    </Popover>
  )
}

export default SettingPopover
