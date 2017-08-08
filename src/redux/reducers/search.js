export default function search(state = {text:''}, action) {
    switch(action.type){
        case 'SEARCH_VIDEO':
            return {...state,
                text : action.text
            };
        default:
            return state;          
    }
}