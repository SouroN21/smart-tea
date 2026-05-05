"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Leaf, Camera, TrendingUp, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center pt-20 pb-16 lg:pt-0">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100 text-emerald-700 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  SLIIT Final Year Research 2026
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-tight"
              >
                Smart Tea
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  AI for Sri Lanka’s Tea
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 max-w-lg"
              >
                An intelligent mobile solution that brings AI-powered quality classification, 
                disease detection, price prediction, and yield forecasting to Sri Lanka’s tea industry.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <ButtonLink href="/domain" variant="primary">
                  Explore the Domain
                </ButtonLink>
                <ButtonLink href="/about" variant="ghost">
                  Meet the Team
                </ButtonLink>
              </motion.div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-emerald-700">4</div>
                  <div className="text-xs text-slate-500 tracking-widest">AI MODULES</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-emerald-700">2026</div>
                  <div className="text-xs text-slate-500 tracking-widest">FINAL YEAR</div>
                </div>
                 <div className="text-center">
                  <div className="text-2xl font-semibold text-emerald-700">Group</div>
                  <div className="text-xs text-slate-500 tracking-widest">25-26j-343</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-emerald-700">SLIIT</div>
                  <div className="text-xs text-slate-500 tracking-widest">MALABE</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Mock Mobile App */}
                <div className="bg-white rounded-[3rem] shadow-2xl border border-emerald-200 p-3 w-80 mx-auto">
                  <div className="bg-emerald-700 rounded-[2.25rem] overflow-hidden aspect-[9/19] relative">
                    {/* App Screen Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">☕</div>
                        <div className="text-2xl font-semibold">Smart Tea</div>
                        <div className="text-sm opacity-80 mt-1">AI for Better Tea</div>
                      </div>
                    </div>

                    {/* Floating tea leaves decoration */}
                    <motion.div
                      animate={{ rotate: [0, 15, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 6 }}
                      className="absolute top-12 right-8 text-4xl opacity-30"
                    >
                      🍃
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -20, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 7, delay: 1 }}
                      className="absolute bottom-20 left-10 text-5xl opacity-20"
                    >
                      🍂
                    </motion.div>
                  </div>
                </div>

                {/* Decorative floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-4 border border-emerald-100"
                >
                  <div className="text-emerald-600 text-2xl">📸</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 1.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-emerald-100"
                >
                  <div className="text-emerald-600 text-2xl">📈</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-900">Four AI-Powered Solutions</h2>
            <p className="mt-3 text-slate-600 max-w-md mx-auto">
              Smart Tea combines multiple AI technologies to support every stage of tea production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Quality Classification",
                desc: "AI vision system to grade tea leaves accurately and consistently.",
                color: "emerald",
              },
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Disease Detection",
                desc: "Early identification of tea leaf diseases to prevent crop loss.",
                color: "teal",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Price Prediction",
                desc: "Hybrid model with Explainable AI for accurate market price forecasting.",
                color: "emerald",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Yield Prediction",
                desc: "Forecast future tea yield to support better planning and resource allocation.",
                color: "teal",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-emerald-100 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Ready to explore Smart Tea?
            </h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Discover our research domain, milestones, documents, and presentations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/domain">Explore Domain</ButtonLink>
              <ButtonLink href="/milestones" variant="ghost">View Timeline</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}