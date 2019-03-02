import React from 'react'
import { Button, Divider, Paper, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import StatementHeader from './StatementHeader'
import FinancialGrid from './FinancialGrid'
import StatementSummary from './StatementSummary'
import store from '../stores/StatementStore'
import AddIcon from '@material-ui/icons/Add'

const style = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 800,
    marginTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 50
  },
  divider: {
    marginTop: 30,
    marginBottom: 30
  },
  icon: {
    color: '#DDD',
    '&:hover': {
      color: '#64b5f6'
    }
  }
})

const IncomeStatement = observer(class IncomeStatement extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <Grid container justify='center' spacing={0}>
          <Grid item xs={12}>
            <StatementHeader info={store} />
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          {
            store.financialGrids.map(grid => (
              <Grid key={grid.title} item xs={12}>
                <Grid item xs={12}>
                  <FinancialGrid gridData={grid} />
                </Grid>
                <Grid item xs={12}>
                  <Divider className={classes.divider} />
                </Grid>
              </Grid>
            ))
          }

          <Grid item xs={1}>
            <AddIcon className={classes.icon} />
          </Grid>

          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12}>
            <StatementSummary total={this.getGridTotals()} />
          </Grid>

        </Grid>
      </Paper>
    )
  }

  getGridTotals () {
    let sum = 0
    for (let i = 0; i < store.financialGrids.length; i++) {
      sum += store.financialGrids[i].total
    }
    return sum
  }
})

export default withStyles(style)(IncomeStatement)
