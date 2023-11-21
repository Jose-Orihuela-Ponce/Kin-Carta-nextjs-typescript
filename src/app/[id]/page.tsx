import Link from 'next/link';
import { api } from '../api';
import { notFound } from 'next/navigation';

export default async function IdPage({
  params: { id }
}: {
  params: { id: string };
}) {
  const caseStudy = await api.caseStudy.fetch(Number(id));
  if (caseStudy) {
    return (
      <section className="grid gap-8">
        <Link
          className="opacity-80  hover:text-green-500 hover:underline text-blue-400 text-lg font-semibold"
          href="/"
        >
          {' --> Back to List'}
        </Link>
        <hgroup>
          <h2 className="text-4xl font-medium">{caseStudy.title}</h2>
          <img
            className="w-auto h-[256] object-cover"
            src={caseStudy.hero_image}
            alt={caseStudy.title}
          />
          {caseStudy.sections.map((el, index) => {
            return (
              <article
                key={index}
                className="flex flex-col items-center gap-2 mt-4"
              >
                <h3 className="text-lg font-bold">{el.title}</h3>
                {el.body_elements.map((element, index) => {
                  if (typeof element === 'string') {
                    return <p key={index}>{element}</p>;
                  } else {
                    return (
                      <img
                        key={index}
                        alt={element.title || el.title}
                        src={element.image_url}
                        className="h-[320px]"
                      />
                    );
                  }
                })}
              </article>
            );
          })}
        </hgroup>
      </section>
    );
  } else {
    notFound();
  }
}
