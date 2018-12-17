import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProjectList from '../ProjectList/ProjectList';
import ProjectPageNavBar from '../ProjectPageNavBar/ProjectPageNavbar';

class ProjectPage extends Component {

    componentDidMount(){
        this.getProjects();
    }

    getProjects(){
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    }

    
    render(){
        return (
            <div>
                <ProjectPageNavBar/>
                <h1>Victoria Chhieng</h1>
                <ProjectList/>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return{
        reduxStore
    }
}

export default connect(mapStateToProps)(ProjectPage);