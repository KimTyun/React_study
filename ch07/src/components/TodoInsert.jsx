import { useCallback, useState } from 'react'
import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'

function TodoInsert({ onInsert }) {
   const [text, setText] = useState('')

   const onChange = useCallback(function (e) {
      setText(e.currentTarget.value)
   }, [])

   const onSubmit = useCallback(
      function (event) {
         event.preventDefault()
         onInsert(text)
         setText('')
      },
      [text, onInsert],
   )
   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input type="text" placeholder="할 일을 입력하세요" value={text} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
