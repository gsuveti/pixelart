import { Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { AnyAction } from 'redux';
import { CHANGE_COLOR, CHANGE_COLOR_START } from '../constants/user-settings-types';

const changeColorEpic = (action$: Observable<AnyAction>) => action$.pipe(
    filter(action => action.type === CHANGE_COLOR),
    mapTo({type: CHANGE_COLOR_START})
);

export default changeColorEpic;
