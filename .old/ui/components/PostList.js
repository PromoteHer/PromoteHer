import Post from './Post';

const PostList = (props) => (
    <section id="posts">
        {props.posts.map(({post}) => (
            <Post key={post.id} data={post} />
        ))}
    </section>
)

export default PostList;