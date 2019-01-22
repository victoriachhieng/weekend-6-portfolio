import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNavBar from '../AdminNavbar/AdminNavBar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectTable from '../ProjectTable/ProjectTable'; 
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    primary: { main: "#2196f3" }
  }
});


class Admin extends Component {

  state = {
    newProject: {
      name_of_project: '',
      description: '',
      website: '',
      github: '',
      date_completed: '',
      tag_id: '',
      thumbnail: ''
    }
  };

  handleChangeFor = propertyName => event => {
    console.log("in handleChangeFor");
    this.setState({
      newProject: {
        ...this.state.newProject,
        [propertyName]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('in handleSubmit', this.state.newProject);
    this.props.dispatch({ type: "ADD_PROJECT", payload: this.state.newProject});
    this.setState({
        newProject: ''
    })
    alert('You have successfully submited your project!')
  };


  render() {
    return <div>
        <AdminNavBar />
        <br />
        <br />
        <Grid container justify="center" alignItems="center">
          <Typography component="h2" variant="headline" gutterBottom>
            Add New Project To Portfolio
          </Typography>
        </Grid>
        <MuiThemeProvider theme={theme}>
          <form>
            <center>
              <br />
              <b><p style={fontStyle}>Select a Program Language</p></b>
              <select onChange={this.handleChangeFor("tag_id")}>
                <option value="">Project Program Language</option>
                <option value="1">React</option>
                <option value="2">jQuery</option>
                <option value="3">Node</option>
                <option value="4">SQL</option>
                <option value="5">Redux</option>
                <option value="6">HTML</option>
              </select>
              <br />
              <br />
            <TextField style={inputStyle} helperText="Name of Project" value={this.state.name_of_project} onChange={this.handleChangeFor("name_of_project")} margin="normal" variant="outlined" />
            <TextField style={inputStyle} helperText="Image URL" value={this.state.thumbnail} onChange={this.handleChangeFor("thumbnail")} margin="normal" variant="outlined" />
              <br />
              <br />
            <TextField style={inputStyle} helperText="Website URL" value={this.state.website} onChange={this.handleChangeFor("website")} margin="normal" variant="outlined" />
            <TextField style={inputStyle} helperText="GitHub URL (optional)" value={this.state.github} onChange={this.handleChangeFor("github")} margin="normal" variant="outlined" />
              <br />
              <br />
            <TextField style={inputStyle} helperText="Date of Project Completed"  onChange={this.handleChangeFor("date_completed")} margin="normal" variant="outlined" type="date" />
            <TextField style={inputStyle} id="filled-multiline-flexible" multiline rowsMax="4" helperText="Description" value={this.state.description} onChange={this.handleChangeFor("description")} margin="normal" variant="outlined" />
              <br />
              <br />
              <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </center>
            <ProjectTable />
          </form>
        </MuiThemeProvider>
      </div>;
  }
}

const inputStyle = {
  margin: '10px'
}

const fontStyle = {
  color: "#12456f"
};

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);