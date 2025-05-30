import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
    const {isLoading, posts, error} = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(fetchPosts())
    }, [dispatch])

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
