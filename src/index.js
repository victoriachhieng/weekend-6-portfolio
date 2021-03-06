import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {call, takeEvery, put as dispatch} from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fecthProjects);
    yield takeEvery('ADD_PROJECT', postProjects);
    yield takeEvery('DELETE_PROJECT', deleteProjects);
}

// generator with axios GET call to get DB from projects
function* fecthProjects() {
    try {
        console.log('in fetchProjects triggered!');
        const fetchResponse = yield call(axios.get, '/projects');
        yield dispatch({type: 'SET_PROJECTS', payload: fetchResponse.data});
    } catch (error) {
        console.log('error in fetchProject', error);
    }
}

// generator with axios POST 
function* postProjects(action) {
    try {
        console.log('in postProjects');
        yield call(axios.post, '/projects', action.payload);
        yield dispatch({ type: 'FETCH_PROJECTS'})
    } catch (error) {
        console.log('error in postProjects', error);
    }
}


// generator with axios DELETE
function* deleteProjects(action) {
    try {
        console.log("in deleteProject");
        yield call(axios.delete, `/projects/${action.payload}`);
        yield dispatch({ type: 'FETCH_PROJECTS' });
    } catch (error) {
        console.log(error);
        yield alert('error in deletingProject', error)
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
