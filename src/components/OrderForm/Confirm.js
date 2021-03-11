import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Moment from 'moment';

const muiTheme = createMuiTheme({
    overrides: {
    }
});

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

    toDateStr = (date) => {
        return Moment(date).format("dddd, MMMM DD, YYYY");
    }

    render() {
        const { values: { singleCake, singleCakeFlavor, singleCakeCustomFlavor, singleCakeShape, doubleCake, doubleCakeFlavor, doubleCakeCustomFlavor, doubleCakeShape, breakableHeart, breakableHeartColor, 
            breakableHeartCustomColor, breakableHeartLetters, breakableHeartCustom, cakeHeart, cakeHeartQty, cakeHeartCoating, cakeHeartCustomCoating, cakeHeartFilling, firstName, lastName, email, transferMethod, 
            pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, deliveryTimeOther, deliveryAddress, deliveryState, deliveryZip, paymentMethod } } = this.props;

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
                                minHeight: "300px",
                                padding: "5px 20px 30px 20px",
                                borderRadius: "6px"
                            }}
                        >
                            <h3 style = {{ marginTop: 10, marginBottom: -10 }}>Order Details</h3>
                            <List>
                                <div>
                                    {
                                        singleCake === true 
                                        ? (<div>
                                                <ListItemText primary = { "1 Number/Letter Cake" } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                                <ListItemText secondary = { "Flavor: " + (singleCakeFlavor !== 'Other' ? singleCakeFlavor : singleCakeCustomFlavor) } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                <ListItemText  secondary = { "Shape: " + singleCakeShape } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                            </div>)
                                        : null
                                    }
                                </div>
                                <div>
                                    {
                                        doubleCake === true
                                        ? (<div>
                                                <ListItemText primary = { "2 Numbers/Letters Cake" } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                                <ListItemText secondary = { "Flavor: " + (doubleCakeFlavor !== 'Other' ? doubleCakeFlavor : doubleCakeCustomFlavor) } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                <ListItemText  secondary = { "Shape: " + doubleCakeShape } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                            </div>)
                                        : null
                                    }
                                </div>
                                <div>
                                    {
                                        breakableHeart === true
                                        ? (<div>
                                                <ListItemText primary = { "Breakable Heart" } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                                <ListItemText secondary = { "Chocolate: " + (breakableHeartColor !== 'Other' ? breakableHeartColor : breakableHeartCustomColor) } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                <ListItemText  secondary = { "Letters: " + breakableHeartLetters } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                <div>
                                                    {
                                                        breakableHeartCustom !== null 
                                                        ? <ListItemText  secondary = { 'Customization: ' + breakableHeartCustom } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        : <ListItemText  secondary = { 'No Customization' } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                    }
                                                </div>
                                            </div>)
                                        : null
                                    }
                                </div>
                                <div>
                                    {
                                        cakeHeart === true
                                        ? (<div>
                                                <ListItemText primary = { "Cake Hearts" } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                                <ListItemText secondary = { "Quantity" + cakeHeartQty } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                                <ListItemText secondary = { "Chocolate: " + (cakeHeartCoating !== 'Other' ? cakeHeartCoating: cakeHeartCustomCoating) } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                <ListItemText  secondary = { "Filling: " + cakeHeartFilling } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                            </div>)
                                    : null
                                    }
                                </div>
                            </List>


                            <br/><hr/>
                            <h3 style = {{ marginTop: 10, marginBottom: -10 }}>Customer Details</h3>
                            <List>
                                <ListItemText primary = { "First Name" } secondary = { firstName } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Last Name" } secondary = { lastName } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Email" } secondary = { email } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Pick-Up/Delivery" } secondary = { transferMethod } style = {{ margin: 15, whiteSpace: 'normal' }} />

                                <div style = {{ marginTop: -20, marginBottom: -20 }}>
                                    {
                                        transferMethod !== 'Delivery' 
                                        ? (<List>
                                            <ListItemText primary = { "Pick-Up Date" } secondary = { this.toDateStr(pickUpDate) } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <ListItemText primary = { "Pick-Up Time" } secondary = { pickUpTime } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <div>
                                                {
                                                    pickUpTime === 'Other'
                                                    ? (<ListItemText primary = { "Pick-Up Time Other" } secondary = { pickUpTimeOther } style = {{ margin: 15, whiteSpace: 'normal' }} />)
                                                    : null
                                                }
                                            </div>
                                        </List>)
                                        : (<List>
                                            <ListItemText primary = { "Delivery Date" } secondary = { this.toDateStr(deliveryDate) } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <ListItemText primary = { "Delivery Time" } secondary = { deliveryTime } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <div>
                                                {
                                                    deliveryTime === 'Other'
                                                    ? (<ListItemText primary = { "Delivery Time Other" } secondary = { deliveryTimeOther } style = {{ margin: 15, whiteSpace: 'normal' }} />)
                                                    : null
                                                }
                                            </div>
                                            
                                            <ListItemText primary = { "Delivery Address" } secondary = { deliveryAddress } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <ListItemText primary = { "Delivery State" } secondary = { deliveryState } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <ListItemText primary = { "Delivery Zip" } secondary = { deliveryZip } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                        </List>)
                                    }
                                </div>
                                <ListItemText primary = { "Payment Method" } secondary = { paymentMethod } style = {{ margin: 15, whiteSpace: 'normal' }} />
                            </List>
                        </Grid>
                    </Box>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }

}