export const INCREASE_LENGTH = "INCREASE_LENGTH";
export const INCREASE_WIDTH = "INCREASE_WIDTH";
export const PAINT_PIXEL = "PAINT_PIXEL";

interface IncreaseLengthAction {
    type: typeof INCREASE_LENGTH
    payload: {
        value: number
    }
}

interface IncreaseWidthAction {
    type: typeof INCREASE_WIDTH
    payload: {
        value: number
    }
}

interface PaintPixelAction {
    type: typeof PAINT_PIXEL
    payload: {
        color: string | undefined,
        position: { x: number, y: number },
    }
}

export type ActionTypes = IncreaseLengthAction | IncreaseWidthAction | PaintPixelAction;
