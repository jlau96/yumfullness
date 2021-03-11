import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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
        const { values, handleChange, handleCheckboxChange } = this.props;

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
                            }}
                        >
                            <img alt="" src={SingleLetterCake} style = {{ height: '225px', width: '225px', marginTop: 20, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('singleCake')} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>1 Number/Letter Cake <br/>(or any shape) - $75+</Typography>}
                            />
                                <div>
                                    {
                                        values.singleCake === true
                                        ? (<div>
                                                <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 15, marginBottom: 10 }}>
                                                    <Grid>
                                                        <InputLabel id="singleCakeFlavor">Cake Flavor</InputLabel>
                                                    </Grid>
                                                    <Select id="singleCakeFlavor" label="Single Cake Flavor" defaultValue="Select" onChange={handleChange('singleCakeFlavor')}
                                                            MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                        <MenuItem value="Select" disabled>Select Cake Flavor</MenuItem>
                                                        <MenuItem value="Strawberry Crunch">Strawberry Crunch</MenuItem>
                                                        <MenuItem value="Oreo">Oreo</MenuItem>
                                                        <MenuItem value="Other">Other Flavor (Customized)</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            <div>
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
                                                        onChange = { handleChange('singleCakeCustomFlavor') }
                                                        />)
                                                    : null
                                                }
                                            </div>
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
                                                onChange = { handleChange('singleCakeShape') }
                                            />
                                            </div>)
                                        : null
                                    }
                                </div>
                                
                            <br/><hr/><br/>
                            <img alt="" src={DoubleNumberCake} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('doubleCake')} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>2 Number/Letter Cake <br/>(or any shape) - $100+</Typography>}
                            />
                                <div>
                                    {
                                        values.doubleCake === true
                                        ? (<div>
                                                <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 15, marginBottom: 10 }}>
                                                    <Grid>
                                                        <InputLabel id="doubleCakeFlavor">Cake Flavor</InputLabel>
                                                    </Grid>
                                                    <Select id="doubleCakeFlavor" label="Cake Flavor" defaultValue="Select" onChange={handleChange('doubleCakeFlavor')}
                                                            MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                        <MenuItem value="Select" disabled>Select Cake Flavor</MenuItem>
                                                        <MenuItem value="Strawberry Crunch">Strawberry Crunch</MenuItem>
                                                        <MenuItem value="Oreo">Oreo</MenuItem>
                                                        <MenuItem value="Other">Other Flavor (Customized)</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            <div>
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
                                                        onChange = { handleChange('doubleCakeCustomFlavor') }
                                                        />)
                                                    : null                                                    
                                                }
                                            </div>
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
                                                onChange = { handleChange('doubleCakeShape') }
                                            />
                                            </div>)
                                        : null
                                    }
                                </div>
                                
                            
                            <br/><hr/><br/>
                            <img alt="" src={BreakableHeart} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('breakableHeart')} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>Breakable Heart (w/ brownie &#38; pretezel twist filling) - $30+</Typography>}
                            />
                                <div>
                                    { 
                                        values.breakableHeart === true
                                        ? (<div>
                                                <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 15, marginBottom: 10 }}>
                                                    <Grid>
                                                        <InputLabel id="breakableHeartColor">Heart Chocolate</InputLabel>
                                                    </Grid>
                                                    <Select id="breakableHeartColor" label="Heart Chocolate" defaultValue="Select" onChange={handleChange('breakableHeartColor')}
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
                                                onChange = { handleChange('breakableHeartCustom') }
                                            />
                                            </div>)
                                        : null
                                    }
                                </div>
                                
                            
                            <br/><hr/><br/>
                            <img alt="" src={CakeHeart} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={handleCheckboxChange('cakeHeart')} color="primary" /> }
                                              label={<Typography>Cake Hearts - 8 for $20</Typography>}
                                              style = {{ marginTop: 10 }}
                            />
                                <div>
                                    {
                                        values.cakeHeart === true 
                                        ? (<div>
                                            <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 5, marginBottom: 10 }}>
                                                <Grid>
                                                    <InputLabel id="cakeHeartQty">Quantity</InputLabel>
                                                </Grid>
                                                <Select id="cakeHeartQty" label="Quantity" defaultValue="Select" onChange={handleChange("cakeHeartQty")}
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
                                                    <InputLabel id="chocolateCoating">Chocolate Coating</InputLabel>
                                                </Grid>
                                                <Select id="chocolateCoating" label="Chocolate Coating" defaultValue="Select" onChange={handleChange('cakeHeartCoating')}
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
                                                                style = {{ width: "300px", marginLeft: 0, marginTop: 5 }}
                                                                rows = { 1 }
                                                                onChange = { handleChange('cakeHeartCustomCoating') }
                                                            />)
                                                        : null
                                                    }
                                                </div>
                                                
                                            </FormControl>
                                            <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginTop: 5, marginBottom: 10 }}>
                                                <Grid>
                                                    <InputLabel id="cakeFilling">Cake Filling</InputLabel>
                                                </Grid>
                                                <Select id="cakeFilling" label="Cake Filling" defaultValue="Select" onChange={handleChange("cakeHeartFilling")}
                                                        MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}>
                                                    <MenuItem value="Select" disabled>Select Cake Filling</MenuItem>
                                                    <MenuItem value="Chocolate Cake">Chocolate Cake</MenuItem>
                                                    <MenuItem value="Confetti Cake">Confetti Cake</MenuItem>
                                                </Select>
                                            </FormControl>
                                            </div>)
                                        : null
                                    }
                                </div>
                                
                        </Grid>
                    </Box>
                </React.Fragment>
            </MuiThemeProvider>
        )  
    }
}

