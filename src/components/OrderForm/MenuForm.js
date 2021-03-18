import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

import SingleLetterCake from './MenuImages/single_letter_cake.jpg';
import DoubleNumberCake from './MenuImages/double_number_cake.jpg';
import BreakableHeart from './MenuImages/breakable_heart.jpg';
import CakeHeart from './MenuImages/cake_hearts.jpg';

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
            multiline: {
                height: '75px'
            }
        }
    }
});

export class MenuForm extends Component {    
    render() {
        const { steps, values, nextStep, prevStep, handleChange, handleCheckboxChange } = this.props;

        return(
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
                            }} >
                            <img alt="" src={SingleLetterCake} style = {{ height: '225px', width: '225px', marginTop: 20, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('singleCake')} checked={values.singleCake} color="primary" /> } 
                                            label={<Typography style = {{ marginTop: 20 }}>1 Number/Letter Cake <br/>(or any shape) - $75+</Typography>} />
                            <div>
                                {
                                    values.singleCake === true
                                    ? (<div>
                                            <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 15, marginBottom: 10 }}>
                                                <Grid>
                                                    <InputLabel id="singleCakeFlavor">Cake Flavor*</InputLabel>
                                                </Grid>
                                                <Select id="singleCakeFlavor" label="Single Cake Flavor" defaultValue={values.singleCakeFlavor} 
                                                        value={values.singleCakeFlavor} onChange={handleChange('singleCakeFlavor')}
                                                        MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                    <MenuItem value="Select" disabled>Select Cake Flavor</MenuItem>
                                                    <MenuItem value="Strawberry Crunch">Strawberry Crunch</MenuItem>
                                                    <MenuItem value="Oreo">Oreo</MenuItem>
                                                    <MenuItem value="French Vanilla">French Vanilla</MenuItem>
                                                    <MenuItem value="Chocolate">Chocolate</MenuItem>
                                                    {/* <MenuItem value="Other">Other Flavor (Customized)</MenuItem> */}
                                                </Select>
                                            </FormControl>
                                        {/* <div>
                                            {
                                                values.singleCakeFlavor === 'Other'
                                                ? (<TextField 
                                                    placeholder = "Enter flavor customization"
                                                    required
                                                    margin = "normal"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant = "outlined"
                                                    style = {{ width: "250px", marginLeft: 25, marginTop: -2 }}
                                                    defaultValue = { values.singleCakeCustomFlavor }
                                                    onChange = { handleChange('singleCakeCustomFlavor') }
                                                    />)
                                                : null
                                            }
                                        </div> */}
                                        <TextField 
                                            label = "Cake Shape"
                                            placeholder = "Enter number, letter, or shape"
                                            required
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            rows = { 1 }
                                            defaultValue = { values.singleCakeShape }
                                            onChange = { handleChange('singleCakeShape') }
                                        />
                                        <TextField 
                                            label = "Additional Comments (Optional)"
                                            placeholder = "Enter any additional comments or customizations (theme, toppings, etc.)"
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            multiline
                                            rows = { 3 }
                                            defaultValue = { values.singleCakeComments }
                                            onChange = { handleChange('singleCakeComments') }
                                        />
                                        </div>)
                                    : null
                                }
                            </div>

                            <br/><hr style = {{ maxWidth: '300px' }}/><br/>

                            <img alt="" src={DoubleNumberCake} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('doubleCake')} checked={values.doubleCake} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>2 Number/Letter Cake <br/>(or any shape) - $100+</Typography>} />
                            <div>
                                {
                                    values.doubleCake === true
                                    ? (<div>
                                            <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 15, marginBottom: 10 }}>
                                                <Grid>
                                                    <InputLabel id="doubleCakeFlavor">Cake Flavor*</InputLabel>
                                                </Grid>
                                                <Select id="doubleCakeFlavor" label="Cake Flavor" defaultValue={values.doubleCakeFlavor} 
                                                        value={values.doubleCakeFlavor} onChange={handleChange('doubleCakeFlavor')}
                                                        MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                    <MenuItem value="Select" disabled>Select Cake Flavor</MenuItem>
                                                    <MenuItem value="Strawberry Crunch">Strawberry Crunch</MenuItem>
                                                    <MenuItem value="Oreo">Oreo</MenuItem>
                                                    <MenuItem value="French Vanilla">French Vanilla</MenuItem>
                                                    <MenuItem value="Chocolate">Chocolate</MenuItem>
                                                    {/* <MenuItem value="Other">Other Flavor (Customized)</MenuItem> */}
                                                </Select>
                                            </FormControl>
                                        {/* <div>
                                            {
                                                values.doubleCakeFlavor === 'Other'
                                                ? (<TextField 
                                                    placeholder = "Enter flavor customization"
                                                    required
                                                    margin = "normal"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant = "outlined"
                                                    style = {{ width: "200px", marginLeft: 25, marginTop: -2 }}
                                                    defaultValue = { values.doubleCakeCustomFlavor }
                                                    onChange = { handleChange('doubleCakeCustomFlavor') }
                                                    />)
                                                : null                                                    
                                            }
                                        </div> */}
                                        <TextField 
                                            label = "Cake Shape"
                                            placeholder = "Enter number, letter, or shape"
                                            required
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            rows = { 1 }
                                            defaultValue = { values.doubleCakeShape }
                                            onChange = { handleChange('doubleCakeShape') }
                                        />
                                        <TextField 
                                            label = "Additional Comments (Optional)"
                                            placeholder = "Enter any additional comments or customizations (theme, toppings, etc.)"
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            multiline
                                            rows = { 3 }
                                            defaultValue = { values.doubleCakeComments }
                                            onChange = { handleChange('doubleCakeComments') }
                                        />
                                        </div>)
                                    : null
                                }
                            </div>

                            <br/><hr style = {{ maxWidth: '300px' }}/><br/>

                            <img alt="" src={BreakableHeart} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('breakableHeart')} checked={values.breakableHeart} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>Breakable Heart (w/ brownie &#38; pretezel twist filling) - $30+</Typography>} />
                            <div>
                                { 
                                    values.breakableHeart === true
                                    ? (<div>
                                            <TextField 
                                                label = "Quantity"
                                                placeholder = "Enter quantity"
                                                margin = "normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant = "outlined"
                                                style = {{ width: "300px", marginLeft: 25, marginTop: 15 }}
                                                defaultValue = { values.breakableHeartQty }
                                                onChange = { handleChange('breakableHeartQty') }
                                            />
                                            <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 10, marginBottom: 10 }}>
                                                <Grid>
                                                    <InputLabel id="breakableHeartColor">Heart Chocolate*</InputLabel>
                                                </Grid>
                                                <Select id="breakableHeartColor" label="Heart Chocolate" defaultValue={values.breakableHeartColor}
                                                        value={values.breakableHeartColor} onChange={handleChange('breakableHeartColor')}
                                                        MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                    <MenuItem value="Select" disabled>Select Heart Chocolate</MenuItem>
                                                    <MenuItem value="Milk Chocolate">Milk Chocolate</MenuItem>
                                                    <MenuItem value="White Chocolate">White Chocolate</MenuItem>
                                                    <MenuItem value="Other">Other Color Chocolate</MenuItem>
                                                </Select>
                                            </FormControl>
                                        <div>
                                            {
                                                values.breakableHeartColor === 'Other'
                                                ? (<TextField 
                                                        placeholder = "Enter chocolate color"
                                                        required
                                                        margin = "normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant = "outlined"
                                                        style = {{ width: "225px", marginLeft: 25, marginTop: -2 }}
                                                        defaultValue = { values.breakableHeartCustomColor }
                                                        onChange = { handleChange('breakableHeartCustomColor') }
                                                    />)
                                                : null
                                            }
                                        </div>
                                        <TextField 
                                            label = "Heart Letters (Optional)"
                                            placeholder = "Enter letters or phrase on heart"
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            defaultValue = { values.breakableHeartLetters }
                                            onChange = { handleChange('breakableHeartLetters') }
                                        />
                                        <TextField 
                                            label = "Other Customization (Optional)"
                                            placeholder = "Enter customization (filling, decoration, theme, etc.)"
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            multiline
                                            rows = { 3 }
                                            defaultValue = { values.breakableHeartCustom }
                                            onChange = { handleChange('breakableHeartCustom') }
                                        />
                                        <TextField 
                                            label = "Additional Comments (Optional)"
                                            placeholder = "Enter any additional comments"
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            multiline
                                            rows = { 3 }
                                            defaultValue = { values.breakableHeartComments }
                                            onChange = { handleChange('breakableHeartComments') }
                                        />
                                        </div>)
                                    : null
                                }
                            </div>

                            <br/><hr style = {{ maxWidth: '300px' }}/><br/>

                            <img alt="" src={CakeHeart} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('cakeHeart')} checked={values.cakeHeart} color="primary" /> }
                                              label={<Typography>Cake Hearts - 8 for $20</Typography>}
                                              style = {{ marginTop: 10 }} />
                            <div>
                                {
                                    values.cakeHeart === true 
                                    ? (<div>
                                        <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 5, marginBottom: 10 }}>
                                            <Grid>
                                                <InputLabel id="cakeHeartQty">Quantity*</InputLabel>
                                            </Grid>
                                            <Select id="cakeHeartQty" label="Quantity" defaultValue={values.cakeHeartQty} 
                                                    value={values.cakeHeartQty} onChange={handleChange("cakeHeartQty")}
                                                    MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                <MenuItem value="Select" disabled>Select Quantity</MenuItem>
                                                <MenuItem value="1">1 - 8 Hearts - $20</MenuItem>
                                                <MenuItem value="2">2 - 16 Hearts - $38</MenuItem>
                                                <MenuItem value="3">3 - 24 Hearts - $55</MenuItem>
                                                <MenuItem value="4">4 - 32 Hearts - $70</MenuItem>
                                                <MenuItem value="5">5 - 40 Hearts - $85</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 5, marginBottom: 10 }}>
                                            <Grid>
                                                <InputLabel id="cakeHeartCoating">Chocolate Coating*</InputLabel>
                                            </Grid>
                                            <Select id="cakeHeartCoating" label="Chocolate Coating" defaultValue={values.cakeHeartCoating} 
                                                    value={values.cakeHeartCoating} onChange={handleChange('cakeHeartCoating')}
                                                    MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                <MenuItem value="Select" disabled>Select Chocolate Coating</MenuItem>
                                                <MenuItem value="Milk Chocolate">Milk Chocolate</MenuItem>
                                                <MenuItem value="White Chocolate">White Chocolate</MenuItem>
                                                <MenuItem value="Other">Other Color</MenuItem>
                                            </Select>
                                            <div>
                                                {
                                                    values.cakeHeartCoating === 'Other'
                                                    ? (<TextField 
                                                            placeholder = "Enter Color"
                                                            required
                                                            margin = "normal"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            variant = "outlined"
                                                            style = {{ width: "300px", marginLeft: 0, marginTop: 10 }}
                                                            rows = { 1 }
                                                            defaultValue = { values.cakeHeartCustomCoating }
                                                            onChange = { handleChange('cakeHeartCustomCoating') }
                                                        />)
                                                    : null
                                                }
                                            </div>
                                            
                                        </FormControl>
                                        <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 0, marginBottom: 10 }}>
                                            <Grid>
                                                <InputLabel id="cakeHeartFilling">Cake Filling*</InputLabel>
                                            </Grid>
                                            <Select id="cakeHeartFilling" label="Cake Filling" defaultValue={values.cakeHeartFilling} 
                                                    value={values.cakeHeartFilling} onChange={handleChange("cakeHeartFilling")}
                                                    MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                <MenuItem value="Select" disabled>Select Cake Filling</MenuItem>
                                                <MenuItem value="Chocolate Cake">Chocolate Cake</MenuItem>
                                                <MenuItem value="Confetti Cake">Confetti Cake</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField 
                                            label = "Cake Heart Letters (Optional)"
                                            placeholder = "Enter letters on cake hearts"
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            defaultValue = { values.cakeHeartLetters }
                                            onChange = { handleChange('cakeHeartLetters') }
                                        />
                                        <TextField 
                                            label = "Additional Comments (Optional)"
                                            placeholder = "Enter any additional comments"
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "300px", marginLeft: 25, marginTop: 5 }}
                                            multiline
                                            rows = { 3 }
                                            defaultValue = { values.cakeHeartComments }
                                            onChange = { handleChange('cakeHeartComments') }
                                        />
                                        </div>)
                                    : null
                                }
                            </div>
                            
                            <br/><hr style = {{ maxWidth: '300px', marginTop: -10 }}/><br/>
                            
                            <Typography style = {{ marginLeft: 15, marginRight: 15, fontSize: 14, maxWidth: '270px' }}>
                                Baked goods are made using kitchen equipment with known allergens such as eggs, dairy, wheat, soy, and nuts.
                                I cannot guarantee allergen-free, gluten-free, or nut-free baked goods.
                            </Typography>
                            <FormControl component="fieldset">
                                <FormControlLabel control={ <Checkbox color="primary" onChange={handleCheckboxChange('orderCertification')}/> }
                                                  checked = { values.orderCertification } 
                                                  style = {{ marginLeft: -5 }}
                                                  label= { <Typography style = {{ fontSize: 14 }}>I understand and will still love to order!</Typography> } />
                            </FormControl>

                            <div>
                                {
                                    values.orderCertification === false 
                                        ? <Alert variant="outlined" severity="error" style = {{ maxWidth: "285px", marginLeft: 5 }}>
                                            <Typography style = {{ fontSize: 12 }}>Must certify statement to continue order</Typography>
                                          </Alert> 
                                        : null
                                }
                            </div>

                            <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                                { 
                                    values.activeStep === steps.length 
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
                                            <Button variant="contained" color="primary" onClick={nextStep} className='button' style = {{ margin: 15 }} 
                                                    disabled = { values.orderCertification === false} >
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

