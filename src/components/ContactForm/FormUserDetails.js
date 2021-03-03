import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 60 }}>
                        <Grid item xs={12}>
                            <TextField 
                                id = "outlined-full-width"
                                label = "First Name"
                                placeholder = "Enter First Name"
                                required
                                autoFocus
                                margin = "normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant = "outlined"
                                style = {{ margin: 12, marginTop: 30 }}
                                size = "medium"
                                onChange = { handleChange('firstName') }
                                defaultValue = { values.firstName }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id = "outlined-full-width"
                                label = "Last Name"
                                placeholder = "Enter Last Name"
                                required
                                margin = "normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant = "outlined"
                                style = {{ margin: 12}}
                                size = "medium"
                                onChange = { handleChange('lastName') }
                                defaultValue = { values.lastName }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id = "outlined-full-width"
                                label = "Email"
                                placeholder = "Enter Email Address"
                                required
                                margin = "normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant = "outlined"
                                style = {{ margin: 12}}
                                size = "medium"
                                onChange = { handleChange('email') }
                                defaultValue = { values.email }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id = "outlined-multiline-static"
                                label = "Message"
                                placeholder = "Enter Message"
                                required
                                margin = "normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant = "outlined"
                                style = {{ margin: 12, width: 350 }}
                                multiline
                                rows = { 10 }
                                rowsMax = { 30 }
                                onChange = { handleChange('message') }
                                defaultValue = { values.message }
                            />
                        </Grid>
                    </Grid>
                    <Button
                        label = "Submit"
                        variant = "contained"
                        color = "primary"
                        size = "large"
                        style = {{ margin: 15, backgroundColor: "#1976d2", color: "#ffffff" }}
                        onClick = { this.continue }>
                        Continue
                    </Button>
                </React.Fragment>               
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
