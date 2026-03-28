"use client";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  if (status === "sent") return (
    <div className="text-center py-16">
      <div className="w-12 h-12 border border-dr-gold rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-5 h-5 text-dr-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-display text-xl text-dr-black mb-2">Message Sent</h3>
      <p className="text-dr-muted font-body text-sm">We&apos;ll get back to you within a few hours.</p>
    </div>
  );

  const inputClass = "w-full border border-dr-border bg-white px-4 py-3 font-body text-sm text-dr-black placeholder-dr-gray focus:outline-none focus:border-dr-black transition-colors duration-200";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required placeholder="Full Name" value={form.name}    onChange={e => set("name",  e.target.value)} className={inputClass} />
        <input required placeholder="Email"     value={form.email}   onChange={e => set("email", e.target.value)} type="email" className={inputClass} />
      </div>
      <input placeholder="Phone (optional)" value={form.phone} onChange={e => set("phone", e.target.value)} className={inputClass} />
      <select value={form.subject} onChange={e => set("subject", e.target.value)} className={inputClass}>
        <option>General Inquiry</option>
        <option>Book a Property</option>
        <option>Property Management</option>
        <option>Partnership</option>
        <option>Other</option>
      </select>
      <textarea required rows={5} placeholder="Your message..." value={form.message} onChange={e => set("message", e.target.value)} className={inputClass + " resize-none"} />

      <button type="submit" disabled={status === "sending"}
        className="btn-gold w-full justify-center disabled:opacity-50">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm font-body text-center">Something went wrong. Please email us directly at info@dreamchi.org</p>
      )}
    </form>
  );
}
