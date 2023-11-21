import Link from 'next/link';

export default function NOTFOUNDPAGE() {
  return (
    <section className="h-64 text-center opacity-80">
      <p>This page doesnt exist</p>
      <Link
        className="opacity-80  hover:text-green-500 hover:underline  mt-8"
        href="/"
      >
        Back to List
      </Link>
    </section>
  );
}
