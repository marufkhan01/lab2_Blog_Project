import React, { useEffect, useContext } from 'react'
import BlogContext from '../context/blogContext'
import { useParams } from 'react-router-dom'

const Post = () => {
    const blogContext = useContext(BlogContext)
    const {
        getPostById,
        currentBlogPost
    } = blogContext

    let { postId } = useParams()
    
    useEffect(() => {
        getPostById(postId)
    }, [])

    console.log(postId)
    return (
        <div className='post'>
            {currentBlogPost ? (
                <>
                    <div className='post-content'>
                        <h2>{currentBlogPost.title}</h2>
                        <p>{currentBlogPost.content}</p>
                    </div>
                </>
            ) : (
                    <p>Loading...</p>
                )}
        </div>
    )
}

export default Post