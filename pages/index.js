import { Inter } from "next/font/google";
import LikePost from '../components/LikePost';

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <main
      className={`max-w-screen-lg mx-auto my-8 ${inter.className}`}
    >
      {posts.length > 0 ? (
        posts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <h3>Author: {post.author}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.description }} />
            <LikePost />
          </article>
        ))
      ) : (
        <div>
          Waiting for blog content ...
        </div>
      )}
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api/getBlogPosts', {
      headers: {
        'X-Auth': 'secret123'
      }
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch, received status ${res.status}`);
    }
    const posts = await res.json();
    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return {
      props: { posts: [] },
    };
  }
}