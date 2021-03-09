import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const muiTheme = createMuiTheme({
    overrides: {
    }
});

export class Testimonials extends Component {
    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 100, justifyContent:'center', alignItems: 'center' }}>
                        <h1>Testimonials</h1>
                    </Grid>
                    <Grid container spacing={1} style = {{ marginTop: 20, justifyContent:'center', alignItems: 'center' }}>
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

export default Testimonials