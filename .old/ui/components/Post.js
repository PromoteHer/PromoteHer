const Post = (props) => (
    <article key={props.data.id} className="post">
        <div className="post-message">
            {props.data.message}
        </div>
        
        <footer>
            {props.data.likes} likes
        </footer>
    </article>
)

export default Post;