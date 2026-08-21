import Reveal from './Reveal';

export function Section({ id, eyebrow, title, lead, children, className = '' }: { id?: string; eyebrow?: string; title?: string; lead?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-site">
        {(eyebrow || title) && (
          <Reveal className="mb-10 max-w-2xl md:mb-14">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="h-display mt-3 text-3xl md:text-4xl">{title}</h2>}
            {lead && <p className="mt-4 text-stone md:text-lg">{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="border-b border-sand bg-white">
      <div className="container-site py-14 md:py-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-3 max-w-3xl text-4xl md:text-6xl">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-stone md:text-lg">{lead}</p>}
        </Reveal>
      </div>
    </div>
  );
}
