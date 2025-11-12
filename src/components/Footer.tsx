import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Délice'Go</h3>
            <p className="text-sm opacity-90">
              Un voyage culinaire livré chaque jour
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <button 
                  onClick={() => scrollToSection("concept")} 
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Le Concept
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("varietes")} 
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Nos Plats
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("fonctionnement")} 
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Comment ça marche
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Professionnels</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Devenir partenaire
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Espace entreprise
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Supermarchés
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a 
                  href="#mentions-legales" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('mentions-legales');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a 
                  href="#confidentialite" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('confidentialite');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a 
                  href="#cgv" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('cgv');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Délice'Go. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
