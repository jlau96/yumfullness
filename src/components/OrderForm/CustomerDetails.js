import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import './CustomerDetails.css'

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

const muiTheme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' }
    },
    overrides: {
        MuiInputBase: {
            root: {
                height: '50px',
                width: '275px'
            },
            input: {
                // fontSize: '15px',
            }
        }
    }
});

export class CustomerDetails extends Component {
    formState = {
        validForm: false
    }

    continue = e => {
        e.preventDefault();
        this.setState({ validForm: true });
        this.props.nextStep();
    }

    disableDate(date) {
        return date.isSame(moment('2021-04-09')) ||
               date.isSame(moment('2021-04-10')) ||
               date.isSame(moment('2021-04-11'))
    }

    render() {
        const { steps, /*nextStep,*/ prevStep, values, handleChange, handleDateChange } = this.props;
        const { validForm } = this.formState;

        return (
            <MuiThemeProvider theme={muiTheme}>
                <React.Fragment>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Grid container spacing={1}
                            style = {{ 
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
                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 20, marginBottom: -25 }}>First Name</InputLabel>
                                    <TextValidator
                                        id = "firstName"
                                        placeholder = "Enter First Name"
                                        required
                                        autoFocus
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ marginLeft: 12, marginTop: 30, width: 275 }}
                                        size = "small"
                                        onChange = { handleChange('firstName') }
                                        value = { values.firstName }
                                        validators = { ['required'] }
                                        errorMessages = { ['Required field'] }
                                    />
                                </Grid>
                                <Grid item xs={12} style = {{ marginTop: -5 }}>
                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 15, marginBottom: -10 }}>Last Name</InputLabel>
                                    <TextValidator 
                                        id = "lastName"
                                        placeholder = "Enter Last Name"
                                        required
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ marginLeft: 12, width: 275 }}
                                        size = "small"
                                        onChange = { handleChange('lastName') }
                                        value = { values.lastName }
                                        validators = { ['required'] }
                                        errorMessages = { ['Required field'] }
                                    />
                                </Grid>
                                <Grid item xs={12} style = {{ marginTop: -5 }}>
                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 15, marginBottom: -10 }}>Email</InputLabel>
                                    <TextValidator
                                        id = "email"
                                        placeholder = "Enter Email Address"
                                        required
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ marginLeft: 12, width: 275  }}
                                        size = "small"
                                        onChange = { handleChange('email') }
                                        value = { values.email }
                                        validators = { ['required', 'isEmail'] }
                                        errorMessages = { ['Required field', 'Invalid email'] }
                                    />
                                </Grid>
                                <Grid item xs={12} style = {{ marginTop: -5 }}>
                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 15, marginBottom: -10 }}>Phone (XXX-XXX-XXXX)</InputLabel>
                                    <TextValidator 
                                        id = "phone"
                                        placeholder = "Enter Phone Number"
                                        required
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ marginBottom: 20, marginLeft: 12, width: 275  }}
                                        size = "small"
                                        onChange = { handleChange('phone') }
                                        value = { values.phone }
                                        validators = { ['required'] }
                                        errorMessages = { ['Required field'] }
                                    />
                                </Grid>
                                <hr/><br/>
                                
                                <Grid item xs={12} style = {{ marginLeft: 12 }}>
                                    <InputLabel className="inputLabel" style = {{ marginLeft: 5, marginBottom: 5}}>Pick-Up or Delivery</InputLabel>
                                    <FormControl variant="outlined" style = {{ width: 275, marginBottom: 5 }}>
                                        <InputLabel>{ values.transferMethod === '' ? 'Select Pick-Up/Delivery' : null}</InputLabel>
                                        <SelectValidator id="transferMethod" value={values.transferMethod}
                                                onChange={handleChange('transferMethod')} required validators = { ['required'] } errorMessages = { ['Required field'] }
                                                MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}
                                                variant="outlined">
                                            <MenuItem disabled>Select Pick-Up/Delivery</MenuItem>
                                            <MenuItem value="Pick-Up">Pick-Up</MenuItem>
                                            <MenuItem value="Delivery">Delivery</MenuItem>
                                        </SelectValidator>
                                    </FormControl>
                                </Grid>
                                
                                <div className="transferMethodOptions" style = {{ marginBottom: 10 }}>
                                    {   
                                        values.transferMethod !== ""
                                        ? (values.transferMethod !== 'Delivery'
                                            ? (<div className="pickUpOptions" style = {{ marginTop: -5 }}>
                                                    <Grid item xs={12} style = {{ marginLeft: 12 }}>
                                                        <InputLabel className="inputLabel" style = {{ marginLeft: 5, marginTop: 20, marginBottom: -10 }}>Pick-Up Date</InputLabel>
                                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                                            <KeyboardDatePicker
                                                                id="pickUpDate"
                                                                placeholder="Pick Pick-Up Date"
                                                                format="MM/DD/yyyy"
                                                                margin="normal"
                                                                inputVariant="outlined"
                                                                required
                                                                value={ values.pickUpDate }
                                                                onChange={ handleDateChange('pickUpDate') }
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change date',
                                                                }}
                                                                disablePast
                                                                shouldDisableDate={ this.disableDate }
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </Grid>
                                                    <Grid item xs={12} style = {{ marginTop: 15 }}>
                                                        <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 10, marginBottom: 5 }}>Pick-Up Time Frame</InputLabel>
                                                        <FormControl variant="outlined" style = {{ marginLeft: 12, width: 275, marginBottom: 10 }}>
                                                            <InputLabel>{ values.pickUpTime === '' ? 'Select Pick-Up Time Frame' : null}</InputLabel>
                                                            <SelectValidator id="pickUpTime" value={values.pickUpTime} 
                                                                    onChange={handleChange('pickUpTime')} required validators = { ['required'] } errorMessages = { ['Required field'] }
                                                                    MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}
                                                                    variant="outlined">
                                                                <MenuItem disabled>Select Pick-Up Time Frame</MenuItem>
                                                                <MenuItem value="10:00am-11:00am">10:00am-11:00am</MenuItem>
                                                                <MenuItem value="11:00am-12:00pm">11:00am-12:00pm</MenuItem>
                                                                <MenuItem value="12:00pm-1:00pm">12:00pm-1:00pm</MenuItem>
                                                                <MenuItem value="1:00pm-2:00pm">1:00pm-2:00pm</MenuItem>
                                                                <MenuItem value="2:00pm-3:00pm">2:00pm-3:00pm</MenuItem>
                                                                <MenuItem value="3:00pm-4:00pm">3:00pm-4:00pm</MenuItem>
                                                                <MenuItem value="4:00pm-5:00pm">4:00pm-5:00pm</MenuItem>
                                                                <MenuItem value="5:00pm-6:00pm">5:00pm-6:00pm</MenuItem>
                                                                <MenuItem value="6:00pm-7:00pm">6:00pm-7:00pm</MenuItem>
                                                                <MenuItem value="7:00pm-8:00pm">7:00pm-8:00pm</MenuItem>
                                                                <MenuItem value="Other">Other</MenuItem>
                                                            </SelectValidator>
                                                        </FormControl>
                                                        <div>
                                                            {
                                                                values.pickUpTime === 'Other'
                                                                ? ( <div>
                                                                        <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 15, marginBottom: -10 }}>Other Pick-Up Time</InputLabel>
                                                                        <TextValidator
                                                                            id = "pickUpTimeOther"
                                                                            placeholder = "Enter Pick-Up Time Frame"
                                                                            required
                                                                            margin = "normal"
                                                                            InputLabelProps={{
                                                                                shrink: true,
                                                                            }}
                                                                            variant = "outlined"
                                                                            style = {{ marginBottom: 20, marginLeft: 12, width: 275  }}
                                                                            size = "small"
                                                                            onChange = { handleChange('pickUpTimeOther') }
                                                                            validators = { ['required'] } 
                                                                            errorMessages = { ['Required field'] }
                                                                            />
                                                                    </div>)
                                                                : null
                                                            }
                                                        </div>
                                                    </Grid>
                                            </div>)
                                            : (<div className="deliveryOptions" style = {{ marginTop: 10 }}>
                                                <Grid item xs={12} style = {{ marginLeft: 12 }}>
                                                    <InputLabel className="inputLabel" style = {{ marginLeft: 5, marginTop: 15, marginBottom: -10 }}>Delivery Date</InputLabel>
                                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                                        <KeyboardDatePicker
                                                            id="deliverypDate"
                                                            placeholder="Pick Delivery Date"
                                                            required
                                                            format="MM/DD/yyyy"
                                                            margin="normal"
                                                            inputVariant="outlined"
                                                            value={ values.deliveryDate }
                                                            onChange={ handleDateChange('deliveryDate') }
                                                            KeyboardButtonProps={{
                                                                'aria-label': 'change date',
                                                            }}
                                                            disablePast
                                                            shouldDisableDate={ this.disableDate }
                                                        />
                                                    </MuiPickersUtilsProvider>
                                                </Grid>
                                                <Grid item xs={12} style = {{ marginTop: 5, marginBottom: -10 }}>
                                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 15, marginBottom: 5 }}>Delivery Time Frame</InputLabel>
                                                    <FormControl variant="outlined" style = {{ marginLeft: 12, width: 275 }}>
                                                        <InputLabel>{ values.deliveryTime === '' ? 'Select Delivery Time Frame' : null }</InputLabel>
                                                        <SelectValidator id="deliveryTime" value={values.deliveryTime} 
                                                                onChange={handleChange('deliveryTime')} required validators = { ['required'] } errorMessages = { ['Required field'] }
                                                                MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}
                                                                variant="outlined">
                                                            <MenuItem disabled>Select Delivery Time Frame</MenuItem>
                                                            <MenuItem value="10:00am-11:00am">10:00am-11:00am</MenuItem>
                                                            <MenuItem value="11:00am-12:00pm">11:00am-12:00pm</MenuItem>
                                                            <MenuItem value="12:00pm-1:00pm">12:00pm-1:00pm</MenuItem>
                                                            <MenuItem value="1:00pm-2:00pm">1:00pm-2:00pm</MenuItem>
                                                            <MenuItem value="2:00pm-3:00pm">2:00pm-3:00pm</MenuItem>
                                                            <MenuItem value="3:00pm-4:00pm">3:00pm-4:00pm</MenuItem>
                                                            <MenuItem value="Other">Other</MenuItem>
                                                        </SelectValidator>
                                                    </FormControl>
                                                    <div style = {{ marginTop: 20 }}>
                                                        {
                                                            values.deliveryTime === 'Other'
                                                            ? (<div>
                                                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 15, marginBottom: -10 }}>Other Delivery Time</InputLabel>
                                                                    <TextValidator 
                                                                        id = "deliveryTimeOther"
                                                                        placeholder = "Enter Delivery Time Frame"
                                                                        required
                                                                        margin = "normal"
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                        variant = "outlined"
                                                                        style = {{ marginLeft: 12, width: 275, marginBottom: 0 }}
                                                                        size = "small"
                                                                        onChange = { handleChange('deliveryTimeOther') }
                                                                        validators = { ['required'] } 
                                                                        errorMessages = { ['Required field'] }
                                                                    />
                                                                </div>)
                                                            : null
                                                        }
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} style = {{ marginTop: 20 }}>
                                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 30, marginBottom: -10 }}>Delivery Address</InputLabel>
                                                    <TextValidator
                                                        id = "deliveryAddress"
                                                        placeholder = "Enter Delivery Address"
                                                        required
                                                        margin = "normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant = "outlined"
                                                        style = {{ marginLeft: 12, width: 275 }}
                                                        size = "small"
                                                        onChange = { handleChange('deliveryAddress') }
                                                        defaultValue = { values.deliveryAddress }
                                                        validators = { ['required'] } 
                                                        errorMessages = { ['Required field'] }
                                                    />
                                                </Grid>
                                                <Grid item xs={12} style = {{ marginTop: 0 }}>
                                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 10, marginBottom: -10 }}>Delivery City</InputLabel>
                                                    <TextValidator
                                                        id = "deliveryCity"
                                                        placeholder = "Enter Delivery City"
                                                        required
                                                        margin = "normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant = "outlined"
                                                        style = {{ marginLeft: 12, width: 275 }}
                                                        size = "small"
                                                        onChange = { handleChange('deliveryCity') }
                                                        defaultValue = { values.deliveryCity }
                                                        validators = { ['required'] } 
                                                        errorMessages = { ['Required field'] }
                                                    />
                                                </Grid>
                                                <Grid item xs={12} style = {{ marginTop: 10 }}>
                                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 10, marginBottom: 5 }}>Delivery State</InputLabel>
                                                    <FormControl variant="outlined" style = {{ marginLeft: 12, width: 275 }}>
                                                        <InputLabel>{ values.deliveryState === '' ? 'Select Delivery State' : null}</InputLabel>
                                                        <SelectValidator id="deliveryState" value={values.deliveryState} 
                                                                onChange={handleChange('deliveryState')} validators = { ['required'] } errorMessages = { ['Required field'] }
                                                                MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}
                                                                variant="outlined">
                                                            <MenuItem disabled>Select Delivery State</MenuItem>
                                                            <MenuItem value="DC">District of Columbia (DC)</MenuItem>
                                                            <MenuItem value="MD">Maryland (MD)</MenuItem>
                                                            <MenuItem value="VA">Virginia (VA)</MenuItem>
                                                        </SelectValidator>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} style = {{ marginTop: 15 }}>
                                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 20, marginBottom: -10 }}>Delivery Zip Code</InputLabel>
                                                    <TextValidator 
                                                        id = "deliveryZip"
                                                        placeholder = "Enter Delivery Zip Code"
                                                        required
                                                        margin = "normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant = "outlined"
                                                        style = {{ marginLeft: 12, width: 275 }}
                                                        size = "small"
                                                        onChange = { handleChange('deliveryZip') }
                                                        defaultValue = { values.deliveryZip }
                                                    />
                                                </Grid>
                                            </div>))
                                        : null                                    
                                    }
                                </div>

                                <hr/><br/>
                                <Grid item xs={12}>
                                    <Grid style = {{ marginLeft: 15, marginRight: 15, marginBottom: 5 }}>
                                        <Typography style = {{ fontWeight: 600, fontSize: '15px', textAlign: 'center' }}>Non-refundable deposit required: </Typography>
                                        <List style = {{ marginTop: -8, fontSize: 5, textAlign: 'center' }}>
                                            <ListItemText primary={<Typography style = {{fontSize: '15px'}}>Pick-up (Pentagon City): 50% Deposit</Typography>} />
                                            <ListItemText primary={<Typography style = {{fontSize: '15px'}}>Nearby Delivery (+$10): Full Deposit</Typography>}/>
                                        </List>
                                    </Grid>
                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 5, marginBottom: 5 }}>Payment Method</InputLabel>
                                    <FormControl variant="outlined" style = {{ marginLeft: 12, width: 275, marginBottom: 10 }}>
                                        <InputLabel>{ values.paymentMethod === '' ? 'Select Payment Method' : null }</InputLabel>
                                        <SelectValidator id="paymentMethod" value={values.paymentMethod}
                                                onChange={handleChange('paymentMethod')} required validators = { ['required'] } errorMessages = { ['Required field'] }
                                                MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}
                                                variant="outlined">
                                            <MenuItem disabled>Select Payment Method</MenuItem>
                                            <MenuItem value="Venmo">Venmo (Preferred)</MenuItem>
                                            <MenuItem value="Zelle">Zelle</MenuItem>
                                            <MenuItem value="Cash">Cash</MenuItem>
                                        </SelectValidator>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className="inputLabel" style = {{ marginLeft: 15, marginTop: 10, marginBottom: -10 }}>How did you hear about Yumfullness?</InputLabel>
                                    <TextField 
                                        id = "discoveryMethod"
                                        placeholder = "Instagram, Facebook, Friend, Other"
                                        required
                                        margin = "normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant = "outlined"
                                        style = {{ marginLeft: 12, resize: 5 }}
                                        size = "small"
                                        onChange = { handleChange('discoveryMethod') }
                                        defaultValue = { values.discoveryrMethod }
                                    />
                                </Grid>
                                <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                                    { values.activeStep === steps.length 
                                        ? (<Grid container justify="center">
                                                <Button href="/" label="Submit" variant="contained" color="primary" size="medium"
                                                    style = {{ marginTop: 10, backgroundColor: "#1976d2", color: "#ffffff" }}>
                                                    Return Home
                                                </Button>
                                            </Grid>) 
                                        : (<div className="button-group" style = {{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Button disabled={values.activeStep === 0} onClick={prevStep} className='button' variant="contained">
                                                        Back
                                                    </Button>
                                                <Button variant="contained" color="primary" className='button' style = {{ margin: 15 }} type = "submit" disabled = { validForm }>
                                                    { values.activeStep === steps.length - 1 ? 'Order!' : 'Next' }
                                                </Button>
                                            </div>)
                                    }
                                </div>
                            </ValidatorForm>
                        </Grid>
                    </Box>
                </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}

export default CustomerDetails