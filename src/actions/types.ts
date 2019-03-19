export const INCREASE_LENGTH = "INCREASE_LENGTH";
export const INCREASE_WIDTH = "INCREASE_WIDTH";
export const PAINT_PIXEL = "PAINT_PIXEL";

export interface IncreaseLengthAction {
    type: typeof INCREASE_LENGTH
    payload: {
        value: number
    }
}

export interface IncreaseWidthAction {
    type: typeof INCREASE_WIDTH
    payload: {
        value: number
    }
}

export interface PaintObject {
    color: string | undefined,
    position: { x: number, y: number }
}

export interface PaintPixelAction {
    type: typeof PAINT_PIXEL
    payload: PaintObject
}

export type ActionTypes = IncreaseLengthAction | IncreaseWidthAction | PaintPixelAction;
