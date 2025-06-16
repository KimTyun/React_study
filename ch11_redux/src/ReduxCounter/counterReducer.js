function counterReducer(state = { count: 0 }, action) {
   // action = {type: 'increment', payload:'asdf'}
   switch (action.type) {
      case 'UP':
         return { count: state.count + (action.payload || 1) }
      case 'DOWN':
         return { count: state.count - (action.payload || 1) }
      default:
         return state
   }
}

export default counterReducer
