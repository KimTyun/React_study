import Type from './Type'
import Mycomponent from './MyComponent'
import Say from './Say'
import InputText from './InputText'
const App = () => {
   return (
      <>
         <Type str="react" num={200} bool={1 == 1} arr={[0, 2, 3]} json={{ react: '리액트', time: 2 }} func={(a, b) => a + b} />
         <hr />
         <Mycomponent job="강사" name={1} forNumber="2">
            맑음
         </Mycomponent>
         <hr />
         <Say />
         <hr />
         <InputText />
      </>
   )
}
export default App
