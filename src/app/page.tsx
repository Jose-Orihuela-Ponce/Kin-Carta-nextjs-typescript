import Link from 'next/link';
import { api } from './api';

export default async function Home() {
  const caseStudies = await api.caseStudy.list();

  return (
    <article className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
      {caseStudies.map((el) => (
        <Link key={el.id} href={`/${el.id}`}>
          <hgroup>
            <img
              className="w-auto h-[240px] object-cover"
              src={el.hero_image}
              alt={el.title}
            />
            <div>
              <h2 className="text-xl font-bold">{el.title}</h2>
              <p className="opacity-80">{el.teaser}</p>
            </div>
          </hgroup>
        </Link>
      ))}
    </article>
  );
}
