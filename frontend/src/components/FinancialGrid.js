import React from 'react'
import { Paper, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import TitleRow from './TitleRow'
import TotalRow from './TotalRow'
import DataRow from './DataRow'

const style = theme => ({
  root: {
    flexGrow: 1
  }
})

let id = 0

const FinancialGrid = observer(class FinancialGrid extends React.Component {
  render () {
    const { classes } = this.props
    const gridData = this.props.gridData

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TitleRow title={gridData.title} />
          </Grid>
          {
            gridData.items.map(data => (
              <Grid key={id++} item xs={12}>
                <DataRow data={data} />
              </Grid>
            ))
          }
          <Grid item xs={12}>
            <TotalRow amount={gridData.total} />
          </Grid>
        </Grid>
      </div>
    )
  }
})

export default withStyles(style)(FinancialGrid)
