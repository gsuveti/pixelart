import { UserSettingsState } from '../store';
import { CHANGE_COLOR, CHANGE_COLOR_START } from '../constants/user-settings-types';
import { AnyAction } from 'redux';


const userSettingsReducer = (
    state: UserSettingsState = {
        colors: []
    },
    action: AnyAction
) => {
    switch (action.type) {
        case CHANGE_COLOR: {
            console.log(action.payload);
            return state;
        }
        case CHANGE_COLOR_START: {
            console.log(CHANGE_COLOR_START, action.payload);
            return state;
        }
        default:
            return state;
    }
};
export default userSettingsReducer;
