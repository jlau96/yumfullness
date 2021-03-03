import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 90, justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style = {{ textAlign: "center" }}>Thank you for your submission</h1>
                    </Grid>
                    <Grid container spacing={1} style = {{ marginTop: 10, justifyContent:'center', alignItems: 'center' }}>
                        <p>You will get an email response ASAP</p>
                    </Grid>
                    <Grid container spacing={1} style = {{ marginTop: 10, justifyContent:'center', alignItems: 'center' }}>
                        <Button
                            href = "/"
                            label = "Submit"
                            variant = "contained"
                            color = "primary"
                            size = "large"
                            style = {{ marginTop: 10, backgroundColor: "#1976d2", color: "#ffffff" }}
                        >
                            Return Home
                        </Button>
                    </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
