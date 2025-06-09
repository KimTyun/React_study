import './css/TodoListItem.css'
import { IoIosRemoveCircleOutline, IoMdCheckbox } from 'react-icons/io'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import classnames from 'classnames'

function TodoListItem({ todo, onRemove, onToggle }) {
   return (
      <div className="TodoListItem">
         <div className={classnames('checkbox', { checked: todo.checked })} onClick={() => onToggle(todo.id)}>
            {todo.checked ? <IoMdCheckbox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{todo.text}</div>
         </div>
         <div className="remove" onClick={(e) => onRemove(todo.id)}>
            <IoIosRemoveCircleOutline />
         </div>
      </div>
   )
}

export default TodoListItem
