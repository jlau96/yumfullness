import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2),
        display: 'flex', 
        justifyContent: 'center',
        fontWeight: 600
    }
}));

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
    }
});

function getSteps() {
    return ['Select Treats', 'Order Details', 'Review and Order!'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select treats to order';
        case 1:
            return 'Enter order information';
        case 2:
            return 'Review and order';
        default:
            return 'Unknown Step';
    }
}

export default function OrderForm() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };

    return (
        <MuiThemeProvider theme={muiTheme}>
            <React.Fragment>
                <Grid container spacing={1} style = {{ marginTop: 100, marginBottom: 10, justifyContent:'center', alignItems: 'center' }}>
                    <h1>Order Form</h1>
                </Grid>
                <div className={classes.root}>
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

                    <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        { activeStep === steps.length 
                            ? (<div>
                                    <Typography className={classes.instructions}>
                                        You&apos;re order is completed!
                                    </Typography>
                                    <Button href = "/" label = "Submit" variant = "contained" color = "primary" ize = "large"
                                        style = {{ marginTop: 10, backgroundColor: "#1976d2", color: "#ffffff" }}>
                                        Return Home
                                    </Button>
                                </div>) 
                            : (<div>
                                    <Typography className={classes.instructions}>
                                        { getStepContent(activeStep) }
                                    </Typography>
                                    <div className="buttons" style = {{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} variant="contained">
                                            Back
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}
                                                style = {{ backgroundColor: "#1976d2", color: "#ffffff" }}>
                                            { activeStep === steps.length - 1 ? 'Order!' : 'Next' }
                                        </Button>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )
}