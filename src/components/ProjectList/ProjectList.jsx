import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProjectList extends Component {

    componentDidMount() {
        this.getProjects();
    }

    getProjects() {
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    }

    render() {
          let projectList = this.props.reduxStore.projects.map((project) => {
            return <div key={project.id}>
                    <p>{project.name_of_project}</p>
                    <p>{project.description}</p>
                    <p>{project.thumbnail}</p>
                    <p><a href={project.github}>Github</a></p>
                </div>
        })
        return (
            <div>
                <h1>Project list will go here:</h1>
                <ul>
                {projectList}
                </ul>
                <pre>{JSON.stringify(this.props.reduxStore)}</pre>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    }
}


export default connect(mapStateToProps)(ProjectList);