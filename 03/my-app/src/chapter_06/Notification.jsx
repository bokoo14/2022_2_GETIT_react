import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    }
};

class Notification extends React.Component {
    constructor (props){
        super(props);

        this.state = {};
    }

    //컴포넌트가 마운트된 이후
    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    //업데이트된 이후
    componentDidUpdate(){
        console.log(`${this.props.id} compontDidUpdate() called.`);
    }

    //언마운트되기 전
    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;
