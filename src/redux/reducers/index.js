import images from './images'
export default function combineReducer(currentState, action) {

    var nextState = {...currentState};

    return {
        images: images(nextState.images, action)
    };
}
