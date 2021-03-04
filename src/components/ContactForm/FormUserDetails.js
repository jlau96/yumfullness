import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
                    <Grid container spacing={1} style = {{ marginTop: 80, justifyContent:'center', alignItems: 'center' }}>
                        <h1>Contact Form</h1>
                    </Grid>
                    <Box display="flex" justifyContent="center" alignItems="center" paddingBottom="100px">
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
                            <Grid item xs={12}>
                                <TextField 
                                    id = "outlined-full-width"
                                    label = "Name"
                                    placeholder = "Enter Full Name"
                                    required
                                    autoFocus
                                    margin = "normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant = "outlined"
                                    style = {{ margin: 12, marginTop: 30 }}
                                    size = "small"
                                    onChange = { handleChange('name') }
                                    defaultValue = { values.name }
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
                                    size = "small"
                                    onChange = { handleChange('email') }
                                    defaultValue = { values.email }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    id = "outlined-full-width"
                                    label = "Subject"
                                    placeholder = "Enter Subject"
                                    required
                                    margin = "normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant = "outlined"
                                    style = {{ margin: 12}}
                                    size = "small"
                                    onChange = { handleChange('subject') }
                                    defaultValue = { values.subject }
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
                                    style = {{ margin: 12, width: 275 }}
                                    multiline
                                    rows = { 8 }
                                    // rowsMax = { 30 }
                                    onChange = { handleChange('message') }
                                    defaultValue = { values.message }
                                />
                            </Grid>
                            <ButtonGroup style = {{ justifyContent: "center" }}>
                                <Button
                                    label = "Submit"
                                    variant = "contained"
                                    color = "primary"
                                    size = "large"
                                    style = {{ width: 130, backgroundColor: "#1976d2", color: "#ffffff" }}
                                    onClick = { this.continue }>
                                    Continue
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Box>
                </React.Fragment>               
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
