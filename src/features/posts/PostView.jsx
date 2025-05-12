import React from 'react'
import { useSelector } from 'react-redux';

const PostView = () => {
    const {isLoading, posts, error} = useSelector((state) => state.posts);
  return (
    <div>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
       <section>
         {posts && posts.map((post) => {
            return <article>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
        })}
       </section>
    </div>
  )
}

export default PostView
