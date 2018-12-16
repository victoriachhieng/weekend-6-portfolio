import React, {Component} from 'react';

class ProjectPageNavBar extends Component {

    handleClick = () => {
        this.props.history.push('/admin')
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Admin</button>
                <h1>Portfolio</h1>
            </div>
        )
    }
}


export default ProjectPageNavBar;