import styled from 'styled-components'

const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: orange;
   font-size: ${(props) => props.size || '10px'};

   /* &: 현재 컴포넌트 */
   &:hover {
      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
`

function ReactButton5() {
   return (
      <>
         <PrimaryButton size="20px">Normal</PrimaryButton>
      </>
   )
}

export default ReactButton5
