import { FileText, Download } from "lucide-react"

export function PlaybookBanner() {
  return (
    <section className="bg-white pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 rounded-xl bg-amber-600 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-amber-600">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Free Download</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                The African SME Growth Playbook &mdash; 2025 Edition
              </h3>
              <p className="mt-1 max-w-xl text-sm text-white/85">
                A 40-page actionable guide covering the top strategies used by Africa&apos;s fastest-growing small
                businesses. Free, no strings attached.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <input
              type="email"
              placeholder="Enter your email..."
              className="rounded-md border-0 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 sm:w-64"
            />
            <button className="flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800">
              <Download className="h-4 w-4" /> Download Free Playbook
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
