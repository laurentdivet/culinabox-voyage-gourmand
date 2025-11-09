import { Sparkles, Users, Leaf } from "lucide-react";

const Concept = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Le Concept Délice'Go
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une révolution dans l'univers des plats préparés : fraîcheur, diversité et transparence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Fraîcheur Garantie
            </h3>
            <p className="text-muted-foreground">
              Production quotidienne dans notre laboratoire certifié, visible par tous.
              Livraison immédiate dans vos supermarchés partenaires.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Diversité Culturelle
            </h3>
            <p className="text-muted-foreground">
              Sushis, poké bowls, plats traditionnels français et sénégalais... 
              Un nouveau voyage culinaire chaque jour !
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Éco-Responsable
            </h3>
            <p className="text-muted-foreground">
              Plus de 50% de produits locaux, emballages recyclables et gestion intelligente 
              des stocks pour réduire le gaspillage.
            </p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Notre Mission
          </h3>
          <p className="text-lg max-w-4xl mx-auto">
            Offrir aux consommateurs une expérience culinaire diversifiée, pratique et accessible,
            tout en garantissant fraîcheur, qualité et transparence. Délice'Go révolutionne 
            les plats préparés en proposant une alternative gourmande, internationale et fraîche,
            adaptée aux modes de consommation modernes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Concept;
