// Displays the sum of a financial grid
import { TextField, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'

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
    console.log('rendering')
    const { classes } = this.props
    console.log('rendering')
    return (
      <Grid className={classes.root} container alignItems='center' justify='flex-end' spacing={0}>
        <Grid item xs={2}>
          <Typography component='h7' variant='h7'>
            {this.props.data.total}
          </Typography>
        </Grid>
      </Grid>
    )
  }
})

export default withStyles(style)(TotalRow)
