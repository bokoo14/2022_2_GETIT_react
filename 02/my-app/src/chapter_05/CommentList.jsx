import React from "react";
import Comment from "./Comment.jsx";


const comment = [
    {
        name: "박보경",
        comment: "안녕하세요. 소통해요",
    },

    {
        name: "송강",
        comment: "리액트 재미있어요~!",
    },

    {
        name: "차은우",
        comment: "저도 리액트 배워보고 싶어요!!",
    },

];

function CommentList(props) {
    return (
        <div>
            {comment.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;