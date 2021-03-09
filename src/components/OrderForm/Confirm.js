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
        const { values: { firstName, lastName, email, transferMethod, pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, 
            deliveryTimeOther, deliveryAddress, deliveryState, deliveryZip, paymentMethod } } = this.props;

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