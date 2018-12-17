import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProjectList extends Component {
  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    this.props.dispatch({ type: "FETCH_PROJECTS" });
  }

  handleDelete(project) {
    this.props.dispatch({ type: "DELETE_PROJECT", payload: project.id });
  }

  render() {
    let projectList = this.props.reduxStore.projects.map((projects) => {
        console.log(projects);
      return (
        <ul key={projects.id}>
          <p>{projects.name}</p>
          <p>{projects.description}</p>
          <p>{projects.thumbnail}</p>
          <p>{projects.website}</p>
          <p><a href={projects.github}>Github</a></p>
          <button onClick={() => this.handleDelete(projects)}>DELETE</button>
        </ul>
      );
    });
    return (
      <div>
        <h1>Project list will go here:</h1>
        <ul>{projectList}</ul>
        <pre>{JSON.stringify(this.props.reduxStore)}</pre>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    }
}


export default connect(mapStateToProps)(ProjectList);