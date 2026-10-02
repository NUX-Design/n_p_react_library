import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const utilityExamples = [
  {
    label: 'Layout',
    className: 'grid grid-cols-2 gap-3 sm:grid-cols-4',
    value: 'grid grid-cols-2 gap-3 sm:grid-cols-4',
  },
  {
    label: 'Surface',
    className: 'rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl',
    value: 'rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl',
  },
  {
    label: 'Typography',
    className: 'text-2xl font-semibold tracking-tight text-white',
    value: 'text-2xl font-semibold tracking-tight text-white',
  },
]

function App() {
  const [isHighlighted, setIsHighlighted] = useState(true)

  return (
    <main className="dark min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a className="flex items-center gap-3" href="/" aria-label="Utility Lab home">
            <span className="grid size-9 place-items-center rounded-xl bg-violet-400 font-black text-slate-950">&lt;/&gt;</span>
            <span className="font-semibold tracking-tight text-white">Utility Lab</span>
          </a>
          <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-medium text-violet-200">
            React + Vite
          </span>
        </header>

        <section className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-28">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">Tailwind CSS v4 starter</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl">
              Build interfaces from small, composable utilities.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              A compact demo page showing responsive layout, typography, surfaces, states, and accessible focus styles without custom component CSS.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="rounded-xl bg-violet-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200" href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
                Read the docs
              </a>
              <Button
                variant="outline"
                size="lg"
                type="button"
                onClick={() => setIsHighlighted((current) => !current)}
                aria-pressed={isHighlighted}
              >
                {isHighlighted ? 'Highlight on' : 'Highlight off'}
              </Button>
            </div>
          </div>

          <aside
            className={cn(
              'relative rounded-3xl border p-6 shadow-2xl transition',
              isHighlighted
                ? 'border-violet-300/50 bg-violet-300/10 shadow-violet-950/50'
                : 'border-white/10 bg-white/5 shadow-black/30',
            )}
            aria-label="Utility preview"
          >
            <div className="absolute -right-8 -top-8 size-28 rounded-full bg-fuchsia-400/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                <span>Live preview</span>
                <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_16px] shadow-emerald-300" aria-label="Preview active" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 text-slate-950 sm:col-span-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Composition score</p>
                      <p className="mt-2 text-4xl font-semibold tracking-tight">92<span className="text-xl text-slate-400">/100</span></p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Healthy</span>
                  </div>
                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" /></div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p className="text-xs text-slate-500">Spacing</p><p className="mt-2 font-mono text-xl text-violet-200">gap-6</p></div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p className="text-xs text-slate-500">Radius</p><p className="mt-2 font-mono text-xl text-violet-200">rounded-3xl</p></div>
              </div>
            </div>
          </aside>
        </section>

        <section className="border-t border-white/10 py-16" aria-labelledby="components-heading">
          <div>
            <p className="text-sm font-medium text-violet-300">shadcn/ui base components</p>
            <h2 id="components-heading" className="mt-2 text-3xl font-semibold tracking-tight text-white">Button, Card, and Input</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Reusable components are installed in <code className="text-violet-200">src/components/ui</code> and composed here with accessible labels and keyboard-friendly focus states.</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Button variants</CardTitle>
                <CardDescription>Use built-in variants for consistent interaction states.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Button type="button">Default</Button>
                <Button type="button" variant="secondary">Secondary</Button>
                <Button type="button" variant="outline">Outline</Button>
                <Button type="button" variant="ghost">Ghost</Button>
                <Button type="button" variant="destructive">Destructive</Button>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button type="button" variant="link" size="sm">View API</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input field</CardTitle>
                <CardDescription>Pair a visible label with the shadcn Input primitive.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="component-email">Email address</label>
                <Input id="component-email" type="email" placeholder="you@example.com" autoComplete="email" />
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="button">Save sample</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="border-t border-white/10 py-16" aria-labelledby="utility-heading">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-violet-300">Class recipes</p>
              <h2 id="utility-heading" className="mt-2 text-3xl font-semibold tracking-tight text-white">The utility toolkit in a glance</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-400">Each example below is styled with Tailwind classes directly in the component.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {utilityExamples.map((example) => (
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5" key={example.label}>
                <div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-white">{example.label}</h3><span className="text-xs text-slate-500">utility</span></div>
                <div className="mt-5 min-h-24 rounded-xl bg-slate-900 p-3"><div className={example.className}><span className="rounded-lg bg-violet-300 px-3 py-2 text-xs font-semibold text-slate-950">A</span><span className="rounded-lg bg-fuchsia-300 px-3 py-2 text-xs font-semibold text-slate-950">B</span><span className="rounded-lg bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950">C</span><span className="rounded-lg bg-emerald-300 px-3 py-2 text-xs font-semibold text-slate-950">D</span></div></div>
                <code className="mt-5 block break-words text-xs leading-5 text-violet-200">{example.value}</code>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Made with React, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui.</p>
          <a className="text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-violet-300" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">Vite guide ↗</a>
        </footer>
      </div>
    </main>
  )
}

export default App
