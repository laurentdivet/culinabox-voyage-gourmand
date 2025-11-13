import { Leaf, Heart, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Produits Frais & Qualité",
    description: "Ingrédients soigneusement sélectionnés, sourcing local à plus de 50% pour l'ensemble de nos plats.",
  },
  {
    icon: Heart,
    title: "Éco-Responsabilité",
    description: "Emballages recyclables et réduction du gaspillage alimentaire grâce à l'intelligence artificielle.",
  },
  {
    icon: Award,
    title: "Savoir-Faire Culinaire",
    description: "Recettes élaborées par des chefs pour garantir goût et authenticité dans chaque plat.",
  },
  {
    icon: TrendingUp,
    title: "Innovation Continue",
    description: "Gestion optimisée des stocks et nouvelles recettes régulières pour répondre aux attentes.",
  },
];

const Values = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Valeurs
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ce qui fait la différence Délice'Go
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <value.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {value.title}
              </h3>
              <p className="opacity-90 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
