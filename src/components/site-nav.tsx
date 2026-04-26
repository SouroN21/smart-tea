"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
  { href: "/slides", label: "Slides" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(() => {
    return NAV.map((item) => ({
      ...item,
      active: isActivePath(pathname, item.href),
    }));
  }, [pathname]);

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-700 transition rounded-xl group"
          >
            {item.label}
            {item.active && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 bg-emerald-100 rounded-xl border border-emerald-200 -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl bg-white border border-emerald-100 shadow-sm hover:bg-emerald-50 transition"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 lg:hidden bg-white/95 backdrop-blur-2xl pt-20"
          >
            <div className="px-6 flex flex-col">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-lg font-medium border-b border-emerald-100 last:border-none ${
                    item.active ? "text-emerald-700" : "text-slate-700"
                  }`}
                >
                  {item.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}