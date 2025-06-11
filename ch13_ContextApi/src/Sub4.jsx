import { useContext } from 'react'
import themeContext from './App'

function Sub4() {
   const theme = useContext(themeContext)
   return (
      <div style={theme}>
         <h1>Sub4</h1>
      </div>
   )
}

export default Sub4
