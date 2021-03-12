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

const CAKE_HEARTS_PER_ORDER = 8;

export class Confirm extends Component {

    toDateStr = (date) => {
        return Moment(date).format("dddd, MMMM DD, YYYY");
    }

    render() {
        const { values: { singleCake, singleCakeFlavor, singleCakeCustomFlavor, singleCakeShape, singleCakeComments, 
                          doubleCake, doubleCakeFlavor, doubleCakeCustomFlavor, doubleCakeShape, doubleCakeComments, 
                          breakableHeart, breakableHeartColor, breakableHeartCustomColor, breakableHeartLetters, breakableHeartCustom, breakableHeartComments, 
                          cakeHeart, cakeHeartQty, cakeHeartCoating, cakeHeartCustomCoating, cakeHeartFilling, cakeHeartLetters, cakeHeartComments, 
                          firstName, lastName, email, phone, transferMethod, pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, deliveryTimeOther, 
                          deliveryAddress, deliveryCity, deliveryState, deliveryZip, paymentMethod } } = this.props;

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
                            <div style = {{ marginBottom: -10 }}>
                                {
                                    (singleCake === false && doubleCake === false && breakableHeart === false && cakeHeart === false)
                                    ? <ListItemText primary = { "No Items Added to Order" } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                    : <List>
                                        <div>
                                            {
                                                singleCake === true 
                                                ? (<div>
                                                        <ListItemText primary = { "1 Number/Letter Cake" } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Flavor: " + (singleCakeFlavor !== 'Other' ? singleCakeFlavor : singleCakeCustomFlavor) } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Shape: " + singleCakeShape } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Additional Comments: " + (singleCakeComments !== null ? singleCakeComments : 'none') } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
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
                                                        <ListItemText secondary = { "Shape: " + doubleCakeShape } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Additional Comments: " + (doubleCakeComments !== null ? doubleCakeComments : 'none') } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
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
                                                        <ListItemText secondary = { "Letters: " + (breakableHeartLetters !== null ? breakableHeartLetters : "none") } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Customization: " + (breakableHeartCustom !== null ? breakableHeartCustom : 'none') } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Additional Comments: " + (breakableHeartComments !== null ? breakableHeartComments : 'none') } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                    </div>)
                                                : null
                                            }
                                        </div>
                                        <div>
                                            {
                                                cakeHeart === true
                                                ? (<div>
                                                        <ListItemText primary = { "Cake Hearts" } style = {{ marginLeft: 15, marginTop: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Quantity: " + cakeHeartQty*CAKE_HEARTS_PER_ORDER + " Hearts" } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Chocolate: " + (cakeHeartCoating !== 'Other' ? cakeHeartCoating: cakeHeartCustomCoating) } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Filling: " + cakeHeartFilling } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Letters: " + (cakeHeartLetters !== null ? cakeHeartLetters : "none") } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        <ListItemText secondary = { "Additional Comments: " + (cakeHeartComments !== null ? cakeHeartComments : 'none') } style = {{ marginLeft: 15, whiteSpace: 'normal' }} />
                                                        
                                                    </div>)
                                            : null
                                            }
                                        </div>
                                    </List>
                                }                                
                            </div>

                            <br/><hr/>
                            <h3 style = {{ marginTop: 10, marginBottom: -10 }}>Customer Details</h3>
                            <List>
                                <ListItemText primary = { "First Name" } secondary = { firstName } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Last Name" } secondary = { lastName } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Email" } secondary = { email } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Phone Number" } secondary = { phone } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                <ListItemText primary = { "Pick-Up/Delivery" } secondary = { transferMethod } style = {{ margin: 15, whiteSpace: 'normal' }} />

                                <div style = {{ marginTop: -20, marginBottom: -20 }}>
                                    {
                                        transferMethod !== 'Delivery' 
                                        ? (<List>
                                            <ListItemText primary = { "Pick-Up Date" } secondary = { this.toDateStr(pickUpDate) } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <ListItemText primary = { "Pick-Up Time" } secondary = { pickUpTime !== "Other" ? pickUpTime : "Other - " + pickUpTimeOther } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                        </List>)
                                        : (<List>
                                            <ListItemText primary = { "Delivery Date" } secondary = { this.toDateStr(deliveryDate) } style = {{ margin: 15, whiteSpace: 'normal' }} />
                                            <ListItemText primary = { "Delivery Time" } secondary = { deliveryTime !== "Other" ? deliveryTime : "Other - " + deliveryTimeOther} style = {{ margin: 15, whiteSpace: 'normal' }} />                                            
                                            <ListItemText primary = { "Delivery Address" } secondary = { deliveryAddress + ", " + deliveryCity + ", " + deliveryState + " " + deliveryZip } style = {{ margin: 15, whiteSpace: 'normal' }} />
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