const Mycomponent = ({ name = '택윤', forNumber, children }) => {
   return (
      <div>
         <h1>{forNumber}번째</h1>
         <div>안녕하세요. 제 이름은 {name}입니다.</div>
         <p>children 값 : {children}</p>
      </div>
   )
}

export default Mycomponent
