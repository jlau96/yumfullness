import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import NotFound from '../NotFound/NotFound';
import CustomerDetails from './CustomerDetails';
import { Confirm } from './Confirm';
import './OrderForm.css'
import { MenuForm } from './MenuForm';
import emailjs from 'emailjs-com';
import Moment from 'moment';
import InstagramSticker from './follow_me_instagram.jpg';

import { GoogleSpreadsheet } from 'google-spreadsheet';

const muiTheme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                '&$active': {
                    color: '#1976d2',
                },
                '&$completed': {
                    color: '#1976d2',
                },
            },
        },
        MuiTypography: {
            root: {
                textAlign: 'center'
            }
        }
    }
});

const googleSpreadsheetKeys = {
    SPREADSHEET_ID: "1fx1eiIr2M0mvodUvr3WZ75wor0qxCqAwnUa15J7RzCE",
    SHEET_ID: "0",
    CLIENT_EMAIL: "yumfullness@iloveyumfullness.iam.gserviceaccount.com",
    PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCzPjL9RN7nOLp3\nl6NuPvjpAikX7IZ9iDGjEMc07wfzVCwIZi4OlvWTPjs9XHCMmSKqpOizpDN4zkFr\nuBGnwEA+CxcpyivC9Ng308odUC1BWfOzd09xINQgVObtVQoMWBCKB1TXoO3B263q\nNTw2oPz8poySpUOIgp97NO5JIrvmRg5GU3SF6dXjr7Nr4nrx7SqsXBTyyP5KprdA\ngVWVdiXVQiyDFNQGblvoZSy0b3+byc9xR1yWJVVuXVKS+5BcJTHsefZoxnw2p4UM\nLAV9ppVNS9EPxAO3OYK6STYw64evn6SmO4jzLKuFv5+4+bdpFUErmZ9w3g45x/SE\nWqU9XxPLAgMBAAECggEAA3PyyoM9ogmrOeuPZ+vJor96aC4Txy5M+n2zwLbMGelo\nsb66K2jIEU6VGJED0AmRK+ViYDeNEEo042zX1jnzYt6W0yTEZAyQb77iOV9Wh9hC\nRBZLzvuZaogILNFDEMrPgsEyZrcAbYgcWRMudkTyqrFQqvCJFQOjK93wqzMCmKR/\niRZGpTHuGgJZzRt9DpOM/hKn6rv38hBzyIROQCrAgGGRWjNVDa7Nux2uhi4vjzwU\no9YOmPFN1B8cc5TvdiTGfZ3YjIbsyfpY2Ju/uBtKJah29M8EUVYqAi1zLPOVAkKy\nPASHs/sbXdpBGsJ0Da3IeANArXPDIeo+8WO8ZAkWEQKBgQDxS4aC57z08wlTtUVl\nhMQ9eDaHRGPs3h1+Dy3RhPWNg102tRG6F6VH0EQteIRz9WJy9hsxjsE2Dxyi6GNo\nkiulcJ5r53lFtL7MLS4ZX5SKFrB4RaOQ2hKtbEQJjfwugDKhjmCEuPWcK9pqL4xB\nRdq1CPIke6YTRbMH30fATugCkQKBgQC+Kpd3WiFCsEeD0LZlnBRuwAeLkws0F2Rz\nfvhQxMQvdattSNrMrGgRx1eDrBwrTHIiM3PcjlslRH+7yymIzKoI6BHZtqLR87z1\ngk5BT6WCWkWnARVfOYSllYGA6Ij02Esmbv5093Ctn4XqNEBh71omYpV/Erv3xkel\ncbx02EQmmwKBgQDBUEnGrJRFBkUtrCeZ6qExwhKlklQgG98y9EQ3/LahlmHih3RZ\nS8Jd42wLpecv46LpCWTF8mG2xqqhlV63E4wmMjCpsDwHbYQCnhu1tk6RxxXAdcJS\nNXQLPpbPtNIaCxkFN8T58BjN8pA8zDUowiczLKSaN/nYrNl+8BJS7qSQEQKBgQCs\nNfvmvLtEHkkVKOwUhkzGoqXykt3hdZGlOgV7d0VGyWPN2t0x3qt79i7dcf4sg9UT\n/c5dnJkT3b1i/i+Fz/nniOmpZEh8oyKqni9p28vBiShsfYGyM29ZWFPnvi1QtZMQ\nohFTMUVcJgtqtZjcV5onCr3hTsDkOC5nt+D3W2YUIwKBgQDIDW82jyR6HUFNziD+\nOFwE3tUgcUNhnp7aTLhhh09vJ69fKEflgTy+PWqv3FDqA8xIz06At7PVcjjZ2UKO\njygDvHs2M98Wpe80zIm8EprvXbtNPI9oWooqxjWTb3nkzJZ9eNxYKbvvFD4n35Od\nmHQcN+yqIUJtongg8WCp+7XmYg==\n-----END PRIVATE KEY-----\n"
}

