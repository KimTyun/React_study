import { useState } from 'react'

function PushEx() {
   const [items, setItems] = useState([{ id: 1, name: 'Item 1' }])
   const [nextId, setNextId] = useState(2)

   const addItemWithPush = () => {
      const newItem = { id: 2, name: 'Item 2' }
      const upDatedItems = items.concat(newItem)
      //   items.push(newItem)
      setItems(upDatedItems)
   }

   return (
      <div>
         <button onClick={addItemWithPush}>목록추가</button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default PushEx
