import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../request/FetchData";

function Post({ id, title, body, el }) {
  const { data } = useFetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return (
    <Link to={`/${id}`} state={{ post: el, comment: data }}>
      <Card title={title} bordered={false} style={{ width: 300 }}>
        <p>{body}</p>
        <p>{data.length} comments</p>
      </Card>
    </Link>
  );
}

export default Post;
