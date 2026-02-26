import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-bakery.jpg";
import sourdoughImage from "@/assets/bread-sourdough.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import cakeImage from "@/assets/cake.jpg";
import cookiesImage from "@/assets/cookies.jpg";
import bakingImage from "@/assets/baking-process.jpg";
import exteriorImage from "@/assets/bakery-exterior.jpg";
import breadBasketImage from "@/assets/bread-basket.jpg";

const images = [
  { src: heroImage, alt: "Our bakery shelves full of fresh bread", span: "col-span-2 row-span-2" },
  { src: sourdoughImage, alt: "Freshly baked sourdough loaf", span: "" },
  { src: pastriesImage, alt: "Butter croissants", span: "" },
  { src: cookiesImage, alt: "Chocolate chip cookies cooling", span: "col-span-2" },
  { src: cakeImage, alt: "Berry layer cake", span: "" },
  { src: bakingImage, alt: "Kneading bread dough by hand", span: "" },
  { src: exteriorImage, alt: "Our charming bakery storefront", span: "" },
  { src: breadBasketImage, alt: "Assorted breads in a basket", span: "" },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding text-center">
        <div className="container-narrow animate-fade-in">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-3">A Peek Inside</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Moments from our kitchen, our market stand, and the treats we love to make.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg ${img.span} opacity-0 animate-fade-in`}
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover min-h-[180px] hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
