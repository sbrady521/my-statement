import { withStyles, Grid } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'
import store from '../stores/StatementStore'
import GridItem from './GridItem'

const style = theme => ({
  root: {
    flexGrow: 1
  }
})

const FlowGrid = observer(function FlowGrid () {
  const { classes } = this.props
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {store.inflows.map(flow => (
          <Grid item xs={12}>
            <GridItem itemData={flow} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
})

export default withStyles(style)(FlowGrid)
