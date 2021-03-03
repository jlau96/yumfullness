import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 90, justifyContent:'center' }}>
                        <h1 style = {{ textAlign: "center" }}>Thank you for your submission</h1>
                    </Grid>
                    <Grid container spacing={1} style = {{ marginTop: 10, justifyContent:'center' }}>
                        <p>You will get an email response ASAP</p>
                    </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
