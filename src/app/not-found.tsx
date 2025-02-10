import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-2xl text-red-500 text-center">Page Not Found</h1>
      <Link href="/" className="text-center">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
