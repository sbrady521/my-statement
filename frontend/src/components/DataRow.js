import { TextField, Typography, Grid, withStyles, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { observer } from 'mobx-react'
import React from 'react'
import store from '../stores/StatementStore'

const style = theme => ({
  root: {
    flexGrow: 1
  },
  icon: {
    color: '#DDD',
    '&:hover': {
      color: '#F00'
    }
  },
  textField: {
    borderBottom: 0
  }
})

const DataRow = observer(class DataRow extends React.Component {
  render () {
    const { classes } = this.props
    const data = this.props.data

    return (
      <div className={classes.root}>
        <Grid container alignItems='center' justify='space-between' spacing={0}>
          <Grid item xs={10}>
            <TextField
              id='name'
              className={classes.textField}
              value={data.name}
              onChange={this.handleChange('name')}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id='amount'
              className={classes.textField}
              value={data.amount}
              onChange={this.handleChange('amount')}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={this.props.deleteSelf} aria-label='Delete' >
              <DeleteIcon className={classes.icon} fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }

  handleChange = name => event => {
    this.props.data[name] = event.target.value
  }
})

export default withStyles(style)(DataRow)
