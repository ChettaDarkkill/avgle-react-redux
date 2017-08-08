import video from './video'
import search from './search'
export default function combineReducer(currentState, action) {

    var nextState = {...currentState};

    return {
        video: video(nextState.video, action),
        search: search(nextState.search, action)
    };
}
