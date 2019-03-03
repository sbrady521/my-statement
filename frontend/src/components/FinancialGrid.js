import React from 'react'
import { IconButton, Paper, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import TitleRow from './TitleRow'
import TotalRow from './TotalRow'
import DataRow from './DataRow'
import AddIcon from '@material-ui/icons/Add'
import { values } from '../../node_modules/mobx/lib/mobx';

const style = theme => ({
  root: {
    flexGrow: 1
  },
  icon: {
    color: '#DDD',
    '&:hover': {
      color: '#64b5f6'
    }
  }
})

let idCounter = 0

const FinancialGrid = observer(class FinancialGrid extends React.Component {
  render () {
    const { classes } = this.props
    const gridData = this.props.gridData

    const rows = []
    for (let [key, value] of gridData.items) {

      const deleteSelf = () => {
        gridData.items.delete(key)
      }

      rows.push(
        <Grid key={key} item xs={12}>
          <DataRow data={value} deleteSelf={deleteSelf} />
        </Grid>)
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TitleRow data={gridData} />
          </Grid>
          {rows}
          <Grid item xs={12}>
            <IconButton onClick={this.addRow.bind(this)} aria-label='add' >
              <AddIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <TotalRow data={gridData} />
          </Grid>
        </Grid>
      </div>
    )
  }

  addRow () {
    this.props.gridData.items.set(idCounter++, { name: 'Asset or Source', amount: 0 })
  }
})

export default withStyles(style)(FinancialGrid)
