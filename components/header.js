import Link from "next/link";

export default function Header() {
  return (
    <>
      <hr />
      <h2 className="pl-4 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">️🌶</a>
        </Link>
      </h2>
    </>
  );
}
