export default function sum(state = 5, action){
    switch (action.type) {
      case 'SUM': // look at Note2.1
        return parseInt(action.a) + parseInt(action.b)
      default:
        return state;
    }
}
