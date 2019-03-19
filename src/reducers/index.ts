import { combineReducers } from 'redux';
import canvasReducer from './canvas-reducer';

export const reducers = combineReducers({
    canvas: canvasReducer
});
