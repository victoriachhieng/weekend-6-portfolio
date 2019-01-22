import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

class ProjectList extends Component {
  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    this.props.dispatch({ type: "FETCH_PROJECTS" });
  }

  render() {
    let newCard = this.props.reduxStore.projects.map(project => {
      return <Grid container justify="center" item xs={6}>
          <Card key={project.id} style={cardStyle}>
            <center>
              <h4>{project.name_of_project}</h4>
              <img src={project.thumbnail} width="450" alt="project" />
              <p>{project.description}</p>
              <p>
                <a href={project.website}>{project.website}</a>
              </p>
              <p>
                <a href={project.github}>{project.github}</a>
              </p>
            </center>
          </Card>
        </Grid>;
    });
    return <div>
        <Grid container justify="center" alignItems="center">
          <Typography variant="h6" color="secondary">
            <Typography component="h2" variant="display2" gutterBottom>
              Projects
            </Typography>
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Grid container item xs={12}>
            {newCard}
          </Grid>
        </Grid>
      </div>;
  }
}

const cardStyle = {
  minWidth: "400px",
  fontFamily: "Arial, Helvetica, sans - serif",
  margin: "20px",
  textAlign: "center",
  border: "1px solid #000000",
};

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(ProjectList);
