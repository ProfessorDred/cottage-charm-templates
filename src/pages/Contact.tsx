import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding text-center">
        <div className="container-narrow animate-fade-in">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Have a question or want to place a custom order? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Bakery Details</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Location", value: "123 Meadow Lane\nWillowbrook, CA 94123" },
                  { icon: Clock, label: "Hours", value: "Friday – Sunday\n8:00 AM – 2:00 PM" },
                  { icon: Phone, label: "Phone", value: "(555) 234-5678" },
                  { icon: Mail, label: "Email", value: "hello@honeyandwheat.com" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                      <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-card rounded-lg">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Ordering Info</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Pre-orders for weekend pickup must be placed by Wednesday at 5pm. 
                  Custom cakes require at least one week's notice. We do not ship — pickup only.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              {submitted ? (
                <div className="h-full flex items-center justify-center p-8 bg-card rounded-lg">
                  <div className="text-center">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                    <p className="font-body text-muted-foreground">We'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30">
                      <option>General Inquiry</option>
                      <option>Pre-Order</option>
                      <option>Custom Cake</option>
                      <option>Catering</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                      placeholder="Tell us what you need..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
