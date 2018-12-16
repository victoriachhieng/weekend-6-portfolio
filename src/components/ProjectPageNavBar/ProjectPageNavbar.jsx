import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProjectPageNavBar extends Component {

    render(){
        return(
            <div>
                {/* <button onClick={this.handleClick}>Admin</button> */}
                <h1>Portfolio</h1>
            </div>
        )
    }
}

export default connect()(ProjectPageNavBar);