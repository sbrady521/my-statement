import React from 'react'
import { Button, Divider, Paper, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import StatementHeader from './StatementHeader'
import FinancialGrid from './FinancialGrid'
import StatementSummary from './StatementSummary'
import store from '../stores/StatementStore'

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

    return (
      <Paper className={classes.root}>
        <Grid container spacing={40}>
          <Grid item xs={12}>
            <StatementHeader info={store} />
          </Grid>
          {
            store.financialGrids.map(grid => (
              <Grid key={grid.title} item xs={12}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <FinancialGrid gridData={grid} />
                </Grid>
              </Grid>
            ))
          }
          <Grid item xs={12}>
            <StatementSummary total={this.getGridTotals()} />
          </Grid>
        </Grid>
      </Paper>
    )
  }

  getGridTotals () {
    let sum = 0
    for (let i = 0 ; i < store.financialGrids.length ; i++) {
      sum += store.financialGrids[i].total
    }
    return sum
  }
})

export default withStyles(style)(IncomeStatement)
