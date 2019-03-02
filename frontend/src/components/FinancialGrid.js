import React from 'react'
import { Paper, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import TitleRow from './TitleRow'
import TotalRow from './TotalRow'
import DataRow from './DataRow'

const dummyData = { name: 'Dolby', amount: 1500 }
const dummyArray = [dummyData, dummyData, dummyData, dummyData]

const style = theme => ({
  root: {
    flexGrow: 1
  }
})

const IncomeStatement = observer(class IncomeStatement extends React.Component {
  render () {
    const { classes } = this.props
    const store = this.props.store

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TitleRow title='Test Title' />
          </Grid>
          {
            dummyArray.map(data => (
              <Grid item xs={12}>
                <DataRow data={data} />
              </Grid>
            ))
          }
          <Grid item xs={12}>
            <TotalRow amount={1000} />
          </Grid>
        </Grid>
      </div>
    )
  }
})

export default withStyles(style)(IncomeStatement)
