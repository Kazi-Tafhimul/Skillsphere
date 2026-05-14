import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-500 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved. 
        Let&apos;s get you back to learning!
      </p>
      <Link href="/" className="btn btn-primary mt-6">
        Return Home
      </Link>
    </div>
  );
}