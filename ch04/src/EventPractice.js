import { useState } from 'react'

function EventPractice(props) {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   const onClick = function () {
      alert(`첫번째 입력값 : ${username}, 두번째 입력값: ${message}`)

      setUsername('')
      setMessage('')
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') onClick()
   }

   const onChangeUsername = (e) => setUsername(e.target.value)
   const onChangeMessage = (e) => setMessage(e.target.value)

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />

         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice
