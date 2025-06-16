import { useDispatch, useSelector } from 'react-redux'

function CounterComponent() {
   const dispath = useDispatch()
   const count = useSelector((state) => state.count)
   return (
      <div>
         <h1>Counter:{count} </h1>
         <button onClick={() => dispath({ type: 'UP', payload: 20 })}>증가</button>
         <button onClick={() => dispath({ type: 'DOWN', payload: 40 })}>감소</button>
      </div>
   )
}

export default CounterComponent
