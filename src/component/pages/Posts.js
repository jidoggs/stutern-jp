import React from "react";
import useFetch from "../request/FetchData";
import Post from "../uiComponent/Post";

function Posts() {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const result = data.map((el, index) => {
    return (
      <Post
        key={index}
        id={el.id}
        userId={el.userId}
        body={el.body}
        title={el.title}
        el={el}
      />
    );
  });
  return (
    <div className="test-suit">
      {isLoading && <h1 className="data__loading">data Loading...</h1>}
      {result}
    </div>
  );
}

export default Posts;
