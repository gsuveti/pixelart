import {
    INCREASE_LENGTH,
    INCREASE_WIDTH,
    IncreaseLengthAction,
    IncreaseWidthAction,
    PAINT_PIXEL,
    PaintObject,
    PaintPixelAction
} from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { action } from 'typesafe-actions';

export const increaseLength: ActionCreator<IncreaseLengthAction> = (value: number) =>
    action(INCREASE_LENGTH, {
        value: value
    });


export const increaseWidth: ActionCreator<IncreaseWidthAction> = (value: number) => {
    return {
        type: INCREASE_WIDTH,
        payload: {
            value: value
        }
    }
};

export const increaseLengthAsync: ActionCreator<ThunkAction<void, {}, {}, IncreaseLengthAction>> = (value: number) => {
    return (dispatch: ThunkDispatch<{}, {}, IncreaseLengthAction>) => {
        setTimeout(() => {
            dispatch(increaseLength(value));
        }, 1000);
    };
};


export function paintPixel(paintObject: PaintObject): PaintPixelAction {
    return {
        type: PAINT_PIXEL,
        payload: paintObject
    }
}
