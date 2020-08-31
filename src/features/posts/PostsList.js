import React from "react";
import { useSelector } from "react-redux";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const count = useSelector((state) => state.count);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>ID: {post.id}</p>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts-list" style={{ marginBottom: "20pt" }}>
      <h2>Posts:{count}</h2>
      {renderedPosts}
    </section>
  );
};
