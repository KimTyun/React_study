import { useCallback, useMemo, useState } from 'react'

function getAvg(numbers) {
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0
   const sum = numbers.reduce((acc, cur) => (isNaN(cur) ? acc : acc + cur), 0)
   return (sum / numbers.length).toFixed(2)
}

function UseCallbackEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   //useCallback : 컴포넌트가 리렌더링이 될 때 함수가 다시 만들어지는 것을 막는다.
   const onChange = useCallback((e) => setNumber(e.target.value), [])

   const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }, [number, list])

   const avg = useMemo(() => getAvg(list), [list])

   return (
      <div>
         <input type="text" name="" id="" value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value} </li>
            ))}
         </ul>
         <div>
            <b>평균값: {avg}</b>
         </div>
      </div>
   )
}

export default UseCallbackEx
