import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProjectList from '../ProjectList/ProjectList';
import ProjectPageNavBar from '../ProjectPageNavBar/ProjectPageNavbar';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

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
            <br />
            <br />
            <Grid container justify="center" alignItems="center">
              <div class="container">
                <img src="/images/IMG_8239.jpg" alt="Avatar" class="image" />
                <div class="overlay">
                  <div class="text">Well, Hello World!</div>
                </div>
              </div>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <Avatar>V</Avatar>
              <Avatar>I</Avatar>
              <Avatar>C</Avatar>
              <Avatar>T</Avatar>
              <Avatar>O</Avatar>
              <Avatar>R</Avatar>
              <Avatar>I</Avatar>
              <Avatar>A</Avatar>
              <Avatar />
              <Avatar>C</Avatar>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
              <Avatar>I</Avatar>
              <Avatar>E</Avatar>
              <Avatar>N</Avatar>
              <Avatar>G</Avatar>
            </Grid>
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