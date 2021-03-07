import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-responsive-carousel';
import AboutMe from './aboutMe.jpg';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Homepage.css';

const imageNames = [
    'assets/galleryImages/01_urHawt_heart.jpg',
    "assets/galleryImages/02_25_cake.jpg",
    "assets/galleryImages/03_ily_cake_hearts.jpg",
    "assets/galleryImages/04_ily_choco_straw.jpg",
    "assets/galleryImages/05_white_heart_wrap.jpg",
    "assets/galleryImages/06_white_heart.jpg",
    "assets/galleryImages/07_congrats_cake_hearts.jpg",
    "assets/galleryImages/08_e_cake_unwrap.jpg",
    "assets/galleryImages/09_e_wrap_unwrap.jpg",
    "assets/galleryImages/10_sis_heart.jpg",
    "assets/galleryImages/11_cake_heart_pretzel.jpg",
    "assets/galleryImages/12_choco_straw.jpg",
    "assets/galleryImages/13_7_yr_heart.jpg",
    "assets/galleryImages/14_coco_bombs.jpg",
    "assets/galleryImages/15_plain_heart.jpg",
    "assets/galleryImages/16_cake_heart.jpg",
    "assets/galleryImages/17_12_yr_heart.jpg"
]

const useStyles = makeStyles((theme) => ({
    carousel: {
        width:"1000px",
        "@media (max-width: 900px)": {
            width: "500px"
        }
    }
}));

export default function Homepage() {
    const classes = useStyles();

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <Grid container spacing={1} style = {{ marginTop: 90, justifyContent:'center', alignItems: 'center' }}>
                    <h1>Homepage</h1>
                </Grid>
                <Grid container spacing={1} style = {{ marginTop: 20, marginBottom: 20, justifyContent:'center', alignItems: 'center' }}>
                    
                    <Carousel className={classes.carousel} infiniteLoop useKeyboardArrows autoPlay>
                        {   
                            imageNames.map((imageName) => {
                                return (   
                                    <div className="carouselImg">
                                        <img alt="" src={imageName} />
                                        <p>Legend</p>
                                    </div>
                                )
                            })
                            
                        }
                    </Carousel>

                </Grid>
                <hr/>
                <Grid container spacing={3} direction="row" style = {{ marginTop: 20, marginBottom: 50, justifyContent:'center', alignItems: 'center' }}>
                    <Grid container item sm alignItems="center" justify="center" direction="column">
                        <h1 style = {{ marginBottom: 10, textAlign: "center"}}>About Me</h1>
                        <img src={AboutMe} alt="aboutMe" style = {{ width: 250, height: 320 }}/>
                    </Grid>
                    <Grid container item sm style = {{ marginLeft: 20, marginRight: 20 }}>
                        <p style = {{ fontSize: 18 }}>Welcome to my page @yumfullness!</p>
                        <br/><br/>
                        <p style = {{ fontSize: 18 }}>
                            My name is Regan and I am the face behind all the treats. I have always loved baking and creating beautiful desserts, 
                            and to me nothing feels more rewarding than making someone's birthday, anniversary, gender reveal, etc. unique and memorable. 
                            Thank you taking interest in my page, and thank you to all my clients for trusting me to make your celebration so special. 
                            I hope I am able to bring the same joy to your special days as creating your treats makes me. Have a great day and please 
                            reach out with any inquiries!
                        </p>
                    </Grid>
                </Grid>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

// function importAll(r) {
//     return r.keys().map(r);
// }

// function getGalleryImages() {
//     var fileNames = [];
//     var imageNames = [];

//     // get list of files
//     var files = importAll(require.context('./galleryImages/', false));

//     // get filenames from files
//     Object.keys(files).forEach((key) => {
//         fileNames.push(files[key].default);
//     });

//     // transform filenames
//     fileNames.forEach(element => {
//         var strings = element.replace('/static/media/','').split('.');
//         imageNames.push(strings[0] + '.jpg');
//     });   
//     imageNames = imageNames.sort();
    
//     // create images array for image gallery
//     var images = imageNames.map(function (name) {
//         return {
//             original: './galleryImages/' + name,
//             thumbnail: './galleryImages/' + name
//         }
//     })
//     return images;
// }

// const images = imageNames.map(name => {
//     return {
//         original: './galleryImages/' + name,
//         thumbnail: './galleryImages/' + name
//     }
// })