import React from 'react'
import { IconButton, Paper, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import TitleRow from './TitleRow'
import TotalRow from './TotalRow'
import DataRow from './DataRow'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'

const style = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative'
  },
  iconAdd: {
    color: '#DDD',
    '&:hover': {
      color: '#64b5f6'
    }
  },
  iconRemove: {
    color: '#DDD',
    '&:hover': {
      color: '#F00'
    }
  },
  iconButton: {
    padding: 0,
  },
  clearIconButton: {
    padding: 0,
    position: 'absolute',
    right: 15,
    top: 15
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
        <IconButton className={classes.clearIconButton} onClick={this.props.deleteSelf} aria-label='clear' >
          <ClearIcon className={classes.iconRemove} />
        </IconButton>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TitleRow data={gridData} />
          </Grid>
          {rows}
          <Grid item xs={12}>
            <IconButton className={classes.iconButton} onClick={this.addRow.bind(this)} aria-label='add' >
              <AddIcon className={classes.iconAdd} />
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
