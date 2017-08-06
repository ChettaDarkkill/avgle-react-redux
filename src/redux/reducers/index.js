import video from './video'
export default function combineReducer(currentState, action) {

    var nextState = {...currentState};

    return {
        video: video(nextState.video, action)
    };
}
