import axios from "axios";
import React, { useState } from "react";

const cx = (...c) => c.filter(Boolean).join(" ");

export default function GetInTouchPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    subject: "",
    consent: false,
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!form.consent) {
      setStatus({ type: "error", message: "Please accept the Privacy Policy to continue." });
      return;
    }

    // ✅ Replace with your Supabase insert / API later.
    // For now, just simulate success.
    setStatus({ type: "loading", message: "Submitting..." });
    // await new Promise((r) => setTimeout(r, 700));

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_URL}submit`, {
        name: form.name,
        email: form.email,
        brand: form.brand,
        subject: form.subject
      });
      setStatus({ type: "success", message: response.data.message });
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong, Please try again";
      setStatus({ type: "error", message: msg });
    }
    setForm({ name: "", email: "", brand: "", subject: "", consent: false });
  };

  return (
    <main className="relative min-h-screen">

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 md:px-8">
        {/* Heading */}
        <section className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Reach Out, Anytime
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
            From sales to support, we’re here to help. Message us to see how we can
            enhance your workflow.
          </p>
        </section>

        {/* Form card */}
        <section className="mt-10 sm:mt-12">
          <div
            className="
              relative mx-auto w-full max-w-3xl
              rounded-3xl border border-white/10
              bg-white/[0.06] backdrop-blur
              shadow-[0_18px_70px_rgba(0,0,0,0.7)]
              p-5 sm:p-8 md:p-10
              overflow-hidden
            "
          >

            <form className="relative space-y-6" onSubmit={onSubmit}>
              <Field
                label="Your Name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
                type="text"
              />

              <Field
                label="Your Email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Enter your email"
                type="email"
              />

              <Field
                label="Your Brand"
                name="brand"
                value={form.brand}
                onChange={onChange}
                placeholder="Your Brand Name"
                type="text"
              />

              <TextArea
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Type your Subject here"
              />

              {/* Consent row */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={onChange}
                  className="
                    mt-1 h-4 w-4 rounded border border-white/20 bg-white/5
                    accent-[#FFBF00]
                  "
                />
                <label htmlFor="consent" className="text-sm text-white/70">
                  By reaching out to us, you agree to our{" "}
                  <a href="/privacy" className="text-amber font-semibold hover:opacity-90">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Status message */}
              {status.type !== "idle" && (
                <div
                  className={cx(
                    "rounded-2xl border px-4 py-3 text-sm",
                    status.type === "success" &&
                    "border-amber/30 bg-amber/10 text-white/90",
                    status.type === "error" &&
                    "border-red-500/30 bg-red-500/10 text-white/90",
                    status.type === "loading" &&
                    "border-white/10 bg-white/5 text-white/70"
                  )}
                >
                  {status.message}
                </div>
              )}

              {/* Button row */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="
                    inline-flex items-center gap-3 rounded-full
                    bg-amber pl-2 pr-6 py-2.5 font-semibold text-black
                    shadow-[0_6px_16px_rgba(255,191,0,0.35)]
                    hover:brightness-95 active:scale-[0.99] transition
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100
                  "
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-black/10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ----------------- Input components ----------------- */

function Field({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/90">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          mt-3 w-full rounded-2xl
          border border-white/10 bg-white/5
          px-4 py-3 text-sm sm:text-base
          text-white placeholder:text-white/35
          outline-none transition
          focus:border-amber/40 focus:ring-2 focus:ring-amber/25
        "
      />
    </div>
  );
}

function TextArea({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/90">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="
          mt-3 w-full rounded-2xl
          border border-white/10 bg-white/5
          px-4 py-3 text-sm sm:text-base
          text-white placeholder:text-white/35
          outline-none transition
          focus:border-amber/40 focus:ring-2 focus:ring-amber/25
          resize-none
        "
      />
    </div>
  );
}
