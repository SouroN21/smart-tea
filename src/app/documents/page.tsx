import { PageShell } from "@/components/page-shell";
import Link from "next/link";
import { Download, Eye, FileText, FolderOpen, CheckSquare } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata = {
  title: "Documents",
  description: "View and download all Smart Tea research documents and reports.",
};

type Doc = {
  title: string;
  kind: "PDF" | "DOCX" | "PPTX" | "XLSX" | "ZIP";
  description: string;
  viewLink: string;
  downloadLink: string;
  downloadName: string;
  tag?: string;
};

const docs: Doc[] = [
  {
    title: "Project Charter",
    kind: "PDF",
    tag: "Main",
    description: "Project overview, roles, scope, and governance.",
    viewLink: "https://drive.google.com/file/d/1efkgkMCVyfuYd_oaK6OjzRFQfrg31hDE/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1efkgkMCVyfuYd_oaK6OjzRFQfrg31hDE",
    downloadName: "SmartTea-Project-Charter.pdf",
  },
  {
    title: "Proposal Document",
    kind: "PDF",
    tag: "Main",
    description: "Problem statement, objectives, and proposed solution plan.",
    viewLink: "/docs/proposal-document.pdf",
    downloadLink: "/docs/proposal-document.pdf",
    downloadName: "SmartTea-Proposal-Document.pdf",
  },
  {
    title: "Research Paper",
    kind: "PDF",
    tag: "Publication",
    description: "Research paper summarizing methodology, results, and findings.",
    viewLink: "/docs/research-paper.pdf",
    downloadLink: "/docs/research-paper.pdf",
    downloadName: "SmartTea-Research-Paper.pdf",
  },
  {
    title: "Logbook",
    kind: "PDF",
    tag: "Record",
    description: "Weekly progress logs, meetings, and development notes.",
    viewLink: "/docs/logbook.pdf",
    downloadLink: "/docs/logbook.pdf",
    downloadName: "SmartTea-Logbook.pdf",
  },
];

const checklists: Doc[] = [
  {
    title: "Checklist Document 01",
    kind: "PDF",
    tag: "Checklist",
    description: "Submission and review checklist (version 1).",
    viewLink: "https://drive.google.com/file/d/1SoqotKSx_FMs7Z-x6cOly-oU3-W0GqEz/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1SoqotKSx_FMs7Z-x6cOly-oU3-W0GqEz",
    downloadName: "SmartTea-Checklist-01.pdf",
  },
  {
    title: "Checklist Document 02",
    kind: "PDF",
    tag: "Checklist",
    description: "Submission and review checklist (version 2).",
    viewLink: "/docs/checklist-02.pdf",
    downloadLink: "/docs/checklist-02.pdf",
    downloadName: "SmartTea-Checklist-02.pdf",
  },
];

const finalDocs: Doc[] = [
  {
    title: "Final Document 01",
    kind: "PDF",
    tag: "Final",
    description: "Final document pack (part 1 of 4).",
    viewLink: "/docs/final-document-01.pdf",
    downloadLink: "/docs/final-document-01.pdf",
    downloadName: "SmartTea-Final-Document-01.pdf",
  },
  {
    title: "Final Document 02",
    kind: "PDF",
    tag: "Final",
    description: "Final document pack (part 2 of 4).",
    viewLink: "/docs/final-document-02.pdf",
    downloadLink: "/docs/final-document-02.pdf",
    downloadName: "SmartTea-Final-Document-02.pdf",
  },
  {
    title: "Final Document 03",
    kind: "PDF",
    tag: "Final",
    description: "Final document pack (part 3 of 4).",
    viewLink: "/docs/final-document-03.pdf",
    downloadLink: "/docs/final-document-03.pdf",
    downloadName: "SmartTea-Final-Document-03.pdf",
  },
  {
    title: "Final Document 04",
    kind: "PDF",
    tag: "Final",
    description: "Final document pack (part 4 of 4).",
    viewLink: "/docs/final-document-04.pdf",
    downloadLink: "/docs/final-document-04.pdf",
    downloadName: "SmartTea-Final-Document-04.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <PageShell
      title="Documents"
      subtitle="Access all Smart Tea research documents, proposals, checklists, and reports in one elegant library."
    >
      <div className="space-y-16">

        {/* Core Documents */}
        <section>
          <SectionHeader icon={<FileText className="w-6 h-6" />} title="Core Documents" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc, i) => (
              <FadeIn key={doc.title} delay={i * 0.04}>
                <DocumentCard doc={doc} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Submission Checklists */}
        <section>
          <SectionHeader icon={<CheckSquare className="w-6 h-6" />} title="Submission Checklists" />
          <div className="grid gap-6 sm:grid-cols-2">
            {checklists.map((doc, i) => (
              <FadeIn key={doc.title} delay={i * 0.05}>
                <DocumentCard doc={doc} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Final Documents */}
        <section>
          <SectionHeader icon={<FolderOpen className="w-6 h-6" />} title="Final Documents" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {finalDocs.map((doc, i) => (
              <FadeIn key={doc.title} delay={i * 0.04}>
                <DocumentCard doc={doc} />
              </FadeIn>
            ))}
          </div>
        </section>

      </div>

      {/* Helpful Guide */}
      <div className="mt-20 grid gap-8 lg:grid-cols-12">
        <FadeIn className="lg:col-span-7">
          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">How to Use</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-5">
                <div className="text-emerald-600 mt-1">👁️</div>
                <div>
                  <p className="font-semibold">View</p>
                  <p className="text-slate-600 mt-1">Opens document in new tab for preview</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-emerald-600 mt-1">⬇️</div>
                <div>
                  <p className="font-semibold">Download</p>
                  <p className="text-slate-600 mt-1">Directly saves file to your device</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-5" delay={0.05}>
          <div className="bg-white border border-emerald-100 rounded-3xl p-10">
            <h3 className="font-semibold text-slate-900 mb-4">Adding New Documents</h3>
            <p className="text-slate-600">
              Place your files inside the <span className="font-mono bg-emerald-50 px-2 py-1 rounded">public/docs</span> folder.
            </p>
          </div>
        </FadeIn>
      </div>
    </PageShell>
  );
}

/* Section Header */
function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
    </div>
  );
}

/* Document Card */
function DocumentCard({ doc }: { doc: Doc }) {
  return (
    <div className="group bg-white border border-emerald-100 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-t-3xl -mx-8 -mt-8 mb-6" />

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
              {doc.title}
            </h3>
            <p className="text-emerald-600 text-sm mt-1">{doc.kind}</p>
          </div>
        </div>

        {doc.tag && (
          <span className="px-4 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full self-start">
            {doc.tag}
          </span>
        )}
      </div>

      <p className="mt-6 text-slate-600 leading-relaxed flex-1">
        {doc.description}
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-3">
        <a
          href={doc.viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-11 flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-medium text-sm transition-all active:scale-[0.97]"
        >
          <Eye className="w-4 h-4" />
          View
        </a>

        <a
          href={doc.downloadLink}
          download={doc.downloadName}
          className="flex-1 h-11 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-sm transition-all active:scale-[0.97]"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>
    </div>
  );
}