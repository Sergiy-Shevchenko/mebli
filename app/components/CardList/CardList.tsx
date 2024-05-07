import Link from "next/link";

export default function Card() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/portfolio/card-1">Карточка 1</Link>
        </li>
        <li>
          <Link href="/portfolio/card-2">Карточка 2</Link>
        </li>        
        <li>
          <Link href="/portfolio/card-3">Карточка 3</Link>
        </li>
        <li>
          <Link href="/portfolio/card-4">Карточка 4</Link>
        </li>
        <li>
          <Link href="/portfolio/card-5">Карточка 5</Link>
        </li>
        <li>
          <Link href="/portfolio/card-6">Карточка 6</Link>
        </li>
        <li>
          <Link href="/portfolio/card-7">Карточка 7</Link>
        </li>
        <li>
          <Link href="/portfolio/card-8">Карточка 8</Link>
        </li>
        <li>
          <Link href="/portfolio/card-9">Карточка 9</Link>
        </li>
        <li>
          <Link href="/portfolio/card-10">Карточка 10</Link>
        </li>
      </ul>
    </div>
  );
}