import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
        main: '#212121',
    }
  }
});

class ProjectPageNavBar extends Component {
    
    handleClick = () => {
        this.props.history.push('/admin');
        alert('You will be directed to the Admin Section');
    }

    render(){
        return <MuiThemeProvider theme={theme}>
            <AppBar className="navbar" position="static" color="primary">
              <Toolbar>
                <Typography variant="h6" color="secondary">
                  <Typography component="h2" variant="display4" gutterBottom>
                    Portfolio
                  </Typography>
                  <Button size="small" variant="contained" color="default" onClick={this.handleClick}>
                    Administrator Page
                  </Button>
                </Typography>
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>;
    }
}

export default connect()(withRouter(ProjectPageNavBar));