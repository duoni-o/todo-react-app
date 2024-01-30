import './App.css';

import React from "react"
import ToDo from "./ToDo"
// import Sample from "./Sample"

class App extends React.Component {
  constructor(props) {
    // App.js에서 넘겨준 속성들을 자신의 props에 저장
    // this.props.item이라는 속성에 앞에서 전달한 데이터를 저장
    super(props)
    // this.state.item = {id:0, "title":"Hello React", "done":true}
    // App.js에 this.state.item이라는 이름으로 데이터를 생성
    // ToDo에게 item이라는 이름으로 데이터를 전달
    this.state = {items:[{id:0, "title":"React", "done":true},
                        {id:1, "title":"Vue", "done":false},
                        {id:2, "title":"Angular", "done":false}]}
  }
  render() {
    // 배열을 순회하면서 출력할 내용을 생성
    // item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    // 배열을 순회하면서 출력물을 만들 때는 key를 설정해줘야 함
    // key를 설정하지 않으면 출력에는 문제 없지만 콘솔에 에러 출력됨
    let display = this.state.items.map((item, idx) => (
      <ToDo item = {item} key = {item.id} />
    ));
    return (
      <div className = "App">
        {display}
      </div>
    )
  }
}

export default App;