import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";

class ProjectTable extends Component {
  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.props.dispatch({ type: "FETCH_PROJECTS" });
  };

  handleDelete = id => {
    this.props.dispatch({ type: "DELETE_PROJECT", payload: id });
  };

  render() {
    // map of projects
    // creates row for each project with delete button
    let newRow = this.props.reduxStore.projects.map(project => {
      return (
        <Grid container justify="center" alignItems="center">
          <TableRow key={project.id} id={project.id}>
            <SnackbarContent
              message={project.name_of_project}
              action={
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => this.handleDelete(project.id)}>
                  Delete
                </Button>}/>
          </TableRow>
        </Grid>
      );
    });

    return (
      <div>
        <br />
        <Grid container justify="center" alignItems="center">
          <Typography variant="h6" color="secondary">
            <Typography component="h2" variant="display7" gutterBottom>
              Manage Projects on Portfolio
            </Typography>
          </Typography>
        </Grid>
        <Table>
          <TableHead>
            <TableRow>
              <th>Name and Action</th>
            </TableRow>
          </TableHead>
          <TableBody>{newRow}</TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(ProjectTable);
