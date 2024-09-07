import "./posts.scss";

import Post from "@/components/post/post";
import PostsFilterBar from "@/components/posts-filter-bar/posts-filter-bar";
import TrendingCard from "@/components/trending-card/trending-card";

const Posts = () => {
  return (
    <>
      <div className="posts-container">
        <PostsFilterBar />
        <Post />
        <Post />
      </div>
      <div className="posts-sidebar">
        <TrendingCard />
      </div>
    </>
  );
};

export default Posts;
