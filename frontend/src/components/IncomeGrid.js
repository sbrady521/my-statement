import { Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import store from '../stores/StatementStore'
import React from 'react'
import FlowGrid from './FlowGrid';

const style = theme => ({
  root: {
    flexGrow: 1
  }
})

const IncomeGrid = observer(function IncomeGrid () {
  const { classes } = this.props
  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <FlowGrid title='Inflows' />
        </Grid>
        <Grid item xs={12}>
          <FlowGrid title='Outflows' />
        </Grid>
      </Grid>
    </div>
  )
})

export default withStyles(style)(IncomeGrid)