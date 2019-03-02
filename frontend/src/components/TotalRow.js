// Displays the sum of a financial grid
import { Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'

const style = theme => ({
  root: {
    flexGrow: 1,
    height: 30,
    backgroundColor: '#DDD',
    width: 'auto'
  }
})

const TotalRow = observer(function dummy () {
  const { classes } = this.props
  return (
    <Grid className={classes.root} container alignItems='center' justify='flex-end' spacing={0}>
      <Grid item xs={2}>
        <Typography component='body'>
          {this.props.amount}
        </Typography>
      </Grid>
    </Grid>
  )
})

export default withStyles(style)(TotalRow)
