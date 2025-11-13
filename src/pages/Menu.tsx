import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

// Liste des plats - à compléter avec vos données
const dishes: Dish[] = [
  // Exemple - à remplacer par vos vrais plats
  {
    id: 1,
    name: "Exemple de Plat",
    description: "Description du plat à venir",
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

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header de la page */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-primary-foreground hover:text-primary-foreground/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Notre Carte
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Découvrez notre sélection de plats frais, préparés quotidiennement avec passion
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Grille de plats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {dishes.map((dish) => (
              <Card key={dish.id} className="hover:shadow-lg transition-shadow">
                {dish.image && (
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
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
                🌡️ À conserver entre 0°C et 2°C
              </p>
              <p>
                📅 Date limite de consommation indiquée sur chaque produit
              </p>
              <p>
                ℹ️ Pour toute information sur les allergènes, consultez l'étiquette de votre produit
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
