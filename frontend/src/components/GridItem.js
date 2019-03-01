
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
  const data = this.props.itemData
  return (
    <div className={classes.root}>
      <Grid container justify='space-between' spacing={40}>
        <Grid item xs={6}>
          <Typography component='body'>
            {data.source}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component='body'>
            {data.amount} 
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
})

export default withStyles(style)(dummy)
