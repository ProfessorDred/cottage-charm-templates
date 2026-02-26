import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Honey & Wheat</h3>
            <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
              Handcrafted with love from our cottage kitchen to your table. Every loaf tells a story.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Menu", "About", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Visit Us</h4>
            <div className="font-body text-sm text-primary-foreground/80 space-y-2">
              <p>123 Meadow Lane</p>
              <p>Willowbrook, CA 94123</p>
              <p className="pt-2">Open Fri–Sun, 8am–2pm</p>
              <p>(555) 234-5678</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Honey & Wheat Cottage Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
