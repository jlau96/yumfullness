import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
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
        const { values: { firstName, lastName, email, message } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 60 }}>
                        <List>
                            <ListItemText primary = { "First Name" } secondary = { firstName } style = {{ margin: 15, whiteSpace: 'normal' }} />
                            <ListItemText primary = { "Last Name" } secondary = { lastName } style = {{ margin: 15, whiteSpace: 'normal' }} />
                            <ListItemText primary = { "Email" } secondary = { email } style = {{ margin: 15, whiteSpace: 'normal' }} />
                            <ListItemText primary = { "Message" } secondary = { message } style = {{ margin: 15, whiteSpace: 'normal' }} />
                        </List>
                    </Grid>
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
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm
