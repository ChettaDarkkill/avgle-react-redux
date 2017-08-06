
export default function images(state = {data:[], loading:"Please click the 'Get Video List' button"}, action){
    switch (action.type) {
      case 'IMAGE_LOADING':
        return  {...state,
          loading : "Loading.."
        };
      case 'IMAGES':
        return {...state, 
          data : action.data,
          loading : "Loaded"
        };
      default:
        return state;
    }
}