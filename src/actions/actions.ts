import { INCREASE_LENGTH, INCREASE_WIDTH, PAINT_PIXEL } from './types';


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

export function paintPixel(position: { x: number, y: number }, color: string | undefined) {
    return {
        type: PAINT_PIXEL,
        payload: {
            position,
            color
        }
    }
}
