import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const muiTheme = createMuiTheme({
    overrides: {
    }
});

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.setState({ validForm: true });
        this.props.nextStep();
    }

    formState = {
        validForm: false
    }

    render() {
        const { values, handleChange } = this.props;
        const { validForm } = this.formState;

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
                                minHeight: "450px",
                                padding: "5px 20px 30px 20px",
                                borderRadius: "6px"
                            }}>
                            <ValidatorForm ref="form" onSubmit={this.continue}>
                                <Grid item xs={12}>
                                    <TextValidator 
                                        id = "name"
                                        label = "Name"
                                        placeholder = "Enter Full Name"
                                        required
                                        autoFocus
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ margin: 12, marginTop: 30, width: 275 }}
                                        size = "small"
                                        onChange = { handleChange('name') }
                                        value = { values.name }
                                        validators = { ['required'] }
                                        errorMessages = { ['Required field'] }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextValidator 
                                        id = "email"
                                        label = "Email"
                                        placeholder = "Enter Email Address"
                                        required
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ margin: 12, width: 275  }}
                                        size = "small"
                                        onChange = { handleChange('email') }
                                        value = { values.email }
                                        validators = { ['required', 'isEmail'] }
                                        errorMessages = { ['Required field', 'Invalid email'] }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextValidator 
                                        id = "subject"
                                        label = "Subject"
                                        placeholder = "Enter Subject"
                                        required
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ margin: 12, width: 275 }}
                                        size = "small"
                                        onChange = { handleChange('subject') }
                                        value = { values.subject }
                                        validators = { ['required'] }
                                        errorMessages = { ['Required field'] }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextValidator
                                        id = "message"
                                        label = "Message"
                                        placeholder = "Enter Message"
                                        required
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ margin: 12, width: 275 }}
                                        multiline
                                        rows = { 8 }
                                        onChange = { handleChange('message') }
                                        value = { values.message }
                                        validators = { ['required'] }
                                        errorMessages = { ['Required field'] }
                                    />
                                </Grid>
                                <ButtonGroup style = {{ display: "flex", justifyContent: "center" }}>
                                    <Button
                                        label = "Submit"
                                        variant = "contained"
                                        color = "primary"
                                        size = "large"
                                        style = {{ width: 130, backgroundColor: "#1976d2", color: "#ffffff" }}
                                        type = "submit"
                                        disabled = { validForm }>
                                        Continue
                                    </Button>
                                </ButtonGroup>
                            </ValidatorForm>
                        </Grid>
                    </Box>
                </React.Fragment>               
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
