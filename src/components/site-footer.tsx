import Link from "next/link";
import { Container } from "@/components/container";
import { Sparkles } from "lucide-react";

const quickLinks = [
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
  { href: "/slides", label: "Slides" },
];

const pages = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-emerald-100 relative overflow-hidden pt-16 pb-10">
      {/* Subtle tea leaf background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.8px,transparent_1px)] bg-[length:50px_50px] opacity-5 pointer-events-none" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">Smart Tea</h3>
                <p className="text-emerald-600 text-sm font-medium">AI for Sri Lanka’s Tea Industry</p>
              </div>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-md">
              A final-year research project from SLIIT that leverages artificial intelligence 
              to revolutionize tea cultivation, quality assessment, and industry decision-making.
            </p>

            <div className="mt-8 text-xs text-slate-500">
              Sri Lanka Institute of Information Technology (SLIIT)<br />
              BSc (Hons) in Information Technology • 2026
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">

            {/* Quick Links */}
            <div>
              <h4 className="uppercase text-xs tracking-widest font-semibold text-emerald-700 mb-5">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-slate-600 hover:text-emerald-700 transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="uppercase text-xs tracking-widest font-semibold text-emerald-700 mb-5">Pages</h4>
              <div className="space-y-3">
                {pages.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-slate-600 hover:text-emerald-700 transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h4 className="uppercase text-xs tracking-widest font-semibold text-emerald-700 mb-5">Project</h4>
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-3xl p-6">
                <p className="font-medium text-slate-900">SLIIT • BSc (Hons) in IT</p>
                <p className="mt-1 text-slate-600 text-sm">Final Year Research Project 2026</p>
                
                <div className="mt-8 pt-6 border-t border-emerald-100 text-xs text-slate-500">
                  © {year} Smart Tea Research Team<br />
                  All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-emerald-100 text-center">
          <p className="text-xs text-slate-500">
            Designed with care for Sri Lanka’s Tea Industry • 
            Powered by Innovation at SLIIT
          </p>
        </div>
      </Container>
    </footer>
  );
}