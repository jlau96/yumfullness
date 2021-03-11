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

export class OrderForm extends Component {
    state = {
        activeStep: 0,
        singleCake: false,
        singleCakeFlavor: null,
        singleCakeCustomFlavor: null,
        singleCakeShape: null,
        doubleCake: false,
        doubleCakeFlavor: null,
        doubleCakeCustomFlavor: null,
        doubleCakeShape: null,
        breakableHeart: false,
        breakableHeartColor: null,
        breakableHeartCustomColor: null,
        breakableHeartLetters: null, 
        breakableHeartCustom: null, 
        cakeHeart: false,
        cakeHeartQty: null,
        cakeHeartCoating: null,
        cakeHeartCustomCoating: null,
        cakeHeartFilling: null,
        firstName: '',
        lastName: '',
        email: '',
        transferMethod: 'pickUp',
        pickUpDate: null,
        pickUpTime: '',
        pickUpTimeOther: null,
        deliveryDate: null,
        deliveryTime: '',
        deliveryTimeOther: null,
        deliveryAddress: '',
        deliveryState: 'none',
        deliveryZip: '',
        paymentMethod: '',
        discoveryMethod: ''

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
            // TODO: LOGIC TO SUBMIT!
            console.log("SUBMIT!");
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
        this.setState({ [input]: e.target.value });
    }

    handleDateChange = (input) => e => {
        this.setState({ [input]: e });
    }

    handleCheckboxChange = (input) => e => {
        this.setState({ [input]: e.target.checked });
    }
    
    render() {
        const steps = this.getSteps();

        const { activeStep, singleCake, singleCakeFlavor, singleCakeCustomFlavor, singleCakeShape, doubleCake, doubleCakeFlavor, doubleCakeCustomFlavor, doubleCakeShape, breakableHeart, breakableHeartColor, 
                breakableHeartCustomColor, breakableHeartLetters, breakableHeartCustom, cakeHeart, cakeHeartQty, cakeHeartCoating, cakeHeartCustomCoating, cakeHeartFilling, firstName, lastName, email, 
                transferMethod, pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, deliveryTimeOther, deliveryAddress, deliveryState, deliveryZip, paymentMethod, discoveryMethod } = this.state;
        const values = { activeStep, singleCake, singleCakeFlavor, singleCakeCustomFlavor, singleCakeShape, doubleCake, doubleCakeFlavor, doubleCakeCustomFlavor, doubleCakeShape, breakableHeart, 
                         breakableHeartColor, breakableHeartCustomColor, breakableHeartLetters, breakableHeartCustom, cakeHeart, cakeHeartQty, cakeHeartCoating, cakeHeartCustomCoating, cakeHeartFilling, 
                         firstName, lastName, email, transferMethod, pickUpDate, pickUpTime, pickUpTimeOther, deliveryDate, deliveryTime, deliveryTimeOther, deliveryAddress, deliveryState, deliveryZip, 
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
                                                I will confirm the order within 24 hours! 
                                                <br/>
                                                Thanks for ordering from Yumfullness!
                                            </Typography>) 
                                        : (<Typography className='instructions' style = {{ fontWeight: 600 }}>
                                                { this.getStepContent(activeStep) }
                                            </Typography>)
                                    }
                                </div>

                                <div>
                                    <Typography style = {{ marginLeft: 11, marginRight: 11, marginBottom: 20, fontSize: 12, textAlign: 'center' }}>
                                        *Items are not made in a gluten-free or nut-free environment*
                                    </Typography>
                                    <Typography style = {{ marginLeft: 25, marginRight: 25, marginBottom: 20, fontSize: 12, textAlign: 'center' }}>
                                        Please reach out if you have any questions about the menu or you need a custom order!
                                    </Typography>
                                </div>

                                <MenuForm nextStep={this.nextStep} handleChange={this.handleChange} handleCheckboxChange={this.handleCheckboxChange} values={values}/>
            
                                <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                                    { activeStep === steps.length 
                                        ? (<Grid container justify="center">
                                                <Button href="/" label="Submit" variant="contained" color="primary" size="medium"
                                                    style = {{ marginTop: 10, marginLeft: 20, backgroundColor: "#1976d2", color: "#ffffff" }}>
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
                                                I will confirm the order within 24 hours! 
                                                <br/>
                                                Thanks for ordering from Yumfullness!
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
                                                    style = {{ marginTop: 10, marginLeft: 20, backgroundColor: "#1976d2", color: "#ffffff" }}>
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
                                                I will confirm the order within 24 hours! 
                                                <br/>
                                                Thanks for ordering from Yumfullness!
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
                                                    style = {{ marginTop: 10, marginLeft: 20, backgroundColor: "#1976d2", color: "#ffffff" }}>
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
                                        ? (<Typography className='instructions'>
                                                You&apos;re order is completed! 
                                                <br/>
                                                I will confirm the order within 24 hours! 
                                                <br/>
                                                Thanks for ordering from Yumfullness!
                                            </Typography>) 
                                        : (<Typography className='instructions' style = {{ fontWeight: 600 }}>
                                                { this.getStepContent(activeStep) }
                                            </Typography>)
                                    }
                                </div>
            
                                <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                                    { activeStep === steps.length 
                                        ? (<Grid container justify="center">
                                                <Button href="/" label="Submit" variant="contained" color="primary" size="medium"
                                                    style = {{ marginTop: 10, marginLeft: 20, backgroundColor: "#1976d2", color: "#ffffff" }}>
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