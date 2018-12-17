import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProjectList from '../ProjectList/ProjectList';
import ProjectPageNavBar from '../ProjectPageNavBar/ProjectPageNavbar';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 500,
        height: 500,
    },
};

class ProjectPage extends Component {

    componentDidMount(){
        this.getProjects();
    }

    getProjects(){
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    }

    
    render(){
        return <div>
            <ProjectPageNavBar />
            <br/>
            <br/>
            <Avatar alt="Victoria Chhieng" src="/images/IMG_8239.jpg" />
            <Typography component="h2" variant="headline" gutterBottom>
              Victoria Chhieng
            </Typography>
            <ProjectList />
          </div>;
    }
}

const mapStateToProps = (reduxStore) => {
    return{
        reduxStore
    }
}

export default connect(mapStateToProps)(ProjectPage);