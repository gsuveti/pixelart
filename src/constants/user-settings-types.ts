import { Action } from 'redux';

export const CHANGE_COLOR = "CHANGE_COLOR";
export const CHANGE_COLOR_START = "CHANGE_COLOR_START";

export interface ChangeColorAction extends Action<string> {
    type: typeof CHANGE_COLOR
    payload: {
        color: string
    }
}
