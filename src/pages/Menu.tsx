import Layout from "@/components/Layout";
import breadBasketImage from "@/assets/bread-basket.jpg";

const menuCategories = [
  {
    name: "Artisan Breads",
    items: [
      { name: "Classic Sourdough", price: "$8", desc: "48-hour fermented, stone-baked" },
      { name: "Rustic Country Loaf", price: "$7", desc: "Hearty wheat & rye blend" },
      { name: "Olive Rosemary Focaccia", price: "$9", desc: "Mediterranean herbs, Kalamata olives" },
      { name: "Honey Oat Sandwich Loaf", price: "$7", desc: "Soft, lightly sweetened with local honey" },
      { name: "Seeded Multigrain", price: "$8", desc: "Flax, sunflower, sesame, and pumpkin seeds" },
    ],
  },
  {
    name: "Pastries & Viennoiserie",
    items: [
      { name: "Butter Croissant", price: "$4.50", desc: "36-layer laminated perfection" },
      { name: "Pain au Chocolat", price: "$5", desc: "Dark chocolate batons in flaky dough" },
      { name: "Almond Croissant", price: "$5.50", desc: "Filled with frangipane, topped with sliced almonds" },
      { name: "Morning Bun", price: "$4", desc: "Orange zest & cinnamon sugar" },
    ],
  },
  {
    name: "Cookies & Bars",
    items: [
      { name: "Brown Butter Chocolate Chip", price: "$3.50", desc: "Sea salt finish, soft center" },
      { name: "Oatmeal Raisin Walnut", price: "$3.50", desc: "Chewy, spiced with cinnamon" },
      { name: "Lemon Bars", price: "$4", desc: "Buttery shortbread, tangy curd" },
      { name: "Blondies", price: "$4", desc: "Brown sugar, white chocolate, pecans" },
    ],
  },
  {
    name: "Cakes & Specials",
    items: [
      { name: "Naked Berry Cake", price: "$45", desc: "Vanilla sponge, whipped cream, seasonal berries" },
      { name: "Carrot Cake", price: "$42", desc: "Cream cheese frosting, candied walnuts" },
      { name: "Lemon Olive Oil Cake", price: "$38", desc: "Light, moist, dusted with powdered sugar" },
      { name: "Custom Orders", price: "Inquire", desc: "Birthdays, showers, celebrations" },
    ],
  },
];

const Menu = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={breadBasketImage} alt="Assorted artisan breads" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-brown/55" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">Fresh & Seasonal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-background">Our Menu</h1>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <p className="text-center font-body text-muted-foreground mb-12 max-w-xl mx-auto">
            Everything is baked fresh. Menu varies by season and availability. Pre-orders recommended for whole cakes.
          </p>

          <div className="space-y-14">
            {menuCategories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground whitespace-nowrap">{category.name}</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-medium text-foreground">{item.name}</h3>
                        <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
