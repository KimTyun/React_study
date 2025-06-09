import { useEffect, useState } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickName, setNickName] = useState('')
   //렌더링 될때마다 실행되는 hook
   useEffect(() => {
      console.log('1렌더링이 완료되었습니다.')
      console.log({ name, nickName })
   })
   //맨 처음 랜더링 될때만 실행되고, 업데이트 될때는 실행되지 않음.
   useEffect(() => {
      console.log('2최초 렌더링이 완료되었습니다.')
   }, [])
   //특정 값이 변경될때만 호출
   useEffect(() => {
      console.log('3이름이 변경됩니다.')
      console.log(name)
   }, [name])
   // 뒷정리 함수
   useEffect(() => {
      console.log('4뒷정리가 시작됩니다.')
      console.log(name)

      return () => {
         console.log('5컴포넌트가 리렌더링 되기전..')
         console.log(name)
      }
   })

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickName = (e) => setNickName(e.target.value)

   return (
      <div>
         <div>
            <input type="text" name="" id="" value={name} onChange={onChangeName} />
            <input type="text" name="" id="" value={nickName} onChange={onChangeNickName} />
         </div>
         <div>
            <div>
               <b>이름 : {name}</b>
            </div>
            <div>
               <b>닉네임 : {nickName}</b>
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
