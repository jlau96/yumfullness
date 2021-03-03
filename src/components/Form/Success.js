import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1 style = {{ paddingTop: 25, textAlign: "center" }}>Thank you for your submission</h1>
                    <p style = {{ paddingTop: 10, textAlign: "center" }}>You will get an email response ASAP</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
