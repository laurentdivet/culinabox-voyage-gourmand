import { ChefHat } from "lucide-react";

const cuisines = [
  {
    emoji: "🍣",
    title: "Sushi & Spécialités Japonaises",
    description: "Makis, sashimis et nigiris préparés avec du poisson frais chaque jour",
  },
  {
    emoji: "🥗",
    title: "Poké Bowls & Salades",
    description: "Bowls colorés et équilibrés avec des ingrédients frais et sains",
  },
  {
    emoji: "🥘",
    title: "Plats Traditionnels",
    description: "Cuisine française, sénégalaise, ivoirienne... Un tour du monde dans votre assiette",
  },
  {
    emoji: "🍜",
    title: "Woks & Nouilles",
    description: "Nouilles sautées et woks aux légumes croquants",
  },
];

const Varieties = () => {
  return (
    <section id="varietes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
            <ChefHat className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Carte Variée
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un voyage culinaire différent chaque jour. Des saveurs du monde entier,
            préparées avec passion et expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cuisines.map((cuisine, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-4">{cuisine.emoji}</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {cuisine.title}
              </h3>
              <p className="text-muted-foreground">{cuisine.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Pour tous les goûts :</span> végétariens,
            amateurs de plats exotiques, ou personnes cherchant un repas rapide mais équilibré
          </p>
        </div>
      </div>
    </section>
  );
};

export default Varieties;
