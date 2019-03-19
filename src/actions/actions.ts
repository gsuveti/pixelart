import { INCREASE_LENGTH, INCREASE_WIDTH, PAINT_PIXEL, PaintObject, PaintPixelAction } from './types';


export function increaseLength(value: number) {
    return {
        type: INCREASE_LENGTH,
        payload: {
            value: value
        }
    }
}

export function increaseLengthAsync(value: number) {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(increaseLength(value));
        }, 1000);
    };
}

export function increaseWidth(value: number) {
    return {
        type: INCREASE_WIDTH,
        payload: {
            value: value
        }
    }
}

export function paintPixel(paintObject: PaintObject): PaintPixelAction {
    return {
        type: PAINT_PIXEL,
        payload: paintObject
    }
}
