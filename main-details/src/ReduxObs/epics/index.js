import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {GET_SERVICES_REQUEST, GET_SINGLE_REQUEST} from '../Actions/actionTypes';
import {getServicesFailure, getServicesSuccess} from '../Actions/actionCreators'
import { getSinglesFailure, getSinglesSuccess } from '../Actions/actionCreators';


export const getServicesEpic = action$ => action$.pipe(
    ofType(GET_SERVICES_REQUEST),
    switchMap(o => ajax.getJSON(`http://localhost:7070/api/services`).pipe(     //import.meta.env.VITE_SEARCH_URL
        retry(3),
        map(o => getServicesSuccess(o)),
        catchError(e => of(getServicesFailure(e))),
    )),
);

export const getSingleEpic = action$ => action$.pipe(
    ofType(GET_SINGLE_REQUEST),
    map(o => o.payload.id),
    tap(o => console.log('111',o)),
    map(o => new URLSearchParams({ q: o })),
    tap(o => console.log('2222', o)),
    switchMap(o => ajax.getJSON(`http://localhost:7070/api/services/1`).pipe(    //`http://localhost:7070/api/services/1${o}`
        retry(3),
        map(o => getSinglesSuccess(o)),
        catchError(e => of(getSinglesFailure(e))),
    )),
);