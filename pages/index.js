import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>react-query test</h1>
      <div>
        <Link href="/simple/">
          <a>simple</a>
        </Link>
      </div>
    </div>
  );
}