const emailJsKeys = {
    USER_ID: 'user_LysXNUTBkPlLzkuwiEVB3',
    TEMPLATE_ID: 'yumfullness_order_form'
}

const CAKE_HEARTS_PER_ORDER = 8;

export class OrderForm extends Component {
    state = {
        activeStep: 0,
        singleCake: false,
        singleCakeFlavor: "Select",
        singleCakeCustomFlavor: null,
        singleCakeShape: null,
        singleCakeComments: null,
        doubleCake: false,
        doubleCakeFlavor: "Select",
        doubleCakeCustomFlavor: null,
        doubleCakeShape: null,
        doubleCakeComments: null,
        breakableHeart: false,
        breakableHeartColor: "Select",
        breakableHeartCustomColor: null,
        breakableHeartLetters: null, 
        breakableHeartCustom: null, 
        breakableHeartComments: null,
        cakeHeart: false,
        cakeHeartQty: "Select",
        cakeHeartCoating: "Select",
        cakeHeartCustomCoating: null,
        cakeHeartFilling: "Select",
        cakeHeartLetters: null,
        cakeHeartComments: null, 
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        transferMethod: '',
        pickUpDate: null,
        pickUpTime: '',
        pickUpTimeOther: '',
        deliveryDate: null,
        deliveryTime: '',
        deliveryTimeOther: '',
        deliveryAddress: '',
        deliveryCity: '', 
        deliveryState: '',
        deliveryZip: '',
        paymentMethod: '',
        discoveryMethod: '',
        orderCertification: false
    }

    getSteps = () => {
        return ['Select Treats', 'Order Details', 'Review & Order'];
    }

    getStepContent = (activeStep) => {
        switch (activeStep) {
            case 0:
                return 'Select treats to order';
            case 1:
                return 'Enter order information';
            case 2:
                return 'Review and order';
            case 3:
                return 'Order is complete!';
            default:
                return 'Unknown Step';
        }
    }

    nextStep = () => {
        const { activeStep } = this.state;
        if (activeStep === 2) {
            this.sendToGoogleSheets();
            this.sendEmail();
        }
        this.setState({
            activeStep: activeStep + 1
        });
        
    }

