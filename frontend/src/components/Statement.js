import React from 'react'
import { IconButton, Button, Divider, Paper, Typography, Grid, withStyles } from '@material-ui/core'
import FinancialGridStore from '../stores/FinancialGridStore'
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

let keyCounter = 0

const IncomeStatement = observer(class IncomeStatement extends React.Component {
  render () {
    const { classes } = this.props

    let grids = []
    for (let [key, val] of store.financialGrids) {

      const deleteSelf = () => {
        store.financialGrids.delete(key)
      }

      grids.push(
        <Grid key={key} item xs={12}>
          <Grid item xs={12}>
            <FinancialGrid deleteSelf={deleteSelf} gridData={val} />
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
      )
    }

    return (
      <Paper className={classes.root}>
        <Grid container justify='center' spacing={0}>
          <Grid item xs={12}>
            <StatementHeader info={store} />
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>

          {grids}

          <IconButton onClick={this.addGrid.bind(this)} aria-label='add' >
            <AddIcon className={classes.icon} />
          </IconButton>

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

  addGrid() {
    const defaultItem = {
      name: 'Asset or Source',
      amount: 0
    }

    const defaultGrid = new FinancialGridStore()
    defaultGrid.title = 'Sub-grid Title'
    defaultGrid.items.set(-1, defaultItem)
    this.financialGrids = new Map()
    this.financialGrids.set(-1, defaultGrid)

    store.financialGrids.set(keyCounter++, defaultGrid)
  }

  getGridTotals() {
    let sum = 0
    for (let i = 0; i < store.financialGrids.length; i++) {
      sum += store.financialGrids[i].total
    }
    return sum
  }
})

export default withStyles(style)(IncomeStatement)
