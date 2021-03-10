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
                            <FormControlLabel control={ <Checkbox onChange={null} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>1 Number/Letter Cake <br/>(or any shape) - $75+</Typography>}
                            />
                                <RadioGroup style = {{ marginLeft: 35 }}/*aria-label="transferMethod" name="transferMethod" onChange={handleChange('transferMethod')} defaultValue="Pick-Up"*/>
                                    <FormControlLabel value="Strawberry Crunch" control={<Radio color="primary"/>} label="Starberry Crunch" />
                                    <FormControlLabel value="Oreo" control={<Radio color="primary"/>} label="Oreo" style={{marginTop: -10}} />
                                    <FormControlLabel value="Other" control={<Radio color="primary"/>} label="Other (Customized)" style={{marginTop: -10}}/>
                                </RadioGroup>
                                <div>
                                    {
                                        <TextField 
                                            placeholder = "Enter Message"
                                            required
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "225px", marginLeft: 60, marginTop: -2 }}
                                            multiline
                                            rows = { 3 }
                                            // onChange = { handleChange('message') }
                                        />
                                    }
                                </div>
                            
                            <br/><hr/><br/>
                            <img alt="" src={DoubleNumberCake} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={null} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>2 Number/Letter Cake <br/>(or any shape) - $100+</Typography>}
                            />
                                <RadioGroup style = {{ marginLeft: 35 }}/*aria-label="transferMethod" name="transferMethod" onChange={handleChange('transferMethod')} defaultValue="Pick-Up"*/>
                                    <FormControlLabel value="Strawberry Crunch" control={<Radio color="primary"/>} label="Starberry Crunch" />
                                    <FormControlLabel value="Oreo" control={<Radio color="primary"/>} label="Oreo" style={{marginTop: -10}} />
                                    <FormControlLabel value="Other" control={<Radio color="primary"/>} label="Other (Customized)" style={{marginTop: -10}}/>
                                </RadioGroup>
                                <div>
                                    {
                                        <TextField 
                                            placeholder = "Enter Message"
                                            required
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "225px", marginLeft: 60, marginTop: -2 }}
                                            multiline
                                            rows = { 3 }
                                            // onChange = { handleChange('message') }
                                        />
                                    }
                                </div>
                            
                            <br/><hr/><br/>
                            <img alt="" src={BreakableHeart} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={null} color="primary" /> }
                                              label={<Typography style = {{ marginTop: 20 }}>Breakable Heart (w/ brownie &#38; pretezel twist filling) - $30+</Typography>}
                            />
                                <RadioGroup style = {{ marginLeft: 35 }}/*aria-label="transferMethod" name="transferMethod" onChange={handleChange('transferMethod')} defaultValue="Pick-Up"*/>
                                    <FormControlLabel value="Milk Chocolate" control={<Radio color="primary"/>} label="Milk Chocolate" />
                                    <FormControlLabel value="White Chocolate" control={<Radio color="primary"/>} label="White Chocolate" style={{marginTop: -10}} />
                                    <FormControlLabel value="Other Color/Customization" control={<Radio color="primary"/>} label="Other Color/Customization" style={{marginTop: -10}}/>
                                    <FormControlLabel value="Other Filling" control={<Radio color="primary"/>} label="Other Filling" style={{marginTop: -10}}/>
                                </RadioGroup>
                                <div>
                                    {
                                        <TextField 
                                            placeholder = "Enter Message"
                                            required
                                            margin = "normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant = "outlined"
                                            style = {{ width: "225px", marginLeft: 60, marginTop: -2 }}
                                            multiline
                                            rows = { 3 }
                                            // onChange = { handleChange('message') }
                                        />
                                    }
                                </div>
                            
                            <br/><hr/><br/>
                            <img alt="" src={CakeHeart} style = {{ height: '225px', width: '225px', marginTop: 10, marginLeft: 30, marginBottom: -10, borderRadius: '25px' }}/>
                            <FormControlLabel control={ <Checkbox onChange={null} color="primary" /> }
                                              label={<Typography>Cake Hearts - 8 for $20</Typography>}
                                              style = {{ marginTop: 10 }}
                            />
                                <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginBottom: 10 }}>
                                    <Grid>
                                        <InputLabel id="chocolateCoating">Chocolate Coating</InputLabel>
                                    </Grid>
                                    <Select /*id="pickUpTime" label="Pick-Up Time Frame" defaultValue="Select" onChange={handleChange('pickUpTime')}*/
                                            /*MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}*/>
                                        <MenuItem value="Select" disabled>Select Chocolate Coating</MenuItem>
                                        <MenuItem value="Milk Chocolate">Milk Chocolate</MenuItem>
                                        <MenuItem value="White Chocolate">White Chocolate</MenuItem>
                                        <MenuItem value="Other Color">Other Color</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="outlined" style = {{ marginLeft: 25, width: 275, marginBottom: 10 }}>
                                    <Grid>
                                        <InputLabel id="cakeFilling">Cake Filling</InputLabel>
                                    </Grid>
                                    <Select /*id="pickUpTime" label="Pick-Up Time Frame" defaultValue="Select" onChange={handleChange('pickUpTime')}*/
                                            /*MenuProps={{ anchorOrigin: { horizontal: 'left', vertical: "bottom" }, getContentAnchorEl: null }}*/>
                                        <MenuItem value="Select" disabled>Select Cake Filling</MenuItem>
                                        <MenuItem value="Chocolate Cake">Chocolate Cake</MenuItem>
                                        <MenuItem value="Confetti Cake">Confetti Cake</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>
                    </Box>
                </React.Fragment>
            </MuiThemeProvider>
        )  
    }
}

