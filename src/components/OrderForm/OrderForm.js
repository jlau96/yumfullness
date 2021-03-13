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

const emailJsKeys = {
    USER_ID: 'user_LysXNUTBkPlLzkuwiEVB3',
    TEMPLATE_ID: 'yumfullness_order_form'
}

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
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        transferMethod: 'pickUp',
        pickUpDate: null,
        pickUpTime: null,
        pickUpTimeOther: null,
        deliveryDate: null,
        deliveryTime: null,
        deliveryTimeOther: null,
        deliveryAddress: null,
        deliveryCity: null, 
        deliveryState: null,
        deliveryZip: null,
        paymentMethod: null,
        discoveryMethod: null
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

    nextStep = e => {
        const { activeStep } = this.state;
        if (activeStep === 2) {
            e.preventDefault();
            this.submit();
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

    submit = () => {
        const values = this.state;
        const CAKE_HEARTS_PER_ORDER = 8;

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
                deliveryAddress, deliveryCity, deliveryState, deliveryZip, paymentMethod, discoveryMethod } = this.state;

        const values = { activeStep, singleCake, singleCakeFlavor, singleCakeCustomFlavor, singleCakeShape, singleCakeComments, 
                         doubleCake, doubleCakeFlavor, doubleCakeCustomFlavor, doubleCakeShape, doubleCakeComments, 
                         breakableHeart, breakableHeartColor, breakableHeartCustomColor, breakableHeartLetters, breakableHeartCustom, breakableHeartComments, 
                         cakeHeart, cakeHeartQty, cakeHeartCoating, cakeHeartCustomCoating, cakeHeartFilling, cakeHeartComments, 
                         cakeHeartLetters, firstName, lastName, email, phone, transferMethod, pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, 
                         deliveryTimeOther, deliveryAddress, deliveryCity, deliveryState, deliveryZip, 
                         paymentMethod, discoveryMethod };

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

                                <MenuForm nextStep={this.nextStep} handleChange={this.handleChange} handleCheckboxChange={this.handleCheckboxChange} values={values}/>
            
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

                                <CustomerDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleDateChange={this.handleDateChange} 
                                                 values={values}/>
            
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

                                <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>
            
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
                                                <Typography className='instructions' fontWeight="600px">
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