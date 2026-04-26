"use client";

import { PageShell } from "@/components/page-shell";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactClient() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Reach out for collaborations, research discussions, or questions about Smart Tea."
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* Contact Form - Main Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <div className="rounded-3xl bg-white border border-emerald-100 shadow-lg p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Send className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                    Send us a Message
                  </h2>
                  <p className="text-slate-600 mt-1">We typically reply within 1–2 business days</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input label="Full Name" placeholder="Your full name" />
                  <Input label="Email Address" placeholder="you@example.com" type="email" />
                </div>

                <Input label="Subject" placeholder="Collaboration / Research / General Inquiry" />

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700">Your Message</label>
                  <textarea
                    rows={6}
                    className="w-full rounded-3xl border border-emerald-100 px-5 py-4 text-sm resize-y min-h-[160px] focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-300 transition-all"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Contact Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail className="w-5 h-5" />} 
                  title="Email" 
                  value="it22342812@my.sliit.lk" 
                  link="mailto:it22342812@my.sliit.lk"
                />

                <ContactInfo 
                  icon={<MapPin className="w-5 h-5" />} 
                  title="Campus Location" 
                  value="SLIIT Malabe Campus" 
                />

                <ContactInfo 
                  icon={<Phone className="w-5 h-5" />} 
                  title="Phone" 
                  value="+94 77 123 4567" 
                  link="tel:+94771234567"
                />
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="rounded-3xl bg-white border border-emerald-100 p-8 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">🌱</span>
                  Research collaborations
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">☕</span>
                  Tea industry partnerships
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">🤝</span>
                  Project discussions
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}

/* Reusable Input Component */
function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-2xl border border-emerald-100 px-5 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-300 transition-all"
      />
    </div>
  );
}

/* Contact Info Item */
function ContactInfo({
  icon,
  title,
  value,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <div className="mt-1 w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-emerald-600 font-medium tracking-widest">{title}</p>
        <p className="font-medium text-slate-800 mt-0.5">{value}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block hover:bg-emerald-50 p-2 -mx-2 rounded-2xl transition-colors">
      {content}
    </a>
  ) : (
    <div className="p-2">{content}</div>
  );
}