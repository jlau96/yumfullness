import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function Homepage() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <Grid container spacing={1} style = {{ marginTop: 100, justifyContent:'center', alignItems: 'center' }}>
                    <h1>Homepage</h1>
                </Grid>
            </React.Fragment>
        </MuiThemeProvider>
    );
}