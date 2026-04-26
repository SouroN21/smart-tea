import type { ReactNode } from "react";
import { Container } from "@/components/container";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-white">
      {/* Hero Section – Soft Tea Green Gradient */}
      <section className="relative overflow-hidden border-b border-emerald-100 bg-linear-to-br from-emerald-50 via-emerald-50/70 to-white">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl motion-float"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl motion-float"
          aria-hidden="true"
        />
        <Container>
          <div className="relative py-16 sm:py-20">
            <div className="max-w-3xl motion-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium tracking-widest mb-4">
                SLIIT • Final Year Research
              </div>

              <h1 className="text-balance text-4xl sm:text-5xl font-semibold tracking-tighter text-slate-900">
                {title}
              </h1>

              {subtitle && (
                <p className="mt-5 text-lg leading-relaxed text-slate-600 max-w-2xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Content Area */}
      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16">{children}</div>
        </Container>
      </section>
    </main>
  );
}