
import { Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import store from '../stores/StatementStore'
import React from 'react'

const style = theme => ({
  root: {
    flexGrow: 1
  }
})

const dummy = observer(function dummy () {
  const { classes } = this.props
  return (
    <div className={classes.root}>

    </div>
  )
})

export default withStyles(style)(dummy)
