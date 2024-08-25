// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-md text-center">
        This is the About page of our Next.js app using the new App Router.
        Tailwind CSS makes it easy to style this page with utility classes.
      </p>
    </div>
  );
}
