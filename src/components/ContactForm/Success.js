import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 100, justifyContent:'center', alignItems: 'center' }}>
                        <h1>Contact Form</h1>
                    </Grid>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Grid container spacing={1} 
                            style = {{ 
                                marginTop: 20, 
                                boxShadow: "0px 8px 16px #222", 
                                backgroundColor: "#fefefe",
                                display: "flex",
                                flexDirection: "column",
                                width: "340px",
                                minWidth: "120px",
                                minHeight: "300px",
                                padding: "5px 20px 30px 20px",
                                borderRadius: "6px"
                            }}>
                            <h3 style = {{ textAlign: "center", padding: "50px 0px 10px 0px" }}>Thank you for getting in touch!</h3>
                            <p style = {{ textAlign: "center", padding: "15px 0px 5px 0px" }}>I will get back to you ASAP.</p>
                            <p style = {{ textAlign: "center"}}>Have a great day!</p>
                            <ButtonGroup style = {{ justifyContent: "center" }}>
                                <Button
                                    href = "/"
                                    label = "Submit"
                                    variant = "contained"
                                    color = "primary"
                                    size = "large"
                                    style = {{ marginTop: 25, backgroundColor: "#1976d2", color: "#ffffff" }}
                                >
                                    Return Home
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Box>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
