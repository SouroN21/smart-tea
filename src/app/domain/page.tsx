import { PageShell } from "@/components/page-shell";
import { Leaf, Microscope, TrendingUp, BarChart3, Sparkles } from "lucide-react";

export const metadata = {
  title: "Research Domains",
  description: "Four AI-powered solutions transforming Sri Lanka’s tea industry.",
};

const domains = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Tea Leaf Quality Classification",
    student: "Wijesekara W.W.M.N.D",
    id: "IT22342812",
    desc: "Advanced computer vision system that automatically classifies tea leaves into quality grades with high accuracy.",
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Tea Leaf Disease Detection",
    student: "Abeyweera K.A.A.U.A.",
    id: "IT22338198",
    desc: "Early detection of diseases using deep learning to minimize crop loss and enable timely intervention.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tea Price Prediction (Hybrid + XAI)",
    student: "Kodisinghe H.R.",
    id: "IT22923806",
    desc: "Hybrid AI model with Explainable AI (XAI) for accurate and transparent market price forecasting.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Tea Yield Prediction",
    student: "Jayasundara J.D.",
    id: "IT22892812",
    desc: "Machine learning models that forecast future tea yield to support better planning and resource management.",
  },
];

export default function DomainPage() {
  return (
    <PageShell
      title="Research Domains"
      subtitle="Smart Tea integrates four specialized AI components to transform Sri Lanka’s tea industry."
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Introduction */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Four AI Solutions • One Goal
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-slate-900 mb-6">
            Our Research Domains
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Each domain addresses a critical challenge in the tea industry using advanced AI techniques.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <div
              key={domain.id}
              className="group bg-white border border-emerald-100 rounded-3xl p-10 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  {domain.icon}
                </div>
                <span className="font-mono text-xs bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full">
                  {domain.id}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {domain.title}
              </h3>

              <p className="text-sm text-slate-500 mb-4 font-medium">{domain.student}</p>

              <p className="text-slate-600 leading-relaxed">
                {domain.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-12 text-center">
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Together, these four AI domains create a comprehensive intelligent system 
            that empowers Sri Lankan tea stakeholders with accurate, timely, and actionable insights.
          </p>
        </div>

      </div>
    </PageShell>
  );
}