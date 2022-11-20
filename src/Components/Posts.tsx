import { Post } from "./Post";
import { api } from "../services/api";
import "../styles/posts.scss";
import { useEffect, useState } from "react";
interface Postsprops {
  title: string;
  description: string;
}
export function Posts() {
  const [posts, setPosts] = useState<Postsprops[]>([]);
  useEffect(() => {
    api
      .get("/posts")
      .then((response) => response.data)
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <ul>
        {posts.map((posts) => {
          return (
            <Post
              key={posts.title}
              title={posts.title}
              paragraph={posts.description}
            />
          );
        })}
      </ul>
    </div>
  );
}
