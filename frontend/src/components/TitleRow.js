// Displays the title of a financial grid
import { Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'

const style = theme => ({
  root: {
    flexGrow: 1
  }
})

const TitleRow = observer(function dummy () {
  const { classes } = this.props
  return (
    <div className={classes.root}>
      <Grid container justify='flex-start' spacing={0}>
        <Grid item xs={12}>
          <Typography component='h4' variant='h4'>
            {this.props.title}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
})

export default withStyles(style)(TitleRow)
