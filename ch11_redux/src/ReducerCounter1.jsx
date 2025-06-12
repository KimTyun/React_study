import { useState } from 'react'

function ReducerCounter1() {
   const [count, setCount] = useState(0)

   const down = () => setCount(count - 1)
   const up = () => setCount(count + 1)
   const reset = () => setCount(0)

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="+" onClick={up} />
         <input type="button" value="0" onClick={reset} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter1
