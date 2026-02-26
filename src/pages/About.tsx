import Layout from "@/components/Layout";
import bakingImage from "@/assets/baking-process.jpg";
import exteriorImage from "@/assets/bakery-exterior.jpg";

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={exteriorImage} alt="Honey & Wheat bakery exterior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-brown/55" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-background">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="decorative-line !mx-0 mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                A Dream Baked from Scratch
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Honey & Wheat began in 2019 as a simple dream: to bake bread the way it was meant to be — slowly, 
                  with real ingredients, and a whole lot of heart. What started at a farmers' market table has grown 
                  into a beloved cottage bakery nestled in the heart of Willowbrook.
                </p>
                <p>
                  Our baker, Emma, trained under artisan bakers in France and Northern California before 
                  returning home to open her own kitchen. Every recipe is developed with care, using organic 
                  flour, local honey, seasonal fruits, and European-style butter.
                </p>
                <p>
                  We believe that bread is more than food — it's a ritual, a connection, a way of slowing down 
                  in a fast-paced world. That philosophy guides everything we do.
                </p>
              </div>
            </div>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <img
                src={bakingImage}
                alt="Hands kneading bread dough"
                className="image-warm w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-2">What We Believe</p>
            <h2 className="font-display text-3xl font-bold text-foreground">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "Quality First", text: "No shortcuts. Organic flour, real butter, and time-honored techniques." },
              { title: "Community Roots", text: "We source locally whenever possible and love our farmers' market family." },
              { title: "Sustainability", text: "Minimal waste, compostable packaging, and a lighter footprint in every loaf." },
            ].map((v, i) => (
              <div
                key={v.title}
                className="p-6 opacity-0 animate-slide-up"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
