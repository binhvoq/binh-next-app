import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <nav className="mb-4">
        <Link href="/about">
          <a className="mr-6">About</a>
        </Link>
        <Link href="/posts">
          <a className="mr-6">Posts</a>
        </Link>
        <Link href="/posts/add">
          <a>Create Post</a>
        </Link>
      </nav>

      <div className="space-y-4 mb-8">
        <article className="max-w-md p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-bold">Blog Content</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur orci...
          </p>
        </article>
      </div>
    </main>
  );
}
