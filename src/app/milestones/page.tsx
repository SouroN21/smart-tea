"use client";

import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Leaf } from "lucide-react";

const milestones = [
  {
    phase: "Proposal Phase (2025)",
    icon: <Leaf className="w-6 h-6" />,
    items: [
      { title: "Form Project Group", date: "16 May 2025", status: "Completed" },
      { title: "Select Research Topic & Supervisor", date: "26 May 2025", status: "Completed" },
      { title: "TAF Submission", date: "27 June 2025", status: "Completed" },
      { title: "TAF Evaluation", date: "30 June – 16 July 2025", status: "Completed" },
      { title: "Project Charter Submission", date: "23 July 2025", status: "Completed" },
      { title: "Proposal Report (Draft)", date: "15 August 2025", status: "Completed" },
      { title: "Proposal Presentation", date: "8 – 12 September 2025", status: "Completed" },
    ],
  },
  {
    phase: "Final Phase (2026)",
    icon: <Calendar className="w-6 h-6" />,
    items: [
      { title: "Draft Thesis Submission", date: "26 April 2026", status: "Completed" },
      { title: "Website Submission", date: "26 April 2026", status: "Completed" },
      { title: "Final Presentation & Viva", date: "27 April – 6 May 2026", status: "Upcoming" },
      { title: "Final Checklist Submission", date: "30 April 2026", status: "Completed" },
      { title: "Website Evaluation & Logbook", date: "27 April – 6 May 2026", status: "Upcoming" },
      { title: "Research Paper Submission", date: "8 May 2026", status: "Upcoming" },
      { title: "Final Thesis Submission", date: "13 May 2026", status: "Upcoming" },
      { title: "Publication Evidence Submission", date: "15 June 2026", status: "Upcoming" },
    ],
  },
];

export default function MilestonesPage() {
  return (
    <PageShell
      title="Project Milestones"
      subtitle="Our journey from proposal to final thesis — tracking key deliverables across two semesters."
    >
      <div className="max-w-4xl mx-auto space-y-16">

        {milestones.map((phase, phaseIndex) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: phaseIndex * 0.1 }}
            className="space-y-8"
          >
            {/* Phase Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                {phase.icon}
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  {phase.phase}
                </h2>
                <p className="text-emerald-600 text-sm">Key Deliverables</p>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-4">
              {phase.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: phaseIndex * 0.1 + index * 0.05 }}
                  className="group bg-white border border-emerald-100 rounded-3xl p-7 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-6"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-emerald-600 text-sm mt-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <span
                      className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-2xl transition-all ${
                        item.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.status === "Completed" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Final Note */}
        <div className="mt-16 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-10 text-center">
          <p className="text-slate-600 max-w-md mx-auto">
            We are currently in the final phase of our research project. 
            Stay tuned for updates as we approach thesis submission and viva.
          </p>
        </div>
      </div>
    </PageShell>
  );
}