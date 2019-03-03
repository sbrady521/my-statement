// Displays the title of a financial grid
import { Input, TextField, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'

const style = theme => ({
  root: {
    flexGrow: 1
  },
  textField: {
    fontSize: '24px',
  }
})

const TitleRow = observer(class dummy extends React.Component {
  render() {
    const { classes } = this.props
    const data = this.props.data
    return (
      <div className={classes.root}>
        <Grid container justify='flex-start' spacing={0}>
          <Grid item xs={12}>
            <Input
              id='title'
              className={classes.textField}
              value={data.title}
              onChange={this.handleChange('title')}
              margin='normal'
            />
          </Grid>
        </Grid>
      </div>
    )
  }
  handleChange = name => event => {
    this.props.data[name] = event.target.value
  }
})

export default withStyles(style)(TitleRow)
