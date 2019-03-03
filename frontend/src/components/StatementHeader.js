import { InputBase, Typography, Grid, withStyles } from '@material-ui/core'
import { observer } from 'mobx-react'
import React from 'react'

const style = theme => ({
  header: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 'auto'
  },
  textFieldName: {
    fontSize: '22px'
  },
  textFieldTitle: {
    fontSize: '28px'
  },
  textFieldDate: {
    fontSize: '16px'
  }
})

const StatementHeader = observer(function StatementHeader () {
  const { classes } = this.props
  const data = this.props.data

  const handleChange = name => event => {
    this.props.data[name] = event.target.value
  }

  return (
    <Grid container className={classes.header} justify='space-between' spacing={0}>
      <Grid item xs={7}>
        <InputBase
          id='user'
          className={classes.textFieldName}
          value={data.user}
          onChange={handleChange('user')}
          type='text'
        />
      </Grid>
      <Grid item xs={5}>
        <InputBase
          id='statementTitle'
          className={classes.textFieldTitle}
          value={data.statementTitle}
          onChange={handleChange('statementTitle')}
          type='text'
        />

      </Grid>
      <Grid container justify='flex-end' spacing={0}>
        <Grid item xs={5}>
          <InputBase
            id='statementDate'
            className={classes.textFieldDate}
            value={data.statementDate}
            onChange={handleChange('statementDate')}
            type='text'
          />
        </Grid>
      </Grid>

    </Grid>
  )
})

export default withStyles(style)(StatementHeader)
