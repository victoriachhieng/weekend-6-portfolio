import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNavBar from '../AdminNavbar/AdminNavBar';

class Admin extends Component {

    state = {
        newProject: {
            name: '',
            description: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: ''
        }
    }
    handleChangeFor = (propertyName) => (event) => {
        console.log('in handleChangeFor')
        this.setState({
            newProject: {
                ...this.state.newProject,
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleClick', this.state);
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
    }

    render() {
        return (
            <div>
                <AdminNavBar/>
                <h3>Add New Project To Portfolio</h3>
                    <form>
                        <input type="text" placeholder="Name" onChange={this.handleChangeFor('name')} />
                        <input type="text" placeholder="Website URL" onChange={this.handleChangeFor('website')} />
                        <input type="text" placeholder="Github URL" onChange={this.handleChangeFor('github')} />
                        <br/>
                        <br/>
                        <input type="date" placeholder="Completion Date" onChange={this.handleChangeFor('date_completed')} />
                        <select onChange={this.handleChangeFor('tag_id')}>
                            <option value="">Select an option</option>
                            <option value="1">React</option>
                            <option value="2">jQuery</option>
                            <option value="3">Node</option>
                            <option value="4">SQL</option>
                            <option value="5">Redux</option>
                            <option value="6">HTML</option>
                        </select>
                        <br/>
                        <br/>
                        <input type="text" placeholder="Description" onChange={this.handleChangeFor('description')} />
                       <button onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);