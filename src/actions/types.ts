import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const INCREASE_LENGTH = "INCREASE_LENGTH";
export const INCREASE_WIDTH = "INCREASE_WIDTH";
export const PAINT_PIXEL = "PAINT_PIXEL";

export interface IncreaseLengthAction extends Action<string> {
    type: typeof INCREASE_LENGTH
    payload: {
        value: number
    }
}

export interface IncreaseWidthAction extends Action<string> {
    type: typeof INCREASE_WIDTH
    payload: {
        value: number
    }
}

export interface PaintObject {
    color: string | undefined,
    position: { x: number, y: number }
}

export interface PaintPixelAction extends Action<string> {
    type: typeof PAINT_PIXEL
    payload: PaintObject
}

export type ActionTypes = IncreaseLengthAction | IncreaseWidthAction | PaintPixelAction;
export type AppActions = ActionTypes | ThunkAction<void, {}, {}, ActionTypes>;

