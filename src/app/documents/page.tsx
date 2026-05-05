import { PageShell } from "@/components/page-shell";
import { Download, Eye, FileText, FolderOpen, CheckSquare, BookOpen } from "lucide-react";
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

// Core Documents
const coreDocs: Doc[] = [
  {
    title: "Project Charter",
    kind: "PDF",
    tag: "Main",
    description: "Project overview, roles, scope, and governance.",
    viewLink: "https://drive.google.com/file/d/1a7vmmVhTu6vpQOTey42MH8un-0d74Mks/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1a7vmmVhTu6vpQOTey42MH8un-0d74Mks",
    downloadName: "SmartTea-Project-Charter.pdf",
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

// Proposal Documents
const proposalDocs: Doc[] = [
  {
    title: "Wijesekara W.W.M.N.D - Proposal",
    kind: "PDF",
    tag: "Proposal",
    description: "Initial research proposal - Version 1",
    viewLink: "https://drive.google.com/file/d/1RIrmjHUasIXRV6bbpu3mw-6-1MkKZC4n/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1RIrmjHUasIXRV6bbpu3mw-6-1MkKZC4n",
    downloadName: "Wijesekara-Proposal.pdf",
  },
  {
    title: "Abeyweera K.A.A.U.A. - Proposal",
    kind: "PDF",
    tag: "Proposal",
    description: "Revised research proposal with feedback",
    viewLink: "https://drive.google.com/file/d/1J260EZkeQ4LDyaZtOrfoO66q3F_BGSI1/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1J260EZkeQ4LDyaZtOrfoO66q3F_BGSI1",
    downloadName: "Abeyweera-Proposal.pdf",
  },
  {
    title: "Kodisinghe H.R. - Proposal",
    kind: "PDF",
    tag: "Proposal",
    description: "Final proposal before presentation",
    viewLink: "/docs/proposal-document-03.pdf",
    downloadLink: "/docs/proposal-document-03.pdf",
    downloadName: "Kodisinghe-Proposal.pdf",
  },
  {
    title: "Jayasundara J.D. - Proposal",
    kind: "PDF",
    tag: "Proposal",
    description: "Proposal defense presentation slides",
    viewLink: "https://drive.google.com/file/d/1YFnpZjc7j0QHKkogg9e30YtgoLy1RZXZ/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=1YFnpZjc7j0QHKkogg9e30YtgoLy1RZXZ",
    downloadName: "Jayasundara-Proposal-Presentation.pdf",
  },
];

// Checklists
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
    kind: "XLSX",                    // Changed to XLSX since it's a spreadsheet
    tag: "Checklist",
    description: "Submission and review checklist (version 2) - Excel format",
    viewLink: "https://docs.google.com/spreadsheets/d/1aLE3yGpieyvT4rjCCJEN2NSfAu-HtXhL/edit?usp=sharing",
    downloadLink: "https://docs.google.com/spreadsheets/d/1aLE3yGpieyvT4rjCCJEN2NSfAu-HtXhL/export?format=xlsx",
    downloadName: "SmartTea-Checklist-02.xlsx",
  },
];

