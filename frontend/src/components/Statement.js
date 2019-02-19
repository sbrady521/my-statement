import React from 'react';
import StatementTypes from '../types/StatementTypes';
import { Paper, Typography, Grid, withStyles} from '@material-ui/core';
import statementStyles from '../Styles/statementStyles';

class Statement extends React.Component {
    state = {}
    render() {
        const { classes } = this.props;
        const type = this.props.type;
        const title = type === StatementTypes.income ? "Income Statement" : "Balance Sheet";
        const userData = this.props.user;

        return (
            <div className={classes.root}>
                <Grid container spacing={40}>
                    <Grid item xs={3}>
                        <Typography >
                            {userData.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography>
                            {title}
                        </Typography>
                    </Grid>
                </Grid>
                <Paper >
                    <Grid container spacing={40}>
                        <Grid item xs={2}>
                            <Typography>
                                beans
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(statementStyles)(Statement);