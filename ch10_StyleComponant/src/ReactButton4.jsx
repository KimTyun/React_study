import styled from 'styled-components'

// css코드와 똑같이 작성
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

// 리액트 기존방식의 컴포넌트
const ReactButton = (pros) => {
   return <button>{pros.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton4() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>버튼2</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </>
   )
}

export default ReactButton4
