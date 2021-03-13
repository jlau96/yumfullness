import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

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

    

    render() {
        const { steps, nextStep, prevStep, values, handleChange, handleDateChange } = this.props;

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
                            <Grid item xs={12}>
                                <TextField 
                                    id = "firstName"
                                    label = "First Name"
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
                                    defaultValue = { values.firstName }
                                    // error={!this.isValid(values.firstName)}
                                />
                            </Grid>
                            <Grid item xs={12} style = {{ marginTop: -5 }}>
                                <TextField 
                                    id = "lastName"
                                    label = "Last Name"
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
                                    defaultValue = { values.lastName }
                                />
                            </Grid>
                            <Grid item xs={12} style = {{ marginTop: -5 }}>
                                <TextField 
                                    id = "email"
                                    label = "Email"
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
                                    defaultValue = { values.email }
                                />
                            </Grid>
                            <Grid item xs={12} style = {{ marginTop: -5 }}>
                                <TextField 
                                    id = "phone"
                                    label = "Phone (###-###-####)"
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
                                    defaultValue = { values.phone }
                                />
                            </Grid>
                            <hr/><br/>
                            
                            <Grid item xs={12} style = {{ marginLeft: 15 }}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Pick-Up or Delivery</FormLabel>
                                    <RadioGroup aria-label="transferMethod" name="transferMethod" onChange={handleChange('transferMethod')} defaultValue="Pick-Up">
                                        <FormControlLabel value="Pick-Up" control={<Radio color="primary"/>} label="Pick-Up" />
                                        <FormControlLabel value="Delivery" control={<Radio color="primary"/>} label="Nearby Delivery (+$10)" style={{marginTop: -10}}/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            
                            <div className="transferMethodOptions" style = {{ marginTop: -10, marginBottom: 10 }}>
                                {   values.transferMethod !== 'Delivery'
                                    ? (<div className="pickUpOptions" style = {{ marginTop: 5 }}>
                                            <Grid item xs={12} style = {{ marginLeft: 12 }}>
                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                    <KeyboardDatePicker
                                                        id="pickUpDate"
                                                        label="Pick-Up Date"
                                                        format="MM/DD/yyyy"
                                                        margin="normal"
                                                        inputVariant="outlined"
                                                        value={ values.pickUpDate }
                                                        onChange={ handleDateChange('pickUpDate') }
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                            <Grid item xs={12} style = {{ marginTop: 20 }}>
                                                <FormControl variant="outlined" style = {{ marginLeft: 10, width: 275, marginBottom: 10 }}>
                                                    <Grid>
                                                        <InputLabel id="pickUpTime">Pick-Up Time Frame</InputLabel>
                                                    </Grid>
                                                    <Select id="pickUpTime" label="Pick-Up Time Frame" defaultValue="Select" onChange={handleChange('pickUpTime')}
                                                            MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                        <MenuItem value="Select" disabled>Select Pick-Up Time Frame</MenuItem>
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
                                                    </Select>
                                                </FormControl>
                                                <div>
                                                    {
                                                        values.pickUpTime === 'Other'
                                                        ? (<TextField 
                                                            id = "pickUpTimeOther"
                                                            label = "Other Pick-Up Time"
                                                            placeholder = "Enter desired pick-up timeframe"
                                                            required
                                                            margin = "normal"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            variant = "outlined"
                                                            style = {{ marginBottom: 20, marginLeft: 12, width: 275  }}
                                                            size = "small"
                                                            onChange = { handleChange('pickUpTimeOther') }
                                                        />)
                                                        : null
                                                    }
                                                </div>
                                            </Grid>
                                    </div>)
                                    : (<div className="deliveryOptions" style = {{ marginTop: 5 }}>
                                        <Grid item xs={12} style = {{ marginLeft: 12 }}>
                                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                                <KeyboardDatePicker
                                                    id="deliverypDate"
                                                    label="Delivery Date"
                                                    format="MM/DD/yyyy"
                                                    margin="normal"
                                                    inputVariant="outlined"
                                                    value={ values.deliveryDate }
                                                    onChange={ handleDateChange('deliveryDate') }
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                        <Grid item xs={12} style = {{ marginTop: 20, marginBottom: -10 }}>
                                            <FormControl variant="outlined" style = {{ marginLeft: 10, width: 275 }}>
                                                <Grid>
                                                    <InputLabel id="deliveryTime">Delivery Time Frame</InputLabel> 
                                                </Grid>
                                                <Select id="deliveryTime" label="Delivery Time Frame" defaultValue="Select" onChange={handleChange('deliveryTime')}
                                                        MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                    <MenuItem value="Select" disabled>Select Delivery Time Frame</MenuItem>
                                                    <MenuItem value="10:00am-11:00am">10:00am-11:00am</MenuItem>
                                                    <MenuItem value="11:00am-12:00pm">11:00am-12:00pm</MenuItem>
                                                    <MenuItem value="12:00pm-1:00pm">12:00pm-1:00pm</MenuItem>
                                                    <MenuItem value="1:00pm-2:00pm">1:00pm-2:00pm</MenuItem>
                                                    <MenuItem value="2:00pm-3:00pm">2:00pm-3:00pm</MenuItem>
                                                    <MenuItem value="3:00pm-4:00pm">3:00pm-4:00pm</MenuItem>
                                                    <MenuItem value="Other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <div style = {{ marginTop: 20 }}>
                                                {
                                                    values.deliveryTime === 'Other'
                                                    ? (<TextField 
                                                        id = "deliveryTimeOther"
                                                        label = "Other Delivery Time"
                                                        placeholder = "Enter desired delivery timeframe"
                                                        required
                                                        margin = "normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant = "outlined"
                                                        style = {{ marginLeft: 12, width: 275 }}
                                                        size = "small"
                                                        onChange = { handleChange('deliveryTimeOther') }
                                                    />)
                                                    : null
                                                }
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} style = {{ marginTop: 20 }}>
                                            <TextField 
                                                id = "deliveryAddress"
                                                label = "Delivery Address"
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
                                            />
                                        </Grid>
                                        <Grid item xs={12} style = {{ marginTop: 0 }}>
                                            <TextField 
                                                id = "deliveryCity"
                                                label = "Delivery City"
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
                                            />
                                        </Grid>
                                        <Grid item xs={12} style = {{ marginTop: 20 }}>
                                            <FormControl variant="outlined" style = {{ marginLeft: 10, width: 275 }}>
                                                <Grid>
                                                    <InputLabel id="deliveryState">Delivery State</InputLabel>
                                                </Grid>
                                                <Select id="deliveryState" label="Delivery State" defaultValue="Select" onChange={handleChange('deliveryState')}
                                                        MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                    <MenuItem value="Select" disabled>Select Delivery State</MenuItem>
                                                    <MenuItem value="DC">District of Columbia (DC)</MenuItem>
                                                    <MenuItem value="MD">Maryland (MD)</MenuItem>
                                                    <MenuItem value="VA">Virginia (VA)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} style = {{ marginTop: 13 }}>
                                            <TextField 
                                                id = "deliveryZip"
                                                label = "Delivery Zip Code"
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
                                    </div>)
                                }
                            </div>

                            <hr/><br/>
                            <Grid item xs={12}>
                                <Grid style = {{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
                                    <Typography style = {{ fontWeight: 600, fontSize: '15px', textAlign: 'center' }}>Non-refundable deposit required: </Typography>
                                    <List style = {{ marginTop: -8, fontSize: 5, textAlign: 'center' }}>
                                        <ListItemText primary={<Typography style = {{fontSize: '15px'}}>Pick-up (Pentagon City): 50% Deposit</Typography>} />
                                        <ListItemText primary={<Typography style = {{fontSize: '15px'}}>Nearby Delivery (+$10): Full Deposit</Typography>}/>
                                    </List>
                                </Grid>
                                <FormControl variant="outlined" style = {{ marginLeft: 10, width: 275, marginBottom: 10 }}>                                    
                                    <Grid>
                                        <InputLabel id="paymentMethod">Payment Method</InputLabel>
                                    </Grid>
                                    <Select id="paymentMethod" label="Enter Payment Method" defaultValue="Select" onChange={handleChange('paymentMethod')} required
                                            MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                        <MenuItem value="Select" disabled>Select Payment Method</MenuItem>
                                        <MenuItem value="Venmo">Venmo (Preferred)</MenuItem>
                                        <MenuItem value="Zelle">Zelle</MenuItem>
                                        <MenuItem value="Cash">Cash</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography style = {{ marginLeft: 14, marginBottom: -10, fontSize: 15 }}>How did you hear about @yumfullness?</Typography>
                                <TextField 
                                    id = "discoveryMethod"
                                    placeholder = "Instagram, Facebook, Friend, Other"
                                    required
                                    margin = "normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant = "outlined"
                                    style = {{ marginLeft: 10, resize: 5 }}
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
                                            <Button variant="contained" color="primary" onClick={nextStep} className='button'
                                                    style = {{ backgroundColor: "#1976d2", color: "#ffffff", margin: 15 }}>
                                                { values.activeStep === steps.length - 1 ? 'Order!' : 'Next' }
                                            </Button>
                                        </div>)
                                }
                            </div>
                        </Grid>
                    </Box>
                </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}

export default CustomerDetails