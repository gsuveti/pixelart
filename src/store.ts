import { AnyAction, applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from "./reducers";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import changeColorEpic from './epics/color';

export interface CanvasState {
    length: number;
    width: number;
    pixels: {
        [k: string]: string | undefined
    }
}

export interface UserSettingsState {
    colors?: string[];
}

export interface AppState {
    canvas: CanvasState;
    userSettings: UserSettingsState;
}

export const rootEpic = combineEpics(
    changeColorEpic
);
const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState: AppState = {
    canvas: {
        length: 4, width: 4, pixels: {}
    },
    userSettings: {
        colors: ["red", "blue"]
    }
}): Store<AppState, AnyAction> {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk, epicMiddleware),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    epicMiddleware.run(rootEpic);

    return store;
}


