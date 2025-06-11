import styled from 'styled-components'

// css코드와 똑같이 작성

// 리액트 기존방식의 컴포넌트
const ReactButton = (props) => {
   console.log(props)
   return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton5() {
   return (
      <>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </>
   )
}

export default ReactButton5
