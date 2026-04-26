"use client";

import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";
import { Users, GraduationCap, Award, Calendar, User } from "lucide-react";

const team = [
  {
    id: "IT22342812",
    name: "Wijesekara W.W.M.N.D",
    component: "Tea Leaf Quality Classification",
  },
  {
    id: "IT22338198",
    name: "Abeyweera K.A.A.U.A.",
    component: "Tea Leaf Disease Detection",
  },
  {
    id: "IT22923806",
    name: "Kodisinghe H.R.",
    component: "Tea Price Prediction (Hybrid Model with XAI)",
  },
  {
    id: "IT22892812",
    name: "Jayasundara J.D.",
    component: "Tea Yield Prediction",
  },
] as const;

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="SLIIT 4th-year undergraduates building the future of Sri Lanka's tea industry with AI."
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">

            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white border border-emerald-100 p-10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Users className="w-7 h-7 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  Who We Are
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-slate-600 max-w-3xl">
                We are a team of final-year <span className="font-semibold text-emerald-700">BSc (Hons) in Information Technology</span> students at the{" "}
                <span className="font-semibold text-slate-900">Sri Lanka Institute of Information Technology (SLIIT)</span>. 
                Our research project{" "}
                <span className="font-semibold text-emerald-700">
                  &quot;Smart Tea&quot;
                </span>{" "}
                applies cutting-edge AI to revolutionize key processes in Sri
                Lanka’s iconic tea industry.
              </p>
            </motion.div>

            {/* Our Team */}
            <div>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Our Team</h2>
                <p className="text-sm text-slate-500">Hover cards for details</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {team.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Tea-green accent bar */}
                    <div className="h-1.5 bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-500" />

                    <div className="p-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-emerald-600 font-mono text-sm mt-1 tracking-widest">
                            {member.id}
                          </p>
                        </div>

                        <div className="px-4 py-1.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700">
                          Researcher
                        </div>
                      </div>

                      <div className="mt-8 pt-8 border-t border-emerald-100">
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {member.component}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Award Icon */}
                    <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity">
                      <Award className="w-20 h-20 text-emerald-600" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-8 rounded-3xl bg-linear-to-br from-emerald-50 to-white border border-emerald-100 p-9 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Project Details</h2>
              </div>

              <div className="space-y-7">
                <DetailItem 
                  icon={<GraduationCap className="w-5 h-5" />} 
                  title="University" 
                  content="Sri Lanka Institute of Information Technology (SLIIT)" 
                />
                <DetailItem 
                  icon={<GraduationCap className="w-5 h-5" />} 
                  title="Degree" 
                  content="BSc (Hons) in Information Technology" 
                />
                <DetailItem 
                  icon={<User className="w-5 h-5" />} 
                  title="Supervisor" 
                  content="Ms. Dushani Kuruppu" 
                />
                <DetailItem 
                  icon={<Calendar className="w-5 h-5" />} 
                  title="Academic Year" 
                  content="2026" 
                />
              </div>

              <div className="mt-12 pt-8 border-t border-emerald-100">
                <p className="text-xs uppercase tracking-widest text-emerald-600 mb-2">Smart Tea</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  AI-powered solutions for tea leaf quality, disease detection, price & yield prediction — bringing intelligence to Sri Lanka’s tea heritage.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </PageShell>
  );
}

/* Reusable Detail Item */
function DetailItem({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 text-emerald-600">{icon}</div>
      <div>
        <p className="text-xs text-emerald-600/70 tracking-widest font-medium">{title}</p>
        <p className="font-medium text-slate-800 mt-1 leading-snug">{content}</p>
      </div>
    </div>
  );
}