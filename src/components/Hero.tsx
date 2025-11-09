import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";
import logo from "@/assets/delice-go-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFood}
          alt="Délice'Go fresh multicultural cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src={logo}
            alt="Délice'Go Logo"
            className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Délice'Go
          </h1>
          <p className="text-2xl md:text-3xl text-secondary font-semibold mb-4">
            Un voyage culinaire livré chaque jour
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Des plats frais et variés préparés quotidiennement dans notre laboratoire certifié,
            livrés dans vos supermarchés partenaires
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 font-semibold"
            >
              Découvrir nos plats
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-semibold bg-white/10 text-white border-white hover:bg-white hover:text-primary"
            >
              Devenir partenaire
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
