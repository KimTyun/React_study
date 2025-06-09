const { useState } = require('react')

//커스텀 훅
function useToggle(initialValue) {
   const [value, setValue] = useState(initialValue)

   const toggle = function () {
      setValue(!value)
   }

   return [value, toggle]
}

export default useToggle
