import { action } from 'typesafe-actions';
import { CHANGE_COLOR } from '../constants/user-settings-types';

export const changeColor = (color: string) =>
    action(CHANGE_COLOR, {
        color: color
    });

