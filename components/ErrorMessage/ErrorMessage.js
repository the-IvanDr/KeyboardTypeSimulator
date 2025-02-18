import Link from "next/link";

export default function ErrorMessage({ title }) {
  return (
    <div className="ErrorMessage">
      <h3>{title}</h3>
      <Link href="/">Главная страница</Link>
    </div>
  );
}
