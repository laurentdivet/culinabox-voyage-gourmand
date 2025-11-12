import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Rejoignez l'Aventure
            </h2>
            <p className="text-xl text-muted-foreground">
              Vous êtes un supermarché, une entreprise ou simplement curieux ?
              Contactez-nous pour en savoir plus sur Délice'Go
            </p>
          </div>

          <div className="bg-card p-10 rounded-2xl shadow-xl border border-border">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">contact@delicego.com</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                <p className="text-muted-foreground">07 68 07 97 64</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground">Bergerac, France</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button
                size="lg"
                className="text-lg px-10 py-6 font-semibold"
              >
                Devenir Partenaire
              </Button>
              <p className="text-sm text-muted-foreground">
                Supermarchés, entreprises, restaurateurs... parlons ensemble !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
