import { CanvasState } from '../store';
import { ActionTypes, INCREASE_LENGTH, INCREASE_WIDTH, PAINT_PIXEL } from '../actions/types';


export default (state: CanvasState = {
    length: 3,
    width: 2,
    pixels: new Map<string, (string | undefined)>()
}, action: ActionTypes) => {
    switch (action.type) {
        case INCREASE_LENGTH:
            return {
                ...state,
                length: Math.max(state.length + action.payload.value, 1)
            };
        case INCREASE_WIDTH:
            return {
                ...state,
                width: Math.max(state.width + action.payload.value, 1)
            };
        case PAINT_PIXEL:
            const {position, color} = action.payload;
            const pixels = new Map<string, (string | undefined)>(state.pixels).set(position.x + "_" + position.y, color);

            return {
                ...state,
                pixels
            };
        default:
            return state;
    }
}
