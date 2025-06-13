import { Component } from 'react'

class Update extends Component {
   constructor(props) {
      super(props)
      this.state = { count: 0 }
   }

   handleClick = () => {
      this.setState({ count: this.state.count + 1 })
   }
   //2. 업데이트시 기존 가상돔과 새로운 가상돔을 비교
   render() {
      console.log('렌더링중 👍')
      return (
         <>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}> +1</button>
         </>
      )
   }

   componentDidMount() {
      console.log('컴포넌트 마운트 완료')
   }

   // 1. props 또는 state 변경시 호출됨
   shouldComponentUpdate(nextProps, nextState) {
      console.log('✔shouldComponentUpdate호출 : ', this.state.count)
      console.log('')
      return true
   }

   //3. 돔이 업데이트 되기 직전의 props와 state를 가져온다.
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('✔getSnapshotBeforeUpdate호출 : ', prevState.count)
      return '스냅샷 데이터'
   }

   //4 새로운 가상돔을 실제 브라우저에 반영

   componentDidUpdate(prevprops, prevstate, snapshot) {
      console.log('✔componentDidUpdate호출')
      console.log('State :', prevstate.count, 'snapshot : ', snapshot)
   }

   componentWillUnmount() {
      console.log('🤢componentWillUnmount')
   }
}

export default Update
