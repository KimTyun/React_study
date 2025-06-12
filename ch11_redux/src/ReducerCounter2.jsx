import { useReducer, useState } from 'react'

function ReducerCounter2() {
   const [count, countDispatch] = useReducer(countReducer, 0)

   function countReducer(oldCount, action) {
      if (action === 'UP') return oldCount + 1
      else if (action === 'DOWN') return oldCount - 1
      else if (action === 'RESET') return 0
   }

   const down = () => countDispatch('DOWN')
   const up = () => countDispatch('UP')
   const reset = () => countDispatch('RESET ')

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="+" onClick={up} />
         <input type="button" value="0" onClick={reset} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter2
