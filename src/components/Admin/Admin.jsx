import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNavBar from '../AdminNavbar/AdminNavBar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

class Admin extends Component {
  state = {
    newProject: {
      name: "",
      description: "",
      website: "",
      github: "",
      date_completed: "",
      tag_id: ""
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
    console.log("in handleClick", this.state.newProject);
    this.props.dispatch({ type: "ADD_PROJECT", payload: this.state.newProject});
    this.setState({
        newProject: ''
    })
    alert('You have successfully submited your project!')
  };

  render() {
    return <div>
        <AdminNavBar />
        <br/>
        <br/>
        <Typography component="h2" variant="headline" gutterBottom>
          Add New Project To Portfolio
        </Typography>
        <form>
          <TextField id="outlined-name" label="Name" value={this.state.name} onChange={this.handleChangeFor("name")} margin="normal" variant="outlined" />
          <TextField id="outlined-name" label="Website" value={this.state.website} onChange={this.handleChangeFor("website")} margin="normal" variant="outlined" />
          <TextField id="outlined-name" label="Github URL" value={this.state.github} onChange={this.handleChangeFor("github")} margin="normal" variant="outlined" />
          <br />
          <br />
          <TextField id="outlined-name" type="date" onChange={this.handleChangeFor("date_completed")} margin="normal" variant="outlined" />
          <TextField select variant="outlined" label="With Select" value={this.state.tag_id} onChange={this.handleChangeFor("tag_id")} InputProps={{ startAdornment: <InputAdornment position="start">
                  Select an option
                </InputAdornment> }} />

          <select size="large" onChange={this.handleChangeFor("tag_id")}>
            <option value="">Select an option</option>
            <option value="1">React</option>
            <option value="2">jQuery</option>
            <option value="3">Node</option>
            <option value="4">SQL</option>
            <option value="5">Redux</option>
            <option value="6">HTML</option>
          </select>
          <br />
          <br />
          <TextField id="filled-multiline-flexible" multiline rowsMax="4" label="Description" value={this.state.description} onChange={this.handleChangeFor("description")} margin="normal" variant="outlined" />
          <br />
          <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
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