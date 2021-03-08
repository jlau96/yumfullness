import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, InputLabel, MenuItem  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';

const muiTheme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' }
    },
});

export class CustomerDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values, handleChange } = this.props;

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
                                    style = {{ margin: 12, marginTop: 30, width: 275 }}
                                    size = "small"
                                    onChange = { handleChange('firstName') }
                                    defaultValue = { values.firstName }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    id = "lastName"
                                    label = "Last Name"
                                    placeholder = "Enter Last Name"
                                    required
                                    autoFocus
                                    margin = "normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant = "outlined"
                                    style = {{ margin: 12, width: 275 }}
                                    size = "small"
                                    onChange = { handleChange('lastName') }
                                    defaultValue = { values.lastName }
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                    style = {{ margin: 12, width: 275  }}
                                    size = "small"
                                    onChange = { handleChange('email') }
                                    defaultValue = { values.email }
                                />
                            </Grid>
                            <hr/><br/>
                            
                            <Grid item xs={12} style = {{ marginLeft: 15 }}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Pick-Up or Delivery</FormLabel>
                                    <RadioGroup aria-label="transferMethod" name="transferMethod" onChange={handleChange('transferMethod')} defaultValue={values.transferMethod}>
                                        <FormControlLabel value="pickUp" control={<Radio color="primary"/>} label="Pick-Up" />
                                        <FormControlLabel value="delivery" control={<Radio color="primary"/>} label="Delivery" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            
                            <div className="transferMethodOptions" style = {{ marginBottom: 10 }}>
                                {
                                    values.transferMethod === 'pickUp'
                                    ? (<div className="pickUpOptions">
                                            <Grid item xs={12}>
                                                <TextField 
                                                    id = "pickUpDate"
                                                    label = "Pick-Up Date"
                                                    placeholder = "Enter Pick-Up Date"
                                                    required
                                                    margin = "normal"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant = "outlined"
                                                    style = {{ margin: 12, width: 275 }}
                                                    size = "small"
                                                    onChange = { handleChange('pickUpDate') }
                                                    defaultValue = { values.pickUpDate }
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField 
                                                    id = "pickUpTime"
                                                    label = "PickUp Time"
                                                    placeholder = "Enter Pick-Up Time"
                                                    required
                                                    margin = "normal"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant = "outlined"
                                                    style = {{ margin: 12, width: 275 }}
                                                    size = "small"
                                                    onChange = { handleChange('pickUpTime') }
                                                    defaultValue = { values.pickUpTime }
                                                />
                                            </Grid>
                                    </div>)
                                    : (<div className="deliveryOptions">
                                        <Grid item xs={12}>
                                            <TextField 
                                                id = "deliveryDate"
                                                label = "Delivery Date"
                                                placeholder = "Enter Delivery Date"
                                                required
                                                margin = "normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant = "outlined"
                                                style = {{ margin: 12, width: 275 }}
                                                size = "small"
                                                onChange = { handleChange('deliveryDate') }
                                                defaultValue = { values.deliveryDate }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField 
                                                id = "deliveryTime"
                                                label = "Delivery Time"
                                                placeholder = "Enter Delivery Time"
                                                required
                                                margin = "normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant = "outlined"
                                                style = {{ margin: 12, width: 275 }}
                                                size = "small"
                                                onChange = { handleChange('deliveryTime') }
                                                defaultValue = { values.deliveryTime }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
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
                                                style = {{ margin: 12, width: 275 }}
                                                size = "small"
                                                onChange = { handleChange('deliveryAddress') }
                                                defaultValue = { values.deliveryAddress }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField 
                                                id = "deliveryState"
                                                label = "Delivery State"
                                                placeholder = "Enter Delivery State"
                                                required
                                                margin = "normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant = "outlined"
                                                style = {{ margin: 12, width: 275 }}
                                                size = "small"
                                                onChange = { handleChange('deliveryState') }
                                                defaultValue = { values.deliveryState }
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
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
                                                style = {{ margin: 12, width: 275 }}
                                                size = "small"
                                                onChange = { handleChange('deliveryZip') }
                                                defaultValue = { values.deliveryZip }
                                            />
                                        </Grid>
                                    </div>)
                                }
                            </div>

                            <hr/><br/>
                            <Grid item xs={12} style = {{ marginTop: -10 }}>
                                <FormControl variant="outlined" style = {{ marginLeft: 12, width: 275 }}>
                                    <Grid style = {{ marginBottom: 7 }}>
                                        <InputLabel id="paymentMethod">Payment Method</InputLabel>
                                    </Grid>
                                    <Select id="paymentMethod" label="Payment Method" onChange ={ handleChange('paymentMethod') } 
                                            style = {{ height: 40, marginBottom: 10 }}>
                                        <MenuItem value="venmo">Venmo</MenuItem>
                                        <MenuItem value="zelle">Zelle</MenuItem>
                                        <MenuItem value="cash">Cash</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <h5 style = {{ marginLeft: 16 }}>How did you hear about @yumfullness?</h5>
                                <TextField 
                                    id = "discoveryMethod"
                                    placeholder = "Instagram, Facebook, Friend, Other"
                                    required
                                    margin = "normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant = "outlined"
                                    style = {{ margin: 12, width: 275 }}
                                    size = "small"
                                    onChange = { handleChange('discoveryMethod') }
                                    defaultValue = { values.discoveryrMethod }
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}

export default CustomerDetails