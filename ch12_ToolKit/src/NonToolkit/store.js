import counterReducer from './counterReducer'
import { legacy_createStore as createStore } from 'redux'

const store = createStore(counterReducer)

export default store
