import { useMemo, useState } from 'react'

function getAvg(numbers) {
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0
   const sum = numbers.reduce((acc, cur) => (isNaN(cur) ? acc : acc + cur), 0)
   return (sum / numbers.length).toFixed(2)
}

function UseMomoEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')
   const onChange = (e) => setNumber(e.target.value)
   const onInsert = () => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }

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

export default UseMomoEx
