import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Varieties from "@/components/Varieties";
import HowItWorks from "@/components/HowItWorks";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Legal from "@/components/Legal";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Empêcher la restauration automatique du scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Forcer le scroll en haut immédiatement
    window.scrollTo(0, 0);
    
    // Mise à jour des métadonnées pour le partage sur les réseaux sociaux
    document.title = "Délice'Go - Un Voyage Culinaire Livré Chaque Jour";
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Des plats frais et variés préparés quotidiennement dans notre laboratoire certifié, livrés dans vos supermarchés partenaires. Cuisine du monde, fraîcheur garantie.');

    // Open Graph pour les réseaux sociaux
    const ogTags = [
      { property: 'og:title', content: "Délice'Go - Un Voyage Culinaire Livré Chaque Jour" },
      { property: 'og:description', content: 'Des plats frais et variés préparés quotidiennement. Cuisine du monde, fraîcheur garantie.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://delicego.com' },
      { property: 'og:site_name', content: "Délice'Go" },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Twitter Card
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Délice'Go - Un Voyage Culinaire Livré Chaque Jour" },
      { name: 'twitter:description', content: 'Des plats frais et variés préparés quotidiennement. Cuisine du monde, fraîcheur garantie.' },
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Hero />
      <Concept />
      <Varieties />
      <HowItWorks />
      <Values />
      <Contact />
      <Legal />
      <Footer />
    </div>
  );
};

export default Index;
