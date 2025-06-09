import { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)

   const handleClick = () => {
      inputRef.current.focus()
   }

   return (
      <div>
         <input type="text" name="" id="" ref={inputRef} />
         <button onClick={handleClick}>Focus Input</button>
      </div>
   )
}

export default UseRefEx
