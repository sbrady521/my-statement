import React from 'react'
import { Divider, Paper, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import StatementHeader from './StatementHeader'
import FinancialGrid from './FinancialGrid'
import StatementSummary from './StatementSummary'

const style = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 800,
    marginTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 50
  }
})

const IncomeStatement = observer(class IncomeStatement extends React.Component {
  render () {
    const { classes } = this.props
    const store = this.props.store

    return (
      <Paper className={classes.root}>
        <Grid container spacing={40}>
          <Grid item xs={12}>
            <StatementHeader type={this.props.type} />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FinancialGrid />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FinancialGrid />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <StatementSummary total={6000} />
          </Grid>
        </Grid>
      </Paper>
    )
  }
})

export default withStyles(style)(IncomeStatement)
