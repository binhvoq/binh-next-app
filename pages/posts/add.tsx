import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function AddPost() {
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') {
            router.push('/login'); 
        }
    }, [router]);
    
    const initialPosts = [
        { id: 1, title: 'First Post', content: 'This is the first post content.' },
        { id: 2, title: 'Second Post', content: 'This is the second post content.' },
        { id: 3, title: 'Third Post', content: 'This is the third post content.' },
    ];

    const [posts, setPosts] = useState(initialPosts);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title: newTitle,
            content: newContent,
        };
        setPosts([...posts, newPost]);
        setNewTitle('');
        setNewContent('');
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>Add New Post</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <label>Title:</label><br />
                    <input 
                        type="text" 
                        value={newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)} 
                        required 
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Content:</label><br />
                    <textarea 
                        value={newContent} 
                        onChange={(e) => setNewContent(e.target.value)} 
                        required 
                        style={{ width: '100%', padding: '10px', fontSize: '16px', height: '100px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', fontSize: '16px' }}>Submit</button>
            </form>

            <div>
                <h2>Posts</h2>
                {posts.map((post) => (
                    <div key={post.id} style={{ 
                        background: 'white', 
                        borderRadius: '8px', 
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                        padding: '20px', 
                        marginBottom: '20px' 
                    }}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
