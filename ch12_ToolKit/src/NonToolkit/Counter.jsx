import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((s) => s.value)
   return (
      <div>
         <button onClick={() => dispatch({ type: 'UP', step: 2 })}>+</button>
         <span>{count}</span>
      </div>
   )
}

export default Counter
