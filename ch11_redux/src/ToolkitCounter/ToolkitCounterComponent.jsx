import { useDispatch, useSelector } from 'react-redux'
import { DOWN, UP } from './toolkitCounterSlice'

function ToolkitCounterComponent() {
   const dispatch = useDispatch()
   const count = useSelector((s) => s.counter.value)
   return (
      <>
         <div>
            <h2>Count : {count}</h2>
            <button onClick={() => dispatch(UP(1))}>증가</button>
            <button onClick={() => dispatch(DOWN(1))}>감소</button>
         </div>
      </>
   )
}

export default ToolkitCounterComponent
