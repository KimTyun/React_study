import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   // children에는 todoInsert 컴포넌트가 있다
   return (
      <div className="TodoTemplate">
         <div className="app-title">TODO LIST</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default TodoTemplate
