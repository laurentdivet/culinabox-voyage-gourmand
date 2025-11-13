import { Eye, Truck, ShoppingBag, ClipboardCheck, Award } from "lucide-react";
import labProduction from "@/assets/lab-production.jpg";

const steps = [
  {
    icon: Eye,
    title: "Production Transparente",
    description: "Notre laboratoire de production est ouvert au public. Vous pouvez voir la fabrication de vos plats, garantissant transparence et fraîcheur.",
  },
  {
    icon: Truck,
    title: "Livraison Quotidienne",
    description: "Chaque jour, nos plats sont livrés frais dans nos supermarchés partenaires, entreprises partenaires ou clients fidèles, prêts à être dégustés.",
  },
  {
    icon: ShoppingBag,
    title: "Libre-Service Pratique",
    description: "Trouvez nos produits en libre-service dans votre supermarché habituel. Qualité restaurant, praticité supermarché.",
  },
  {
    icon: ClipboardCheck,
    title: "Commande & Livraison Directe",
    description: "Gestion automatique des commandes en interne. Nos partenaires supermarchés et entreprises n'ont rien à gérer : nous nous occupons de tout, de la planification à la livraison.",
  },
  {
    icon: Award,
    title: "Traçabilité & Qualité",
    description: "Plus de 50% de produits locaux et français, origine des ingrédients tracée et certifiée. Laboratoire certifié avec contrôles qualité réguliers pour votre sécurité.",
  },
];

const HowItWorks = () => {
  return (
    <section id="fonctionnement" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Comment ça Marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un modèle innovant qui allie fraîcheur artisanale et distribution moderne
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src={labProduction}
              alt="Laboratoire de production Délice'Go"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-10 rounded-2xl shadow-lg border border-border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-card-foreground mb-4 text-center">
            L'Innovation Délice'Go
          </h3>
          <p className="text-muted-foreground text-center text-lg">
            Contrairement aux plats préparés industriels, Délice'Go propose une{" "}
            <span className="font-semibold text-foreground">cuisine fraîche, artisanale et multi-culturelle</span> en libre-service avec prix compétitifs et fraîcheur garantie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
