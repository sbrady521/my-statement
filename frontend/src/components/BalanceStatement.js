import React from 'react'
import { Paper, Typography, Grid, withStyles } from '@material-ui/core'
import statementStyles from '../styles/statementStyles'
import { observer } from 'mobx-react'
import StatementHeader from './StatementHeader'
import FlowGrid from './FlowGrid'

const IncomeStatement = observer(class IncomeStatement extends React.Component {
  render () {
    const { classes } = this.props
    const store = this.props.store

    return (
      <div className={classes.root}>
        <Paper >
          <Grid container spacing={40}>
            <Grid item xs={12}>
              <StatementHeader type={this.props.type} />
            </Grid>
            <Grid item xs={12}>
              <FlowGrid type={this.props.type} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
})

export default withStyles(statementStyles)(IncomeStatement)
