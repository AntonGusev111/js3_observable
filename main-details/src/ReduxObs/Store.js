import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import servicesReducer from './reducers/servicesReducer';
import singleReducer from './reducers/singleReducer';
import {getServicesEpic, getSingleEpic} from "./epics/index"


const reducer = combineReducers({
    services: servicesReducer,
    single:singleReducer,
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    getServicesEpic,
    getSingleEpic,
  );

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
  ));
  
  epicMiddleware.run(epic);
  
  export default store;