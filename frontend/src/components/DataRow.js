import { Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'

const style = theme => ({
  root: {
    flexGrow: 1
  }
})

const DataRow = observer(function dummy () {
  const { classes } = this.props
  const data = this.props.data
  return (
    <div className={classes.root}>
      <Grid container justify='space-between' spacing={0}>
        <Grid item xs={2}>
          <Typography component='body'>
            {data.name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography component='body'>
            {data.amount}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
})

export default withStyles(style)(DataRow)
