export const logger  = store => next => action => {
    console.group('Logger');
    console.log('currentstate before chage state' , store.getState())
    next(action);
    console.log('nextstate after chage state' , store.getState())
    console.groupEnd();
}

export const thunk = store => next => action => {
    if(typeof action === 'function') {
        action(store.dispatch, store.getState());
    } else {
        next(action);
    }
}
    