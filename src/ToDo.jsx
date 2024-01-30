import React from "react";

import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox
} from "@material-ui/core"

// react에서 컴포넌트 클래스를 만들기 위해서 Component로부터 상속 받기
// id와 name(서버에게 전송할 때 이름)은 가능하면 같은 이름 사용
class ToDo extends React.Component {
    // 생성자
    constructor(props) {
        super(props); // 상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
        // state 생성
        // item이라는 이름으로 props 중에서 item이라는 값을 state로 저장
        // props는 상위 컴포넌트에서 전달한 데이터라서 읽기는 가능하지만 수정/삭제 안 됨
        // 수정/삭제를 하고자 하는 경우는 state로 변환해야 함
        this.state = {item: this.props.item} // item은 App.js에서 만들어줘야 함
    }

    // render(): 화면에 출력할 내용을 리턴하는 메서도
    render() {
        // 자주 사용하는 데이터를 짧게 사용하기 위해서 다른 변수에 대입
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked = {item.done} />
                <ListItemText>
                    <InputBase
                        inputProps = {{"aria-label":"naked"}}
                        type = "text"
                        id = {item.id}
                        name = {item.id}
                        value = {item.title}
                        multiline = {true}
                        fullWidth = {true}
                    />
                </ListItemText>
            </ListItem>
        )
    }
}

export default ToDo;