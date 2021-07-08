import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from '../services/firebase';
import todoReducer from './reducer';
const todoStore = createStore(todoReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirestore })),
  reduxFirestore(firebase)
))

export default todoStore