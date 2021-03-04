import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        /* LOGIC TO PROCESS FORM - SEND DATA TO API */
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { name, email, subject, message } } = this.props;

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
                            }}
                        >
                            <List>
                                <ListItemText primary = { "Name" } secondary = { name } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Email" } secondary = { email } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Subject" } secondary = { subject } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Message" } secondary = { message } style = {{ margin: 15, whiteSpace: 'normal' }} />
                            </List>
                            <ButtonGroup style = {{ justifyContent: "center" }}>
                                <Button
                                    label = "Submit"
                                    variant = "contained"
                                    color = "secondary"
                                    size = "large"
                                    style = {{ margin: 15, backgroundColor: "#f8f8ff", color: "#000000" }}
                                    onClick = { this.back }>
                                    Back
                                </Button>
                                <Button
                                    label = "Submit"
                                    variant = "contained"
                                    color = "primary"
                                    size = "large"
                                    style = {{ margin: 15, backgroundColor: "#1976d2", color: "#ffffff"  }}
                                    onClick = { this.continue }>
                                    Submit
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Box>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm
