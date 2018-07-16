import PublicLayout from '../layouts/PublicLayout';
import PostList from '../components/PostList';

import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <PublicLayout>
            <PostList posts={props.posts} />
    </PublicLayout>
);

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3001/v1/posts');
    const data = await res.json();
    
    return { posts: data };
}

export default Index;