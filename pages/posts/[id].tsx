export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json();

    if (!post.id) {
        return { notFound: true };
    }

    return { props: { post } };
}

export default function Post({ post }: any) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1 style={{ 
                textAlign: 'center', 
                fontSize: '2.5em', 
                marginBottom: '20px' 
            }}>
                {post.title}
            </h1>
            <div style={{ 
                background: 'white', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                padding: '20px', 
                maxWidth: '800px', 
                margin: 'auto' 
            }}>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

