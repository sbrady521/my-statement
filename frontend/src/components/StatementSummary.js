
import { Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import store from '../stores/StatementStore'
import React from 'react'

const style = theme => ({
  header: {
    flexGrow: 1,
    backgroundColor: '#AAA',
    width: 'auto'
  }
})

const StatementSummary = observer(function StatementSummary () {
  const { classes } = this.props
  return (
    <div className={classes.header}>
      <Grid container justify='space-between' spacing={0}>
        <Grid item xs={3}>
          <Typography component='h6' variant='h6'>
            Summary
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography component='h7' variant='h7'>
            {this.props.total}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
})

export default withStyles(style)(StatementSummary)
