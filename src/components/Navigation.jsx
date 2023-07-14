import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar text-white p-12 flex justify-between items-center">
      <div>
        <Link href="/" legacyBehavior>
          <a className="text-4xl text-yellow-300 font-bold">Star Wars App</a>
        </Link>
      </div>
      <div className="relative">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-yellow-300 text-2xl hover:text-yellow-600">Characters</a>
            </Link>
          </li>
          <li>
            <Link href="/films" legacyBehavior>
              <a className="text-yellow-300 text-2xl hover:text-yellow-600">Films</a>
            </Link>
          </li>
          <li>
            <Link href="/planets" legacyBehavior>
              <a className="text-yellow-300 text-2xl hover:text-yellow-600">Planets</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
