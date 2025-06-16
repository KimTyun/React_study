import CounterComponent from './ReduxCounter/CounterComponent'
import store from './ReduxCounter/store'
import { Provider } from 'react-redux'
import ToolkitCounterComponent from './ToolkitCounter/ToolkitCounterComponent'
import toolkitStore from './ToolkitCounter/store'
function App() {
   return (
      <>
         <Provider store={store}>
            <CounterComponent></CounterComponent>
         </Provider>
         <hr />
         <Provider store={toolkitStore}>
            <ToolkitCounterComponent></ToolkitCounterComponent>
         </Provider>
      </>
   )
}

export default App
