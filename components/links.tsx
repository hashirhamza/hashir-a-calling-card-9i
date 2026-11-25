import { ArrowUpRight } from 'lucide-react'
import { Tape } from '@/components/tape'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hhashir/',
    display: 'linkedin.com/in/hhashir',
    tilt: '-rotate-1',
    tape: 'bg-blush/80',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/hashirhamza',
    display: 'github.com/hashirhamza',
    tilt: 'rotate-1',
    tape: 'bg-mint/80',
  },
]

export function Links() {
  return (
    <section
      id="links"
      aria-labelledby="links-heading"
      className="border-t border-dashed border-ink/15 px-5 py-14 sm:px-10"
    >
      <p className="font-hand text-lg text-muted-foreground">find me online</p>
      <h2 id="links-heading" className="sr-only">
        Links
      </h2>

      <ul className="mx-auto mt-6 grid max-w-2xl gap-6 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.label} className={link.tilt}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-4 border border-ink bg-white px-5 py-5 shadow-[4px_4px_0_var(--deep)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep"
            >
              <Tape className={`-top-3 left-1/2 -translate-x-1/2 -rotate-3 ${link.tape}`} />
              <span className="flex min-w-0 flex-col gap-1">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-deep">
                  {link.label}
                </span>
                <span className="truncate font-sans text-base font-semibold text-ink">
                  {link.display}
                </span>
              </span>
              <ArrowUpRight
                className="size-5 shrink-0 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
