import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import AboutMe from './aboutMe.jpg';
import { ImageNames } from './ImageNames';
import "react-image-gallery/styles/css/image-gallery.css";
import './Homepage.css';

const imageNames = [
    "01_urHawt_heart.jpg",
    "02_25_cake.jpg",
    "03_ily_cake_hearts.jpg",
    "04_ily_choco_straw.jpg",
    "05_white_heart_wrap.jpg",
    "06_white_heart.jpg",
    "07_congrats_cake_hearts.jpg",
    "08_e_cake_unwrap.jpg",
    "09_e_wrap_unwrap.jpg",
    "10_sis_heart.jpg",
    "11_cake_heart_pretzel.jpg",
    "12_choco_straw.jpg",
    "13_7_yr_heart.jpg",
    "14_coco_bombs.jpg",
    "15_plain_heart.jpg",
    "16_cake_heart.jpg",
    "17_12_yr_heart.jpg"
]

const images = imageNames.map(name => {
    return {
        original: process.env.PUBLIC_URL + '/galleryImages/' + name,
        thumbnail: process.env.PUBLIC_URL + '/galleryImages/' + name
    }
})

export class Homepage extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 90, justifyContent:'center', alignItems: 'center' }}>
                        <h1>Homepage</h1>
                    </Grid>
                    <Grid container spacing={1} style = {{ marginTop: 20, marginBottom: 20, justifyContent:'center', alignItems: 'center' }}>
                        <ImageGallery 
                            items={ images }
                            showPlayButton = { false }
                            autoPlay = { true }
                            slideInterval = { 7000 }
                        />
                    </Grid>
                    <hr/>
                    <Grid container spacing={3} direction="row" style = {{ marginTop: 20, marginBottom: 50, justifyContent:'center', alignItems: 'center' }}>
                        <Grid container item sm alignItems="center" justify="center">
                            <h1 style = {{ textAlign: "center"}}>About Me</h1>
                            <img src={AboutMe} alt="aboutMe" style = {{ width: 250, height: 320 }}/>
                        </Grid>
                        <Grid container item sm style = {{ marginLeft: 20, marginRight: 20 }}>
                            <p style = {{ fontSize: 18 }}>Welcome to my page @yumfullness!</p>
                            <br/>
                            <p style = {{ fontSize: 18 }}
                                >My name is Regan and I am the face behind all the treats. I have always loved baking and creating
                                beautiful desserts, and to me nothing feels more rewarding than making someone's birthday,
                                anniversary, gender reveal, etc. unique and memorable. Thank you taking interest in my page, and
                                thank you to all my clients for trusting me to make your celebration so special. I hope I am able to bring
                                the same joy to your special days as creating your treats makes me. Have a great day and please
                                reach out with any inquiries!
                            </p>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Homepage

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