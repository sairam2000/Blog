import React from 'react'
import './post.css'

function Post({img}) {
    return (
        <div className="post">
            <img 
            src={img} 
            alt="" 
            className="postImg" />
            <p className="postCategory">music</p>
            <h3 className="postTitle">
                Lorem ipsum dolor sit amet
            </h3>
            <p className="postDate">1 hour ago</p>
            <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore, harum. Optio, tempore dolor. Itaque totam asperiores 
                deserunt libero, non perspiciatis illum eius, praesentium voluptas,
                cum laudantium? Commodi similique quisquam cupiditate?
            </p>
        </div>
    )
}

export default Post
