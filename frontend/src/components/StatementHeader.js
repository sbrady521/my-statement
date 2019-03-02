import { Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import store from '../stores/StatementStore'
import React from 'react'

const style = theme => ({
  header: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 'auto'
  }
})

const StatementHeader = observer(function StatementHeader () {
  const { classes } = this.props
  const data = this.props.info
  return (
    <Grid container className={classes.header} justify='space-between' spacing={0}>
      <Grid item xs={7}>
        <Typography component='h6' variant='h6'>
          {data.user}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography component='h4' variant='h4'>
          {data.statementTitle}
        </Typography>
      </Grid>
      <Grid container justify='flex-end' spacing={0}>
        <Grid item xs={5}>
          {data.statementDate}
        </Grid>
      </Grid>

    </Grid>
  )
})

export default withStyles(style)(StatementHeader)
