import React from 'react'
import {Link} from 'react-router-dom'


const PostCard = (props) => {
    return (
        <div className='card'>       
            <div className='card-info'>
                <div className='card-title'>
                    <Link to={`/${props.id}`}>
                        <p>{props.title}</p>
                    </Link>
                </div>
                <div className='card-author-section'>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                </div>
            </div>       
        </div>
    )
}

export default PostCard
