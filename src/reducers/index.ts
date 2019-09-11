import { combineReducers } from 'redux';
import pixelArtReducer from './pixelart-reducer';
import userSettingsReducer from './user-settings-reducer';

export const reducers = combineReducers({
    canvas: pixelArtReducer,
    userSettings: userSettingsReducer
});
