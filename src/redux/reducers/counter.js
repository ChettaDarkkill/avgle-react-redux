
export default function counter(state = {result : 0 , loading : false} , action){

    switch (action.type) {
      case 'DECREMENT': // look at Note2.1
      /* original */
    //   return Object.assign({},state, {
    //       result : state.result - 1
    //   });
      /* spread operation */

      return Object.assign({}, state , {
        result : state.result - 1
      })

      return {...state,
        result : state.result - 1 };
      default:
        return state;
    }
}