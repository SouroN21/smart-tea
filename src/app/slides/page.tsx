import { PageShell } from "@/components/page-shell";
import Link from "next/link";
import { Download, Eye, Presentation, Calendar } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata = {
  title: "Slides",
  description: "Past presentations and slide decks for Smart Tea project.",
};

const slides = [
  {
    title: "Proposal Presentation",
    when: "Semester 1",
    file: "https://drive.google.com/file/d/1vZRHNYEZBoR_jF_xGfCPb9ZuflbMchdi/view?usp=sharing",
    downloadName: "SmartTea-Proposal-Presentation.pdf",
    status: "Completed",
  },
  {
    title: "Progress Presentation 1",
    when: "Semester 1",
    file: "https://drive.google.com/file/d/1eulkHPzA6vSvRF6bDQg5ttLJFOC3D--l/view?usp=sharing",
    downloadName: "SmartTea-Progress-Presentation-1.pdf",
    status: "Completed",
  },
  {
    title: "Progress Presentation 2",
    when: "Semester 2",
    file: "https://drive.google.com/file/d/11mGZUYC27BMENbYR2Y-dTgSQ-LUGZnxN/view?usp=sharing",
    downloadName: "SmartTea-Progress-Presentation-2.pdf",
    status: "Completed",
  },
  {
    title: "Final Presentation",
    when: "Semester 2",
    file: "/slides/final-presentation.pdf",
    downloadName: "SmartTea-Final-Presentation.pdf",
    status: "Completed",
  },
] as const;

export default function SlidesPage() {
  return (
    <PageShell
      title="Presentation Slides"
      subtitle="Collection of slide decks from Smart Tea project presentations throughout the year."
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Badge */}
        <FadeIn className="mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <Presentation className="w-4 h-4" />
            Smart Tea Presentations
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {slides.map((slide, i) => (
            <FadeIn key={slide.title} delay={i * 0.05}>
              <div className="group bg-white border border-emerald-100 rounded-3xl p-9 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Top accent gradient bar - appears on hover */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Presentation className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {slide.title}
                      </h3>
                      <div className="flex items-center gap-2 text-emerald-600 text-sm mt-1.5">
                        <Calendar className="w-4 h-4" />
                        {slide.when}
                      </div>
                    </div>
                  </div>

                  <span className="px-4 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full self-start">
                    {slide.status}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-8 text-slate-600 leading-relaxed flex-1">
                  Slide deck presented during the {slide.when.toLowerCase()} review for the Smart Tea project.
                </p>

                {/* Clean Action Buttons */}
                <div className="mt-10 flex gap-3">
                  <Link
                    href={slide.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-11 flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 font-medium text-sm transition-all active:scale-[0.97]"
                  >
                    <Eye className="w-4 h-4" />
                    View Slides
                  </Link>

                  <a
                    href={slide.file}
                    download={slide.downloadName}
                    className="flex-1 h-11 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-sm transition-all active:scale-[0.97]"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Guide Box */}
        <FadeIn className="mt-20 bg-white border border-emerald-100 rounded-3xl p-10" delay={0.05}>
          <h3 className="font-semibold text-slate-900 mb-4">How to Add New Slides</h3>
          <p className="text-slate-600">
            Place your presentation files (PDF recommended) inside the{" "}
            <span className="font-mono bg-emerald-50 px-2 py-1 rounded">public/slides</span> folder.
          </p>
          <div className="mt-6 text-sm text-slate-500 font-mono">
            Example: public/slides/final-presentation.pdf
          </div>
        </FadeIn>
      </div>
    </PageShell>
  );
}