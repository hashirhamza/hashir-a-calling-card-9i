import { SkillTag } from '@/components/skill-tag'
import { Tape } from '@/components/tape'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-dashed border-ink/15 px-5 py-14 sm:px-10"
    >
      <p className="font-hand text-lg text-muted-foreground">about me</p>

      <div className="mx-auto mt-4 flex max-w-2xl flex-col items-center text-center">
        <h2
          id="about-heading"
          className="inline-block -rotate-1 border border-ink bg-white px-4 py-1 font-hand text-2xl text-ink"
        >
          {"what's up"}
        </h2>

        <div className="relative mt-8 w-full rotate-[0.6deg] bg-white px-6 pb-7 pt-8 shadow-[0_10px_24px_-14px_rgba(0,0,0,0.4)] sm:px-10">
          <Tape className="-left-3 -top-3 -rotate-12 bg-butter/80" />
          <Tape className="-right-3 -top-2 rotate-12 bg-sky/80" />
          <p className="text-pretty font-hand text-xl leading-relaxed text-ink sm:text-2xl">
            I build responsive interfaces, reusable components, and REST API integrations.
            {" I'm expanding my skills in "}
            <mark className="bg-mint/70 px-1 text-ink">Python</mark>
            {' and '}
            <mark className="bg-blush/70 px-1 text-ink">AI application development</mark>
            {' through hands-on projects.'}
          </p>
        </div>

        <ul aria-label="Tools I work with" className="mt-8 flex flex-wrap justify-center gap-2.5">
          <li className="-rotate-2">
            <SkillTag tone="mint" size="md">React</SkillTag>
          </li>
          <li className="rotate-1">
            <SkillTag tone="butter" size="md">TypeScript</SkillTag>
          </li>
          <li className="-rotate-1">
            <SkillTag tone="blush" size="md">JavaScript</SkillTag>
          </li>
          <li className="rotate-2">
            <SkillTag tone="sky" size="md">Python</SkillTag>
          </li>
        </ul>
      </div>
    </section>
  )
}
