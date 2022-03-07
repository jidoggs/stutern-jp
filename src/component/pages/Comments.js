import React from "react";
import { useLocation, useNavigate } from "react-router";

function Comments() {
  const location = useLocation();
  const navigate = useNavigate();
  const { comment, post } = location.state;

  const showComment = comment.map((itm, index) => {
    return (
      <li key={index}>
        <p className="comment__body">{itm.body}</p>
        <p className="comment__email">{itm.email}</p>
      </li>
    );
  });
  return (
    <div className="post">
      <button
        className="profile__back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <h1 className="post__title">{post.title}</h1>
      <p className="post__body">{post.body}</p>
      <ul>{showComment}</ul>
    </div>
  );
}

export default Comments;
