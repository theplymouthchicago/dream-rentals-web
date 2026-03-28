import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us — Dream Rentals Chicago",
  description: "Get in touch with Dream Rentals. Book a property, inquire about property management, or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dr-black pt-32 pb-20 section-pad">
        <div className="max-w-container mx-auto">
          <p className="label-tag mb-4">Contact Us</p>
          <h1 className="font-display text-display-xl text-white mb-4">Let&apos;s Talk</h1>
          <p className="text-white/50 font-body text-lg max-w-md">
            Questions about a property, interested in management services, or just want to say hello — we respond fast.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-display text-display-sm text-dr-black mb-8">Get in Touch</h2>
            <div className="space-y-8">
              {[
                { label: "Address",  value: "323 E Wacker Dr\nChicago, IL 60601" },
                { label: "Email",    value: "info@dreamchi.org",    href: "mailto:info@dreamchi.org" },
                { label: "Phone",    value: "(312) 471-0454",        href: "tel:+13124710454" },
                { label: "Hours",    value: "Monday – Friday\n9AM – 5PM CST" },
              ].map(item => (
                <div key={item.label} className="flex gap-6 pb-8 border-b border-dr-border">
                  <div className="text-label uppercase tracking-[0.15em] text-dr-gold font-body w-20 shrink-0 mt-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-body text-dr-black hover:text-dr-gold transition-colors duration-200 whitespace-pre-line">{item.value}</a>
                  ) : (
                    <p className="font-body text-dr-muted whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 aspect-[4/3] overflow-hidden"
              style={{ filter: "grayscale(1) contrast(1.05) brightness(0.9)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970!2d-87.61897!3d41.88638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca57b5cf4ab%3A0x5fee6eaefa67e17a!2s323%20E%20Wacker%20Dr%2C%20Chicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%" height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dream Rentals Office — 323 E Wacker Dr"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display text-display-sm text-dr-black mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
