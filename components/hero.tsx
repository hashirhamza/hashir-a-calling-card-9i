import { ArrowUpRight } from 'lucide-react'
import { SkillTag, type SkillTone } from '@/components/skill-tag'

const skills: { label: string; tone: SkillTone; position: string; tilt: string }[] = [
  { label: 'React', tone: 'mint', position: '-left-6 -top-5', tilt: '-rotate-6' },
  { label: 'TypeScript', tone: 'butter', position: '-right-10 -top-4', tilt: 'rotate-3' },
  { label: 'JavaScript', tone: 'blush', position: '-bottom-5 -left-12', tilt: 'rotate-2' },
  { label: 'Python', tone: 'sky', position: '-bottom-4 -right-6', tilt: '-rotate-3' },
]

function Handle({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute size-2 border border-deep bg-paper ${className}`}
    />
  )
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-name"
      className="animate-hero-rise flex flex-col items-center px-4 pb-14 pt-8 text-center sm:px-5 sm:pb-16 sm:pt-14"
    >
      <p className="font-hand text-lg text-muted-foreground sm:text-xl">hey, my name is</p>

      <div className="relative mt-4 md:mt-8">
        <div className="relative -rotate-2 border-2 border-deep bg-white/50 px-3 pb-1 pt-2 sm:px-8">
          <Handle className="-left-1 -top-1" />
          <Handle className="-right-1 -top-1" />
          <Handle className="-bottom-1 -left-1" />
          <Handle className="-bottom-1 -right-1" />
          <h1
            id="hero-name"
            className="whitespace-nowrap font-pixel text-[clamp(3.25rem,18vw,10rem)] uppercase leading-[0.85] tracking-tight text-ink"
          >
            Hashir A
          </h1>
        </div>

        <ul aria-label="Skills" className="hidden md:block">
          {skills.map((skill) => (
            <li key={skill.label} className={`absolute ${skill.position} ${skill.tilt}`}>
              <SkillTag tone={skill.tone}>{skill.label}</SkillTag>
            </li>
          ))}
        </ul>
      </div>

      <ul aria-label="Skills" className="mt-6 flex flex-wrap justify-center gap-2 md:hidden">
        {skills.map((skill) => (
          <li key={skill.label} className={skill.tilt}>
            <SkillTag tone={skill.tone}>{skill.label}</SkillTag>
          </li>
        ))}
      </ul>

      <p className="mt-8 inline-flex items-center gap-2 rounded-[3px] border border-ink/20 bg-white/70 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink md:mt-12">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-deep" />
        Software Developer
      </p>

      <h2 className="mt-5 max-w-xl text-balance text-[1.75rem] font-bold min-[360px]:text-3xl leading-tight tracking-tight text-ink sm:text-5xl">
        {'I build software that\u2019s '}
        <span className="relative whitespace-nowrap text-deep">
          easy to use.
          <svg
            aria-hidden="true"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            className="absolute -bottom-1.5 left-0 h-2.5 w-full text-butter"
          >
            <path
              d="M2 8 C 50 2, 100 12, 198 4"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/hhashir/"
          target="_blank"
          rel="noopener noreferrer"
          className="press-card inline-flex min-h-11 items-center gap-1.5 rounded-[3px] bg-ink px-5 font-mono text-[11px] font-semibold uppercase tracking-wider text-paper shadow-[3px_3px_0_var(--deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
        >
          LinkedIn
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/hashirhamza"
          target="_blank"
          rel="noopener noreferrer"
          className="press-card inline-flex min-h-11 items-center gap-1.5 rounded-[3px] border border-ink bg-white px-5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink shadow-[3px_3px_0_var(--deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
        >
          GitHub
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
