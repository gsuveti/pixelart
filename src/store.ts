import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from "./reducers";

export interface CanvasState {
    length: number;
    width: number;
    pixels: {
        [k: string]: string | undefined
    }
}

export interface AppState {
    canvas: CanvasState;
}

export default function configureStore(initialState: AppState = {
    canvas: {
        length: 4, width: 4, pixels: {}
    },
}) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
