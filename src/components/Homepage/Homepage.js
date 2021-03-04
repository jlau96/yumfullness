import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: process.env.PUBLIC_URL + '/galleryImages/image1.jpg',
        thumbnail: process.env.PUBLIC_URL + '/galleryImages/image1.jpg'  
    },
    {
        original: process.env.PUBLIC_URL + '/galleryImages/image2.jpg',
        thumbnail: process.env.PUBLIC_URL + '/galleryImages/image2.jpg',
    },
    {
        original: process.env.PUBLIC_URL + '/galleryImages/image3.jpg',
        thumbnail: process.env.PUBLIC_URL + '/galleryImages/image3.jpg',
    }
]

export class Homepage extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid container spacing={1} style = {{ marginTop: 100, justifyContent:'center', alignItems: 'center' }}>
                        <h1>Homepage</h1>
                    </Grid>
                    <Grid container spacing={1} style = {{ marginTop: 20, marginBottom: 50, justifyContent:'center', alignItems: 'center' }}>
                        <ImageGallery 
                            items={ images }
                            showPlayButton = "false"
                            autoPlay = "true"
                            slideInterval = "7000"
                        />
                    </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Homepage