// Final Thesis Reports
const finalReports: Doc[] = [
  {
    title: "Draft Thesis ",
    kind: "PDF",
    tag: "Final",
    description: "Final Thesis - Part 1 (Chapters 1-3)",
    viewLink: "https://drive.google.com/file/d/19FhAGZeC1zuIa9cuv48xI2BQbhNqZkCW/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=19FhAGZeC1zuIa9cuv48xI2BQbhNqZkCW",
    downloadName: "Wijesekara-Final-Thesis.pdf",
  },
  {
    title: "Wijesekara W.W.M.N.D - Draft Thesis ",
    kind: "PDF",
    tag: "Final",
    description: "Final Thesis - Part 1 (Chapters 1-3)",
    viewLink: "https://drive.google.com/file/d/19FhAGZeC1zuIa9cuv48xI2BQbhNqZkCW/view?usp=sharing",
    downloadLink: "https://drive.google.com/uc?export=download&id=19FhAGZeC1zuIa9cuv48xI2BQbhNqZkCW",
    downloadName: "Wijesekara-Final-Thesis.pdf",
  },
  {
    title: "Abeyweera K.A.A.U.A. - Draft Thesis ",
    kind: "PDF",
    tag: "Final",
    description: "Final Thesis - Part 2 (Chapters 4-5)",
    viewLink: "/docs/final-thesis-02.pdf",
    downloadLink: "/docs/final-thesis-02.pdf",
    downloadName: "Abeyweera-Final-Thesis.pdf",
  },
  {
    title: "Kodisinghe H.R. - Draft Thesis ",
    kind: "PDF",
    tag: "Final",
    description: "Final Thesis - Part 3 (Results & Discussion)",
    viewLink: "/docs/final-thesis-03.pdf",
    downloadLink: "/docs/final-thesis-03.pdf",
    downloadName: "Kodisinghe-Final-Thesis.pdf",
  },
  {
    title: "Jayasundara J.D. - Draft Thesis ",
    kind: "PDF",
    tag: "Final",
    description: "Complete Final Thesis with References & Appendices",
    viewLink: "/docs/final-thesis-04.pdf",
    downloadLink: "/docs/final-thesis-04.pdf",
    downloadName: "Jayasundara-Final-Thesis.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <PageShell
      title="Documents"
      subtitle="Complete archive of Smart Tea project documents, proposals, and final reports."
    >
      <div className="space-y-20">

        {/* Core Documents */}
        <section>
          <SectionHeader icon={<FileText className="w-6 h-6" />} title="Core Documents" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreDocs.map((doc, i) => (
              <FadeIn key={doc.title} delay={i * 0.04}>
                <DocumentCard doc={doc} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Proposal Documents */}
        <section>
          <SectionHeader icon={<BookOpen className="w-6 h-6" />} title="Proposal Documents" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proposalDocs.map((doc, i) => (
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

        {/* Final Thesis Reports */}
        <section>
          <SectionHeader icon={<FolderOpen className="w-6 h-6" />} title="Final Thesis Reports" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {finalReports.map((doc, i) => (
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
                  <p className="text-slate-600 mt-1">Opens in new tab for preview</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-emerald-600 mt-1">⬇️</div>
                <div>
                  <p className="font-semibold">Download</p>
                  <p className="text-slate-600 mt-1">Direct download to your device</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-5" delay={0.05}>
          <div className="bg-white border border-emerald-100 rounded-3xl p-10">
            <h3 className="font-semibold text-slate-900 mb-4">Adding New Documents</h3>
            <p className="text-slate-600">
              Place PDF files in the <span className="font-mono bg-emerald-50 px-2 py-1 rounded">public/docs</span> folder.
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

/* Document Card - Compact & User-Friendly */
function DocumentCard({ doc }: { doc: Doc }) {
  return (
    <div className="group bg-white border border-emerald-100 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-t-3xl -mx-8 -mt-8 mb-6" />

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
              {doc.title}
            </h3>
            <p className="text-emerald-600 text-sm mt-1">{doc.kind}</p>
          </div>
        </div>

        {doc.tag && (
          <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full self-start">
            {doc.tag}
          </span>
        )}
      </div>

      <p className="mt-6 text-slate-600 leading-relaxed flex-1">
        {doc.description}
      </p>

      {/* Compact Action Buttons */}
      <div className="mt-8 flex gap-3">
        <a
          href={doc.viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-10 flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 font-medium text-sm transition-all active:scale-[0.97]"
        >
          <Eye className="w-4 h-4" />
          <span>View</span>
        </a>

        <a
          href={doc.downloadLink}
          download={doc.downloadName}
          className="flex-1 h-10 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all active:scale-[0.97]"
        >
          <Download className="w-4 h-4" />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
}