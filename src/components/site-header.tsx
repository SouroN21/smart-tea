import Link from "next/link";
import { Container } from "@/components/container";
import { SiteNav } from "@/components/site-nav";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100">
      {/* Subtle top glow line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

      <Container>
        <div className="flex items-center justify-between h-20">

          {/* LOGO - Tea Inspired */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="-space-y-0.5">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Smart Tea
              </h1>
              <p className="text-xs text-emerald-600 font-medium">AI for Tea Industry</p>
            </div>
          </Link>

          {/* Navigation Only */}
          <div className="flex items-center">
            <SiteNav />
          </div>

        </div>
      </Container>
    </header>
  );
}