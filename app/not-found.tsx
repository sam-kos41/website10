import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5] text-black">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-4">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="text-[#2541B2] hover:underline">
        Go back to homepage
      </Link>
    </div>
  );
}