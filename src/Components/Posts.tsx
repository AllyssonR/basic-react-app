import { Post } from "./Post";
import { posts } from "../posts.json";
import '../styles/posts.scss'
export function Posts() {
  return (
    <div>
      <ul>
        {posts.map((posts) => {
          return <Post title={posts.title} paragraph={posts.description} />;
        })}
      </ul>
    </div>
  );
}
