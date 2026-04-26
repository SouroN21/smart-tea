import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.985]"
      : "bg-white text-slate-700 ring-1 ring-emerald-200 hover:bg-emerald-50 hover:ring-emerald-300";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}