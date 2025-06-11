import { createContext, useContext } from 'react'
import './App.css'
import Sub4 from './Sub4'

const themeDefault = { border: '10px solid red' }

// 데이터를 공유하기 위한 context
const themeContext = createContext(themeDefault)

function App() {
   const theme = useContext(themeContext)
   return (
      <themeContext.Provider value={{ border: '10px solid blue' }}>
         <div className="root" style={theme}>
            <h1>hello world</h1>
            <Sub1 />
         </div>
      </themeContext.Provider>
   )
}

function Sub1() {
   const theme = useContext(themeContext)
   return (
      <themeContext.Provider value={{ border: '10px solid green' }}>
         <div style={theme}>
            <h1>Sub1</h1>
            <Sub2 />
         </div>
      </themeContext.Provider>
   )
}

function Sub2() {
   const theme = useContext(themeContext)
   return (
      <div style={theme}>
         <h1>Sub2</h1>
         <Sub3 />
      </div>
   )
}

function Sub3() {
   const theme = useContext(themeContext)
   return (
      <div style={theme}>
         <h1>Sub3</h1>
         <Sub4 />
      </div>
   )
}

export default App
