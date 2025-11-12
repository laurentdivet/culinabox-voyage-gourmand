import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isVegan?: boolean;
}

// Cette liste sera mise à jour avec vos plats
const dishes: Dish[] = [
  // Exemple de structure - à remplacer par vos plats
  {
    id: 1,
    name: "Exemple de Plat",
    description: "Description du plat",
    price: "8.90€",
    category: "Cuisine Japonaise",
    isVegetarian: false,
    isVegan: false,
  },
];

const categories = [
  "Tous",
  "Cuisine Japonaise",
  "Poké Bowls",
  "Cuisine Française",
  "Cuisine Africaine",
  "Woks & Nouilles",
  "Salades",
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Carte
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre sélection de plats frais, préparés quotidiennement avec passion
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-secondary/80 transition-colors text-sm"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Grille de plats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {dishes.map((dish) => (
            <Card key={dish.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{dish.name}</CardTitle>
                  <span className="text-lg font-bold text-primary">{dish.price}</span>
                </div>
                <Badge variant="outline" className="w-fit">
                  {dish.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {dish.description}
                </CardDescription>
                <div className="flex gap-2 flex-wrap">
                  {dish.isVegetarian && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      🌱 Végétarien
                    </Badge>
                  )}
                  {dish.isVegan && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      🌿 Vegan
                    </Badge>
                  )}
                  {dish.allergens && dish.allergens.length > 0 && (
                    <Badge variant="outline" className="text-xs">
                      Allergènes: {dish.allergens.join(", ")}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message si liste vide */}
        {dishes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Notre carte sera bientôt disponible. Revenez vite !
            </p>
          </div>
        )}

        {/* Informations supplémentaires */}
        <div className="mt-16 max-w-4xl mx-auto bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-4">
            Informations Importantes
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p>
              ✨ Tous nos plats sont préparés quotidiennement dans notre laboratoire certifié
            </p>
            <p>
              🌡️ À conserver entre 0°C et 4°C
            </p>
            <p>
              📅 Date limite de consommation indiquée sur chaque produit
            </p>
            <p>
              ℹ️ Pour toute information sur les allergènes, n'hésitez pas à nous contacter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
