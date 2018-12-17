import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

class ProjectList extends Component {
  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    this.props.dispatch({ type: "FETCH_PROJECTS" });
  }

  handleDelete(project) {
    this.props.dispatch({ type: "DELETE_PROJECT", payload: project.id });
    alert("Project deleted!");
  }

  render() {
    let projectList = this.props.reduxStore.projects.map(projects => {
      console.log(projects);
      return (
        <div key={projects.id}>
          <Card>
              <CardActionArea>
                  <CardMedia
                      className="media"
                      image={projects.thumbnail}
                      title="pizza"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {projects.name}
                      </Typography>
                      <Typography gutterBottom component="p">
                          <a href={projects.website}>Website</a>
                      </Typography>
                      <Typography component="p">
                          <a href={projects.github}>Github</a>
                      </Typography>
                      <Typography component="p">
                          {projects.description}
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => this.handleDelete(projects)}>
                      Delete
              </Button>
              </CardActions>
          </Card>
          </div>
      );
    });
    return <div>
        <Typography component="h2" variant="headline" gutterBottom>
          Projects
        </Typography>
        <ul>{projectList}</ul>
      </div>;
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(ProjectList);
