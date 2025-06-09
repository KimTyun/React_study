import { useCallback, useState, useRef } from 'react'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

import TodoTemplate from './components/TodoTemplate'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   const nextId = useRef(4)

   //할 일 등록
   const onInsert = useCallback(
      function (text) {
         // text: 입력한 할일

         //추가할 객체 만들기
         const todo = {
            id: nextId.current,
            text,
            checked: false,
         }
         setTodos(todos.concat(todo))
         nextId.current += 1
      },
      [todos],
   )

   const onRemove = useCallback(
      function (id) {
         const removedTodos = todos.filter((e) => e.id != id)
         setTodos(removedTodos)
      },
      [todos],
   )

   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) =>
            todo.id === id
               ? {
                    ...todo,
                    checked: !todo.checked,
                 }
               : todo,
         )
         setTodos(toggleTodos)
      },
      [todos],
   )

   return (
      <TodoTemplate>
         {/* todoInsert 컴포넌트에서 할 일을 등록하므로 onInsert 함수를 props로 전달 */}
         <TodoInsert onInsert={onInsert} />
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}

export default App
