import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
        MuiButtonBase: {
            color: '#1976d2'
        },
        MuiInputBase: {
            root: {
                height: '50px',
                width: '275px'
            },
            multiline: {
                height: '75px',
                width: '225px'
            }
        }
    }
});

export class MenuForm extends Component {    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

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
                                                <RadioGroup style = {{ marginLeft: 35 }} aria-label="singleCakeType" name="singleCakeType" onChange={handleChange('singleCakeType')}>
                                                    <FormControlLabel value="Strawberry Crunch" control={<Radio color="primary"/>} label="Starberry Crunch" />
                                                    <FormControlLabel value="Oreo" control={<Radio color="primary"/>} label="Oreo" style={{marginTop: -10}} />
                                                    <FormControlLabel value="Other" control={<Radio color="primary"/>} label="Other (Customized)" style={{marginTop: -10}}/>
                                                </RadioGroup>
                                            <div>
                                                {
                                                    values.singleCakeType === 'Other'
                                                    ? (<TextField 
                                                        placeholder = "Enter customization"
                                                        required
                                                        margin = "normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant = "outlined"
                                                        style = {{ width: "225px", marginLeft: 60, marginTop: -2 }}
                                                        multiline
                                                        rows = { 3 }
                                                        onChange = { handleChange('singleCakeCustom') }
                                                    />)
                                                    : null
                                                }
                                            </div>
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
                                            <RadioGroup style = {{ marginLeft: 35 }} aria-label="doubleCakeType" name="doubleCakeType" onChange={handleChange('doubleCakeType')}>
                                                <FormControlLabel value="Strawberry Crunch" control={<Radio color="primary"/>} label="Starberry Crunch" />
                                                <FormControlLabel value="Oreo" control={<Radio color="primary"/>} label="Oreo" style={{marginTop: -10}} />
                                                <FormControlLabel value="Other" control={<Radio color="primary"/>} label="Other (Customized)" style={{marginTop: -10}}/>
                                            </RadioGroup>
                                            <div>
                                                {
                                                    values.doubleCakeType === 'Other'
                                                    ? (<TextField 
                                                        placeholder = "Enter customization"
                                                        required
                                                        margin = "normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant = "outlined"
                                                        style = {{ width: "225px", marginLeft: 60, marginTop: -2 }}
                                                        multiline
                                                        rows = { 3 }
                                                        onChange = { handleChange('doubleCakeCustom') }
                                                    />)
                                                    : null                                                    
                                                }
                                            </div>
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
                                            <RadioGroup style = {{ marginLeft: 35 }} aria-label="breakableHeartType" name="breakableHeartType" onChange={handleChange('breakableHeartType')}>
                                                <FormControlLabel value="Milk Chocolate" control={<Radio color="primary"/>} label="Milk Chocolate" />
                                                <FormControlLabel value="White Chocolate" control={<Radio color="primary"/>} label="White Chocolate" style={{marginTop: -10}} />
                                                <FormControlLabel value="Other" control={<Radio color="primary"/>} label="Other (Customized)" style={{marginTop: -10}}/>
                                            </RadioGroup>
                                            <div>
                                                {
                                                    values.breakableHeartType === 'Other'
                                                    ? (<TextField 
                                                            placeholder = "Enter other color, filling, or customization"
                                                            required
                                                            margin = "normal"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            variant = "outlined"
                                                            style = {{ width: "225px", marginLeft: 60, marginTop: -2 }}
                                                            multiline
                                                            rows = { 3 }
                                                            onChange = { handleChange('breakableHeartCustom') }
                                                        />)
                                                    : null
                                                }
                                            </div>
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

