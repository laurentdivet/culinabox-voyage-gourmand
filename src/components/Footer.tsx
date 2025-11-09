const Footer = () => {
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
              <li><a href="#concept" className="hover:text-secondary transition-colors">Le Concept</a></li>
              <li><a href="#varietes" className="hover:text-secondary transition-colors">Nos Plats</a></li>
              <li><a href="#fonctionnement" className="hover:text-secondary transition-colors">Comment ça marche</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Professionnels</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-secondary transition-colors">Devenir partenaire</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Espace entreprise</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Supermarchés</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-secondary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">CGV</a></li>
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
