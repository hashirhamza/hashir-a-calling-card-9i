import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'

export default function Page() {
  return (
    <div className="px-3 py-6 sm:px-6 sm:py-10">
      <div className="paper-lines mx-auto max-w-5xl overflow-hidden rounded-sm shadow-[0_1px_0_rgba(0,0,0,0.08),0_18px_40px_-18px_rgba(0,0,0,0.45)]">
        <SiteNav />
        <main>
          <Hero />
          <About />
        </main>
        <footer className="flex flex-col items-center gap-1 px-6 pb-10 pt-4 text-center">
          <p className="font-hand text-lg text-muted-foreground">thanks for stopping by</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Hashir A &middot; Software Developer
          </p>
        </footer>
      </div>
    </div>
  )
}
