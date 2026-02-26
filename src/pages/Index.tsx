import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-bakery.jpg";
import sourdoughImage from "@/assets/bread-sourdough.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import cakeImage from "@/assets/cake.jpg";

const features = [
  {
    title: "Artisan Breads",
    description: "Slow-fermented sourdough and rustic loaves baked fresh every morning.",
    image: sourdoughImage,
  },
  {
    title: "Pastries & Croissants",
    description: "Buttery, flaky layers of goodness made with real European butter.",
    image: pastriesImage,
  },
  {
    title: "Custom Cakes",
    description: "Celebrate life's sweet moments with our handcrafted layer cakes.",
    image: cakeImage,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Freshly baked breads and pastries in our cottage bakery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-brown/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">Est. 2019 · Willowbrook, CA</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6">
            Honey & Wheat
          </h1>
          <p className="font-body text-lg sm:text-xl text-background/85 mb-8 max-w-xl mx-auto">
            Small-batch, handcrafted baked goods made with love from our cottage kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-block px-8 py-3.5 bg-accent text-accent-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              View Our Menu
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 border-2 border-background/40 text-background font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-background/10 transition-colors"
            >
              Place an Order
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="section-padding text-center">
        <div className="container-narrow">
          <div className="decorative-line mb-6" />
          <p className="font-display text-2xl sm:text-3xl text-foreground italic max-w-2xl mx-auto leading-relaxed">
            "From our oven to your table — baked with patience, served with heart."
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-2">What We Bake</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Our Specialties</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <div
                key={item.title}
                className="group opacity-0 animate-slide-up"
                style={{ animationDelay: `${i * 200}ms`, animationFillMode: "forwards" }}
              >
                <div className="overflow-hidden rounded-lg mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Order?</h2>
          <p className="font-body text-muted-foreground mb-8">
            We take orders for pickup every Friday through Sunday. Pre-order by Wednesday to guarantee your favorites.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
