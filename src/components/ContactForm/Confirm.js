import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

const muiTheme = createMuiTheme({
    overrides: {
    }
});

const emailJsKeys = {
    USER_ID: 'user_LysXNUTBkPlLzkuwiEVB3',
    TEMPLATE_ID: 'yumfullness_contact_form'
}

export class Confirm extends Component {
    
    submit = e => {
        e.preventDefault();

        emailjs.send('gmail', emailJsKeys.TEMPLATE_ID, this.props.values, emailJsKeys.USER_ID)
            .then(function(response) {
                console.log("Contact form email successfully sent!", response.status, response.text);
            }, function(error) {
                console.log("Contact form email failed to send...", error);
            });

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { name, email, subject, message } } = this.props;

        return (
            <MuiThemeProvider theme={muiTheme}>
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
                            }} >
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
                                    size = "large"
                                    style = {{ margin: 15 }}
                                    onClick = { this.back }>
                                    Back
                                </Button>
                                <Button
                                    label = "Submit"
                                    variant = "contained"
                                    color = "primary"
                                    size = "large"
                                    style = {{ margin: 15, backgroundColor: "#1976d2", color: "#ffffff"  }}
                                    onClick = { this.submit }>
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
