import React from "react";

// react에서 컴포넌트 클래스를 만들기 위해서 Component로부터 상속 받기
// id와 name(서버에게 전송할 때 이름)은 가능하면 같은 이름 사용
class Sample extends React.Component {
    // render(): 화면에 출력할 내용을 리턴하는 메서도
    render() {
        return (
            <div className = "ToDo">
                <p>안녕하세요!</p>
            </div>
        )
    }
}

export default Sample;