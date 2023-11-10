export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return { props: { posts } };
}

export default function PostsPage({ posts }:any) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <header style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
                <h1>Blog Posts</h1>
            </header>
            <div style={{ marginTop: '20px' }}>
                {posts.map((post: any) => (
                    <div key={post.id} style={{ 
                        background: 'white', 
                        borderRadius: '8px', 
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                        padding: '20px', 
                        marginBottom: '20px' 
                    }}>
                        <h2 style={{ marginBottom: '0.5em', cursor: 'pointer' }} onClick={() => window.location.href = `/posts/${post.id}`}>
                            <a style={{ textDecoration: 'none', color: 'black' }} onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}>
                                {post.title}
                            </a>
                        </h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
