// Displays the sum of a financial grid
import { TextField, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'
import store from '../stores/StatementStore'

const style = theme => ({
  root: {
    flexGrow: 1,
    height: 30,
    backgroundColor: '#DDD',
    width: 'auto'
  },
  textField: {
    border: 'none'
  }
})

const TotalRow = observer(class TotalRow extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <Grid className={classes.root} container alignItems='center' justify='flex-end' spacing={0}>
        <Grid item xs={2}>
          <Typography variant='body1'>
            {this.props.data.total}
          </Typography>
        </Grid>
      </Grid>
    )
  }
})

export default withStyles(style)(TotalRow)