    prevStep = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1
        });
    }

    handleChange = (input) => e => {
        e.preventDefault();
        this.setState({ [input]: e.target.value });
    }

    handleDateChange = (input) => e => {
        this.setState({ [input]: e });
    }

    handleCheckboxChange = (input) => e => {
        this.setState({ [input]: e.target.checked });
    }

    toDateStr = (date) => {
        return Moment(date).format("dddd, MMMM DD, YYYY");
    }

    appendSpreadsheet = async(row) => {
        const spreadsheet = new GoogleSpreadsheet(googleSpreadsheetKeys.SPREADSHEET_ID);
        try {
            await spreadsheet.useServiceAccountAuth({
                client_email: googleSpreadsheetKeys.CLIENT_EMAIL,
                private_key: googleSpreadsheetKeys.PRIVATE_KEY,
            });

            await spreadsheet.loadInfo();
            const sheet = spreadsheet.sheetsById[googleSpreadsheetKeys.SHEET_ID];
            await sheet.addRow(row);
        } catch (e) {
            console.error("Error appending to Google Sheets: ", e);
        }
        console.log("Successfully added order to Google Sheets!");
    }

    sendToGoogleSheets = () => {
        const values = this.state;
        const row = {
            "First Name": values.firstName,
            "Last Name": values.lastName,
            "Email": values.email,
            "Phone": values.phone,
            "Pick-Up/Delivery": values.transferMethod,
            "Order Date": values.transferMethod === 'Delivery' ? this.toDateStr(values.deliveryDate) : this.toDateStr(values.pickUpDate), 
            "Time Frame": values.transferMethod === 'Delivery' 
                    ? (values.deliveryTime !== 'Other' ? values.deliveryTime : "Other - " + values.deliveryTimeOther) 
                    : (values.pickUpTime !== 'Other' ? values.pickUpTime : "Other - " + values.pickUpTimeOther),
            "Delivery Address": values.transferMethod === 'Delivery' ? (values.deliveryAddress + ', ' + values.deliveryCity + ', ' + values.deliveryState + ' ' + values.deliveryZip) : "N/A",
            "Payment Method": values.paymentMethod,
            "Discovery Method": values.discoveryMethod,
            "Order": "→",
            "Single Cake": values.singleCake === true 
                            ? ("Flavor: " + (values.singleCakeFlavor !== 'Other' ? values.singleCakeFlavor : "Other - " + values.singleCakeCustomFlavor) + ", " +
                               "Shape: " + values.singleCakeShape + ", " + "Comments: " + (values.singleCakeComments !== null ? values.singleCakeComments : "N/A"))
                            : null,
            "Double Cake": values.doubleCake === true 
                            ? ("Flavor: " + (values.doubleCakeFlavor !== 'Other' ? values.doubleCakeFlavor : "Other - " + values.doubleCakeCustomFlavor) + ", " +
                            "Shape: " + values.doubleCakeShape + ", " + "Comments: " + (values.doubleCakeComments !== null ? values.doubleCakeComments : "N/A"))
                            : null,
            "Breakable Heart": values.breakableHeart === true
                                ? ("Color: " + (values.breakableHeartColor !== 'Other' ? values.breakableHeartColor : "Other - " + values.breakableHeartCustomColor) + ", " +
                                   "Letters: " + (values.breakableHeartLetters !== null ? values.breakableHeartLetters : "N/A") + ", " +
                                   "Customization: " + (values.breakableHeartCustom !== null ? values.breakableHeartCustom : "N/A") + ", " +
                                   "Comments: " + (values.breakableHeartComments !== null ? values.breakableHeartComments : "N/A"))
                                : null, 
            "Cake Heart": values.cakeHeart === true
                            ? ("Qty: " + values.cakeHeartQty*CAKE_HEARTS_PER_ORDER + ", " +
                               "Coating: " + (values.cakeHeartCoating !== 'Other' ? values.cakeHeartCoating : values.cakeHeartCustomCoating) + ", " +
                               "Filling: " + (values.cakeHeartFilling !== null ? values.cakeHeartFilling : "N/A") + ", " +
                               "Letters: " + (values.cakeHeartLetters !== null ? values.cakeHeartLetters : "N/A") + ", " +
                               "Comments: " + (values.cakeHeartComments !== null ? values.cakeHeartComments : "N/A"))
                            : null
        }
        this.appendSpreadsheet(row);
    }

    sendEmail = () => {
        const values = this.state;

        var orderValues = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            transferMethod: values.transferMethod,
            pickUpDate: values.transferMethod === "Pick-Up" ? this.toDateStr(values.pickUpDate) : "N/A",
            pickUpTime: values.transferMethod === "Pick-Up" ? values.pickUpTime : "N/A",
            pickUpTimeOther: values.pickUpTime === "Other" ? values.pickUpTimeOther : "N/A",
            deliveryDate: values.transferMethod === "Delivery" ? this.toDateStr(values.deliveryDate) : "N/A",
            deliveryTime: values.transferMethod === "Delivery" ? values.deliveryTime : "N/A",
            deliveryAddress: values.transferMethod === "Delivery" ? (values.deliveryAddress + ", " + values.deliveryState + "," + values.deliveryState + " " + values.deliveryZip) : "N/A",
            paymentMethod: values.paymentMethod,
            discoveryMethod: values.discoveryMethod, 
            singleCake: values.singleCake === true ? "ORDERED" : "NOT ORDERED",
            singleCakeFlavor: values.singleCakeFlavor !== null ? (values.singleCakeFlavor !== "Select" ? values.singleCakeFlavor : "N/A") : "N/A",
            singleCakeCustomFlavor: values.singleCakeCustomFlavor !== null ? values.singleCakeCustomFlavor : "N/A",
            singleCakeShape: values.singleCakeShape !== null ? values.singleCakeShape : "N/A",
            singleCakeComments: values.singleCakeComments !== null ? values.singleCakeComments: "N/A", 
            doubleCake: values.doubleCake === true ? "ORDERED": "NOT ORDERED",
            doubleCakeFlavor: values.doubleCakeFlavor !== null ? (values.doubleCakeFlavor !== "Select" ? values.doubleCakeFlavor : "N/A") : "N/A",
            doubleCakeCustomFlavor: values.doubleCakeCustomFlavor != null ? values.doubleCakeCustomFlavor : "N/A",
            doubleCakeShape: values.doubleCakeShape !== null ? values.doubleCakeShape : "N/A",
            doubleCakeComments: values.doubleCakeComments !== null ? values.doubleCakeComments : "N/A", 
            breakableHeart: values.breakableHeart === true ? "ORDERED" : "NOT ORDERED",
            breakableHeartColor: values.breakableHeartColor !== null ? (values.breakableHeartColor !== "Select" ? values.breakableHeartColor : "N/A") : "N/A",
            breakableHeartCustomColor: values.breakableHeartCustomColor !== null ? values.breakableHeartCustomColor : "N/A",
            breakableHeartLetters: values.breakableHeartLetters !== null ? values.breakableHeartLetters : "N/A",
            breakableHeartCustom: values.breakableHeartCustom !== null ? values.breakableHeartCustom : "N/A",
            breakableHeartComments: values.breakableHeartComments !== null ? values.breakableHeartComments : "N/A", 
            cakeHeart: values.cakeHeart === true ? "ORDERED" : "NOT ORDERED",
            cakeHeartQty: values.cakeHeartQty !== null ? (values.cakeHeartQty !== "Select" ? values.cakeHeartQty*CAKE_HEARTS_PER_ORDER : "N/A") : "N/A",
            cakeHeartCoating: values.cakeHeartCoating !== null ? (values.cakeHeartCoating !== "Select" ? values.cakeHeartCoating : "N/A") : "N/A",
            cakeHeartCustomCoating: values.cakeHeartCustomCoating !== null ? values.cakeHeartCustomCoating : "N/A",
            cakeHeartFilling: values.cakeHeartFilling !== null ? (values.cakeHeartFilling !== "Select" ? values.cakeHeartFilling : "N/A") : "N/A",
            cakeHeartLetters: values.cakeHeartLetters !== null ? values.cakeHeartLetters : "N/A",
            cakeHeartComments: values.cakeHeartComments !== null ? values.cakeHeartComments : "N/A"     
        }

        // emailjs.send('gmail', emailJsKeys.TEMPLATE_ID, orderValues, emailJsKeys.USER_ID)
        //     .then(function(response) {
        //         console.log("Order form email successfully sent!", response.status, response.text);
        //     }, function(error) {
        //         console.log("Order form email failed to send...", error);
        //     });
    }
    
    render() {
        const steps = this.getSteps();

        const { activeStep, singleCake, singleCakeFlavor, singleCakeCustomFlavor, singleCakeShape, singleCakeComments,
                doubleCake, doubleCakeFlavor, doubleCakeCustomFlavor, doubleCakeShape, doubleCakeComments,
                breakableHeart, breakableHeartColor, breakableHeartCustomColor, breakableHeartLetters, breakableHeartCustom, breakableHeartComments, 
                cakeHeart, cakeHeartQty, cakeHeartCoating, cakeHeartCustomCoating, cakeHeartFilling, cakeHeartLetters, cakeHeartComments, 
                firstName, lastName, email, phone, transferMethod, pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, deliveryTimeOther, 
                deliveryAddress, deliveryCity, deliveryState, deliveryZip, paymentMethod, discoveryMethod, orderCertification } = this.state;

        const values = { activeStep, singleCake, singleCakeFlavor, singleCakeCustomFlavor, singleCakeShape, singleCakeComments, 
                         doubleCake, doubleCakeFlavor, doubleCakeCustomFlavor, doubleCakeShape, doubleCakeComments, 
                         breakableHeart, breakableHeartColor, breakableHeartCustomColor, breakableHeartLetters, breakableHeartCustom, breakableHeartComments, 
                         cakeHeart, cakeHeartQty, cakeHeartCoating, cakeHeartCustomCoating, cakeHeartFilling, cakeHeartComments, 
                         cakeHeartLetters, firstName, lastName, email, phone, transferMethod, pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, 
                         deliveryTimeOther, deliveryAddress, deliveryCity, deliveryState, deliveryZip, paymentMethod, discoveryMethod, orderCertification };

        switch(activeStep) {
            case 0:
                return (
                    <MuiThemeProvider theme={muiTheme}>
                        <React.Fragment>
                            <Grid container spacing={1} style = {{ marginTop: 100, marginBottom: 10, justifyContent:'center', alignItems: 'center' }}>
                                <h1>Order Form</h1>
                            </Grid>
                            
                            <div className='root'>
                                <Grid container justify="center">
                                    <Stepper activeStep={activeStep}>
                                        { steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                return (
                                                    <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })
                                        }
                                    </Stepper>
                                </Grid>
            
                                <div style = {{ marginBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    { activeStep === steps.length 
                                        ? (<Typography className='instructions'>
                                                You&apos;re order is completed! 
                                                <br/>
                                                <br/>
                                                I will confirm the order within 24 hours. 
                                                <br/>
                                                <br/>
                                                Thanks for ordering from Yumfullness.
                                                <br/>
                                                I am excited to share my treats with you.
                                                <br/>
                                                Talk to you soon!
                                            </Typography>) 
                                        : (<Typography className='instructions' style = {{ fontWeight: 600 }}>
                                                { this.getStepContent(activeStep) }
                                            </Typography>)
                                    }
                                </div>

                                <div>
                                    <Typography className="instructions" style = {{ marginLeft: 25, marginRight: 25, marginBottom: 20, fontSize: 14 }}>
                                        Please reach out if you have any questions about the menu or need a custom order!
                                    </Typography>
                                </div>

                                <MenuForm steps={this.getSteps()} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} 
                                          handleCheckboxChange={this.handleCheckboxChange} values={values}/>

                            </div>
                        </React.Fragment>
                    </MuiThemeProvider>
                )
            
            case 1:
                return (
                    <MuiThemeProvider theme={muiTheme}>
                        <React.Fragment>
                            <Grid container spacing={1} style = {{ marginTop: 100, marginBottom: 10, justifyContent:'center', alignItems: 'center' }}>
                                <h1>Order Form</h1>
                            </Grid>
                            
                            <div className='root'>
                                <Grid container justify="center">
                                    <Stepper activeStep={activeStep}>
                                        { steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                return (
                                                    <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })
                                        }
                                    </Stepper>
                                </Grid>
            
                                <div style = {{ marginBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    { activeStep === steps.length 
                                        ? (<Typography classes='instructions'>
                                                You&apos;re order is completed! 
                                                <br/>
                                                <br/>
                                                I will confirm the order within 24 hours. 
                                                <br/>
                                                <br/>
                                                Thanks for ordering from Yumfullness.
                                                <br/>
                                                I am excited to share my treats with you.
                                                <br/>
                                                Talk to you soon!
                                            </Typography>) 
                                        : (<Typography className='instructions' style = {{ fontWeight: 600 }}>
                                                { this.getStepContent(activeStep) }
                                            </Typography>)
                                    }
                                </div>

                                <CustomerDetails steps={this.getSteps()} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} 
                                                 handleDateChange={this.handleDateChange} values={values}/>
            
                            </div>
                        </React.Fragment>
                    </MuiThemeProvider>
                )

            case 2:
                return (
                    <MuiThemeProvider theme={muiTheme}>
                        <React.Fragment>
                            <Grid container spacing={1} style = {{ marginTop: 100, marginBottom: 10, justifyContent:'center', alignItems: 'center' }}>
                                <h1>Order Form</h1>
                            </Grid>
                            
                            <div className='root'>
                                <Grid container justify="center">
                                    <Stepper activeStep={activeStep}>
                                        { steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                return (
                                                    <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })
                                        }
                                    </Stepper>
                                </Grid>
            
                                <div style = {{ marginBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    { activeStep === steps.length 
                                        ? (<Typography className='instructions'>
                                                You&apos;re order is completed! 
                                                <br/>
                                                <br/>
                                                I will confirm the order within 24 hours. 
                                                <br/>
                                                <br/>
                                                Thanks for ordering from Yumfullness.
                                                <br/>
                                                I am excited to share my treats with you.
                                                <br/>
                                                Talk to you soon!
                                            </Typography>) 
                                        : (<Typography className='instructions' style = {{ fontWeight: 600 }}>
                                                { this.getStepContent(activeStep) }
                                            </Typography>)
                                    }
                                </div>

                                <Confirm steps={this.getSteps()} nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>

                            </div>
                        </React.Fragment>
                    </MuiThemeProvider>
                )
            case 3:
                return (
                    <MuiThemeProvider theme={muiTheme}>
                        <React.Fragment>
                            <Grid container spacing={1} style = {{ marginTop: 100, marginBottom: 10, justifyContent:'center', alignItems: 'center' }}>
                                <h1>Order Form</h1>
                            </Grid>
                            
                            <div className='root'>
                                <Grid container justify="center">
                                    <Stepper activeStep={activeStep}>
                                        { steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                return (
                                                    <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })
                                        }
                                    </Stepper>
                                </Grid>
            
                                <div style = {{ marginBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    { activeStep === steps.length 
                                        ? (<div>
                                                <Typography className='instructions' style = {{ fontWeight: 600 }}>
                                                    You&apos;re order is completed!
                                                </Typography> 
                                                <Typography className="instructions">
                                                    <br/>
                                                    I will confirm the order within 24 hours. 
                                                    <br/>
                                                    <br/>
                                                    Thanks for ordering from Yumfullness.
                                                    <br/>
                                                    I am excited to share my treats with you.
                                                    <br/>
                                                    Talk to you soon!
                                                </Typography>
                                                <Grid style = {{ display: 'flex', justifyContent: 'center', marginTop: 10 }}> 
                                                    <a href="https://www.instagram.com/yumfullness/"><img src={InstagramSticker} alt="" style = {{ width:'175px' }} /></a>
                                                </Grid>
                                            </div>) 
                                        : (<Typography className='instructions' style = {{ fontWeight: 600 }}>
                                                { this.getStepContent(activeStep) }
                                            </Typography>)
                                    }
                                </div>
            
                                <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                                    { activeStep === steps.length 
                                        ? (<Grid container justify="center">
                                                <Button href="/" label="Submit" variant="contained" color="primary" size="medium"
                                                    style = {{ marginTop: 10, backgroundColor: "#1976d2", color: "#ffffff" }}>
                                                    Return Home
                                                </Button>
                                            </Grid>) 
                                        : (<div className="button-group" style = {{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Button disabled={activeStep === 0} onClick={this.prevStep} className='button' variant="contained">
                                                        Back
                                                    </Button>
                                                <Button variant="contained" color="primary" onClick={this.nextStep} className='button'
                                                        style = {{ backgroundColor: "#1976d2", color: "#ffffff", margin: 15 }}>
                                                    { activeStep === steps.length - 1 ? 'Order!' : 'Next' }
                                                </Button>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </React.Fragment>
                    </MuiThemeProvider>
                )
            default:
                return <NotFound />
        } 
    }
    
}

export default OrderForm