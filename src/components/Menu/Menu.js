import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-scroll';

import { Carousel } from 'react-responsive-carousel';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import NumberCake from './menuImages/25_number_cake.jpg';
import LetterCake from './menuImages/letter_cake.jpg';
import BreakableHeart from './menuImages/breakable_heart.jpg';
import CakeHeart from './menuImages/cake_hearts.jpg';
import ChocoStraw from './menuImages/choco_straw.jpg';

const muiTheme = createMuiTheme({
    overrides: {
    }
});

const imageNames = [
    NumberCake,
    NumberCake,
    NumberCake
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuItem: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        '&:hover': {
            backgroundColor: "#ffc5cd"
        }
    },
    header: {
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    sectionHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    pageNavBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardRoot: {
        maxWidth: 300,
        marginTop: 15
    },
    cardMedia: {
        height: 300,
        width: 300
    }
  }));

export default function Menu() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={muiTheme}>
            <React.Fragment>
                <div className={classes.toolbar}>   
                    <Grid container spacing={1} style = {{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <div className={classes.header}>Yumfullness Menu</div>
                    </Grid>
                    
                    <List className={classes.pageNavBar}>
                        <ListItem button className={classes.menuItem} key="cakes" style = {{ textAlign: 'center' }}>
                            <Link activeClass="active" to="cakes" spy={true} smooth={true} offset={-70} duration={500}>
                                Cakes
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuItem} key="breakableHearts" style = {{ textAlign: 'center' }}>
                            <Link activeClass="active" to="breakableHearts" spy={true} smooth={true} offset={-70} duration={1000}>
                                Breakable Hearts
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuItem} key="sweetTreats" style = {{ textAlign: 'center' }}>
                            <Link activeClass="active" to="sweetTreats" spy={true} smooth={true} offset={-70} duration={1000}>
                                Sweet Treats
                            </Link>
                        </ListItem>
                    </List>

                    <div className="sectionContent" id="cakes" style = {{ marginTop: 10 }}>
                        <div className={classes.sectionHeader} style={{ textAlign: 'center'}}>Cakes</div>
                        <Grid container spacing={1} direction="column" display="flex" justify="center" alignItems="center">
                            <Grid item>
                                <Card className={classes.cardRoot}>
                                    <CardActionArea>
                                        <Carousel className={classes.carousel} infiniteLoop useKeyboardArrows autoPlay transitionTime="500">
                                            {
                                                imageNames.map((imageName, key) => {
                                                    return (   
                                                        <div className="carouselImg" key={key}>
                                                            <img alt="" src={imageName} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style = {{ textAlign: "center" }}>
                                                1 Number/Letter Cake
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style = {{ textAlign: "center" }}>
                                                Serves ~6-9 people
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.cardRoot}>
                                    <CardActionArea>
                                        <CardMedia className={classes.cardMedia} image={LetterCake} title="Letter Cake" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style = {{ textAlign: "center" }}>
                                                2 Numbers/Letters Cake
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style = {{ textAlign: "center" }}>
                                                Serves ~12-18 people
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>  
                    </div>
                    <div className="sectionContent" id="breakableHearts" style = {{ marginTop: 30 }}>
                        <div className={classes.sectionHeader} style={{ textAlign: 'center'}}>Breakable Hearts</div>
                        <Grid container spacing={1} direction="column" display="flex" justify="center" alignItems="center">
                            <Grid item>
                                <Card className={classes.cardRoot}>
                                    <CardActionArea>
                                        <CardMedia className={classes.cardMedia} image={BreakableHeart} title="Breakable Heart" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style = {{ textAlign: "center" }}>
                                                Breakable Heart
                                            </Typography>
                                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                                Custom breakable heart!
                                            </Typography> */}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="sectionContent" id="sweetTreats" style = {{ marginTop: 30 }}>
                        <div className={classes.sectionHeader} style={{ textAlign: 'center'}}>Sweet Treats</div>
                        <Grid container spacing={1} direction="column" display="flex" justify="center" alignItems="center">
                            <Grid item>
                                <Card className={classes.cardRoot}>
                                    <CardActionArea>
                                        <CardMedia className={classes.cardMedia} image={CakeHeart} title="Cake Hearts" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style = {{ textAlign: "center" }}>
                                                Cake Hearts
                                            </Typography>
                                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                                Custom cake hearts!
                                            </Typography> */}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.cardRoot}>
                                    <CardActionArea>
                                        <CardMedia className={classes.cardMedia} image={ChocoStraw} title="Chocolate Covered Strawberries" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style = {{ textAlign: "center" }}>
                                                Chocolate Covered Strawberries
                                            </Typography>
                                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                                Custom chocolate covered strawberries!
                                            </Typography> */}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>   
                        </Grid>  
                    </div>

                    <Grid container spacing={1} style = {{ marginTop: 20, marginBottom: 50, justifyContent:'center', alignItems: 'center' }}>
                        <Button href = "/" label = "Submit" variant = "contained" color = "primary" size = "medium"
                                style = {{ marginTop: 10, backgroundColor: "#1976d2", color: "#ffffff" }}>
                            Return Home
                        </Button>
                    </Grid>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )
}
