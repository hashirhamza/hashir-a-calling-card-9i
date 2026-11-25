const navItems = [
  { href: '#top', label: 'Home', active: true },
  { href: '#about', label: 'About' },
  { href: '#links', label: 'Links' },
]

export function SiteNav() {
  return (
    <header className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-1.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                className={`inline-flex items-center rounded-[3px] border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep ${
                  item.active
                    ? 'border-ink bg-butter text-ink'
                    : 'border-transparent text-ink/70 hover:border-ink/30 hover:bg-white/60'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <span aria-hidden="true" className="hidden items-center gap-1.5 sm:flex">
          <span className="size-3 rounded-full border border-ink/40 bg-blush" />
          <span className="size-3 rounded-full border border-ink/40 bg-mint" />
          <span className="size-3 rounded-full border border-ink/40 bg-sky" />
        </span>
        <a
          href="#links"
          className="inline-flex items-center rounded-[3px] border border-ink bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
        >
          Say hi
        </a>
      </div>
    </header>
  )
}
