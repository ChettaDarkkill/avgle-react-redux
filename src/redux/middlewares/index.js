//middleware
export const logger  = store => next => action => {
            console.group('Logger');
            console.log('currentstate before chage state' , store.getState())
            next(action);
            console.log('nextstate after chage state' , store.getState())
            console.groupEnd(); 
        
    }

//second middleware
export const crashReportor = store => next => action => {
        try {
            next(action);
        }catch(err){
            console.group('crashReportor');
            console.error('crashReportor error is == ' , action);
            console.error(err);
        }       
    }

//third middleware
export const thunk = store => next => action => {
    if(typeof action === 'function') {
        action(store.dispatch, store.getState());
    } else {
        next(action);
    }
}
    