export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];

  const otherLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Case Study", href: "/case-studies" },
    { label: "FAQs", href: "/faqs" },
  ];

  const infoLinks = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Support", href: "/support" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              {/* Logo mark */}
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber text-black font-extrabold">
                KV
              </div>
              <div className="text-2xl font-semibold tracking-tight">
                Kraft Venture
              </div>
            </div>

            <p className="mt-6 max-w-md text-white/60 leading-relaxed">
              Connect with us on social media and stay updated on the latest
              news, product updates, and industry insights.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              <SocialIcon href="#" label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18.3 2H21l-6.6 7.5L22 22h-6.2l-4.8-6.4L5.4 22H2.7l7.1-8.2L2 2h6.3l4.3 5.9L18.3 2Zm-1.1 18h1.5L7.8 3.9H6.2L17.2 20Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 6.5A1.5 1.5 0 1 1 6.5 3a1.5 1.5 0 0 1 0 3.5ZM5 21V8h3v13H5Zm6 0V8h2.9v1.8h.1c.4-.8 1.5-2 3.4-2 3.6 0 4.3 2.4 4.3 5.6V21h-3v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21h-3Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Right columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <FooterColumn title="Quick Links" links={quickLinks} />
              <FooterColumn title="Others Links" links={otherLinks} />
              <FooterColumn title="Info" links={infoLinks} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Kraft Venture. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-base font-semibold">{title}</h4>
      <ul className="mt-5 space-y-4">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-white/60 transition hover:text-amber"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={[
        "grid h-10 w-10 place-items-center rounded-full",
        "border border-white/10 bg-white/5 text-white/80",
        "transition hover:border-amber/60 hover:text-amber hover:bg-white/10",
        "focus:outline-none focus:ring-2 focus:ring-amber/60 focus:ring-offset-2 focus:ring-offset-black",
      ].join(" ")}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
