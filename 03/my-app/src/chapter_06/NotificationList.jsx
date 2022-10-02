import React from "react";
import Notification from "./Notification";

const reversedNotifications = [
    {
        id: 1,
        message : "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사 시간 입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
]

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications : [],
        };
    }

    //자바스크립트의 setInterval() 함수를 사용해 1초마다 정해진 작업을 수행
    componentDidMount(){
        const { notifications } = this.state;
        timer = setInterval(() => {
            if(notifications.length < reversedNotifications.length){
                const index = notifications.length;
                notifications.push(reversedNotifications[index]);
                //주목! [state업데이트 하기 위해서 setState()를 사용함!]
                this.setState({
                    notifications: notifications,
                });
            }
            else{
                //작업이 끝나면 배열을 비워주는 작업을 해야 함
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notifications) =>{
                    return (
                        <Notification 
                        key = {notifications.id}
                        id = {notifications.id}
                        message = {notifications.message} />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;

