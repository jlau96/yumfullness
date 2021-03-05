import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class Menu extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 100, justifyContent:'center', alignItems: 'center' }}>
                        <h1>Menu</h1>
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

export default Menu