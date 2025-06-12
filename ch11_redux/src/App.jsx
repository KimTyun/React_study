import './App.css'
import ReducerCounter1 from './ReducerCounter1'
import ReducerCounter2 from './ReducerCounter2'
import Redux1 from './Redux1'
import { legacy_createStore as createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

// reducer함수 : state를 바꿔주는 역할
function reducer(currentState, action) {
   if (currentState === undefined) return { number: 1 }

   const newState = { ...currentState }
   if (action.type === 'PLUS') newState.number++

   return newState
}
// reducer를 저장하는 창고
const store = createStore(reducer)

export function Left1() {
   return (
      <div>
         <h1>Left1: </h1>
         <Left2></Left2>
      </div>
   )
}

function Left2() {
   return (
      <div>
         <h1>Left2: </h1>
         <Left3></Left3>
      </div>
   )
}

function Left3() {
   const number = useSelector((state) => state.number)
   return (
      <div>
         <h1>Left3: {number}</h1>
      </div>
   )
}
export function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2></Right2>
      </div>
   )
}

function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3></Right3>
      </div>
   )
}

function Right3() {
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input type="button" value="+" onClick={() => dispatch({ type: 'PLUS' })} />
      </div>
   )
}

function App() {
   return (
      <>
         <ReducerCounter1></ReducerCounter1>
         <hr />
         <ReducerCounter2></ReducerCounter2>
         <hr />
         <Provider store={store}>
            <Redux1></Redux1>
         </Provider>
      </>
   )
}

export default App
