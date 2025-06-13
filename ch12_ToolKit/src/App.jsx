import { Provider } from 'react-redux'
import CounterNon from './NonToolkit/Counter'
import storeNon from './NonToolkit/store'

import Counter from './UseToolkit/Counter'
import storeUse from './UseToolkit/store'
import './App.css'
import User from './UseToolkit/user'

function App() {
   return (
      <>
         <Provider store={storeNon}>
            <CounterNon></CounterNon>
         </Provider>
         <hr />
         <Provider store={storeUse}>
            <Counter></Counter>
            <User></User>
         </Provider>
         <hr />
      </>
   )
}

export default App
