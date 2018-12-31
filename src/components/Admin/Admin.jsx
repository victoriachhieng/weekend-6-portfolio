import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNavBar from '../AdminNavbar/AdminNavBar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectTable from '../ProjectTable/ProjectTable';

class Admin extends Component {

  state = {
    newProject: {
      name: '',
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
        <form>
          <Grid container justify="center" alignItems="center">
            <select onChange={this.handleChangeFor('tag_id')}>
              <option value="">Project Program Language</option>
              <option value="1">React</option>
              <option value="2">jQuery</option>
              <option value="3">Node</option>
              <option value="4">SQL</option>
              <option value="5">Redux</option>
              <option value="6">HTML</option>
            </select>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField id="outlined-name" label="Name of Project" value={this.state.name} onChange={this.handleChangeFor('name')} margin="normal" variant="outlined" />
            <TextField id="outlined-name" label="Image URL" value={this.state.thumbnail} onChange={this.handleChangeFor("thumbnail")} margin="normal" variant="outlined" />
            <TextField id="outlined-name" label="Website URL" value={this.state.website} onChange={this.handleChangeFor("website")} margin="normal" variant="outlined" />
            <TextField id="outlined-name" label="Github URL (optional)" value={this.state.github} onChange={this.handleChangeFor("github")} margin="normal" variant="outlined" />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField id="outlined-name" type="Date" onChange={this.handleChangeFor("date_completed")} margin="normal" variant="outlined" />
            <TextField id="filled-multiline-flexible" multiline rowsMax="4" label="Description" value={this.state.description} onChange={this.handleChangeFor("description")} margin="normal" variant="outlined" />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Grid>
          <ProjectTable />
        </form>
      </div>;
  }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);