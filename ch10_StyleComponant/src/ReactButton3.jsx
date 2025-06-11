import styled from 'styled-components'

// css코드와 똑같이 작성
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`
const StyleDiv = styled.div`
   width: 100px;
   height: 100px;
   border: 1px solid green;
`

function ReactButton3() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>버튼2</LargeButton>
         <StyleDiv></StyleDiv>
      </>
   )
}

export default ReactButton3
