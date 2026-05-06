"use client";

import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";
import { Users, GraduationCap, Award, Calendar, User } from "lucide-react";
import Image from "next/image";

const team = [
  {
    id: "IT22342812",
    name: "Wijesekara W.W.M.N.D",
    component: "Tea Leaf Quality Classification",
    image: "/team/naveen.jpeg",
  },
  {
    id: "IT22338198",
    name: "Abeyweera K.A.A.U.A.",
    component: "Tea Leaf Disease Detection",
    image: "/team/arushi.jpeg",
  },
  {
    id: "IT22923806",
    name: "Kodisinghe H.R.",
    component: "Tea Price Prediction (Hybrid Model with XAI)",
    image: "/team/hiruni.jpeg",
  },
  {
    id: "IT22892812",
    name: "Jayasundara J.D.",
    component: "Tea Yield Prediction",
    image: "/team/janidu.jpeg",
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
                <span className="font-semibold text-emerald-700">"Smart Tea"</span>{" "}
                applies cutting-edge AI to revolutionize key processes in Sri Lanka’s iconic tea industry.
              </p>
            </motion.div>

            {/* Our Team */}
            <div>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Our Team</h2>
                <p className="text-sm text-slate-500">Our dedicated researchers</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {team.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group relative bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Profile Image */}
                    <div className="relative h-72 w-full bg-emerald-50 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Stronger Dark Overlay for better readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />
                    </div>

                    {/* Text Content - Now clearly visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-emerald-200 font-mono text-sm mt-1.5 tracking-widest">
                            {member.id}
                          </p>
                        </div>

                        
                      </div>

                      <div className="mt-5 pt-5 border-t border-white/30">
                        <p className="text-white/90 leading-relaxed font-medium">
                          {member.component}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-9 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Project Details</h2>
              </div>

              <div className="space-y-7">
                <DetailItem icon={<GraduationCap className="w-5 h-5" />} title="University" content="Sri Lanka Institute of Information Technology (SLIIT)" />
                <DetailItem icon={<GraduationCap className="w-5 h-5" />} title="Degree" content="BSc (Hons) in Information Technology" />
                <DetailItem icon={<User className="w-5 h-5" />} title="Supervisor" content="Ms. Dushani Kuruppu" />
                <DetailItem icon={<Calendar className="w-5 h-5" />} title="Academic Year" content="2026" />
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