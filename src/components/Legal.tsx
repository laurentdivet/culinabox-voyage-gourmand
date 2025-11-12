const Legal = () => {
  return (
    <section id="legal" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Informations Légales
          </h1>

          {/* Mentions Légales */}
          <div id="mentions-legales" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-secondary">
              Mentions Légales
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Éditeur du site</h3>
                <p>
                  <strong>Délice'Go</strong><br />
                  Société en cours de création<br />
                  Siège social : Bergerac, France<br />
                  Email : <a href="mailto:contact@delicego.com" className="text-secondary hover:underline">contact@delicego.com</a><br />
                  Téléphone : 07 68 07 97 64
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Directeur de la publication</h3>
                <p>
                  Le directeur de la publication du site est le représentant légal de la société Délice'Go.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hébergement</h3>
                <p>
                  Le site est hébergé par :<br />
                  [Nom de l'hébergeur]<br />
                  [Adresse de l'hébergeur]<br />
                  [Téléphone de l'hébergeur]
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Propriété intellectuelle</h3>
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de Délice'Go, 
                  sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication 
                  de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Délice'Go.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Données personnelles</h3>
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la 
                  Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
                  aux données personnelles vous concernant. Pour exercer ce droit, contactez-nous à : contact@delicego.com
                </p>
              </div>
            </div>
          </div>

          {/* Politique de Confidentialité */}
          <div id="confidentialite" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-secondary">
              Politique de Confidentialité
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Collecte des données</h3>
                <p>
                  Délice'Go collecte vos données personnelles uniquement dans le cadre de l'utilisation de notre site web et de nos services. 
                  Les informations collectées peuvent inclure :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations relatives à votre entreprise (pour les partenaires)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Utilisation des données</h3>
                <p>
                  Les données collectées sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Gérer les relations avec nos partenaires commerciaux</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Conservation des données</h3>
                <p>
                  Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été 
                  collectées, conformément à la législation en vigueur. En cas de demande de suppression, vos données seront effacées 
                  dans un délai de 30 jours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sécurité des données</h3>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
                  contre la destruction accidentelle ou illicite, la perte accidentelle, l'altération, la diffusion ou l'accès non autorisés.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Vos droits</h3>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p className="mt-2">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@delicego.com" className="text-secondary hover:underline">contact@delicego.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies</h3>
                <p>
                  Notre site peut utiliser des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre 
                  navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
                </p>
              </div>
            </div>
          </div>

          {/* Conditions Générales de Vente */}
          <div id="cgv" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-secondary">
              Conditions Générales de Vente (CGV)
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 1 - Objet</h3>
                <p>
                  Les présentes Conditions Générales de Vente régissent les relations contractuelles entre Délice'Go et ses clients, 
                  qu'il s'agisse de particuliers ou de professionnels (supermarchés, entreprises).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 2 - Produits</h3>
                <p>
                  Délice'Go propose des plats cuisinés frais, préparés quotidiennement dans notre laboratoire de production certifié. 
                  Les produits sont disponibles en libre-service dans nos supermarchés partenaires ou livrés directement aux entreprises partenaires.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 3 - Prix</h3>
                <p>
                  Les prix de nos produits sont indiqués en euros TTC. Ils incluent la TVA applicable au jour de la commande. 
                  Délice'Go se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base 
                  des tarifs en vigueur au moment de la commande.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 4 - Commandes</h3>
                <p>
                  Pour les entreprises et supermarchés partenaires, les commandes peuvent être passées par téléphone au 07 68 07 97 64 
                  ou par email à contact@delicego.com. Toute commande implique l'acceptation des présentes CGV.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 5 - Livraison</h3>
                <p>
                  Les livraisons sont effectuées quotidiennement dans nos points de vente partenaires et auprès de nos clients entreprises. 
                  Les délais de livraison sont convenus lors de la signature du contrat de partenariat. Délice'Go s'engage à respecter 
                  les horaires de livraison convenus, sauf cas de force majeure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 6 - Fraîcheur et qualité</h3>
                <p>
                  Tous nos plats sont préparés le jour même de leur livraison. Nous garantissons la fraîcheur et la qualité de nos produits. 
                  Chaque produit comporte une date limite de consommation (DLC) clairement indiquée. Les produits doivent être conservés 
                  entre 0°C et 4°C.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 7 - Paiement</h3>
                <p>
                  Pour les particuliers : le paiement s'effectue directement en caisse du supermarché partenaire.<br />
                  Pour les professionnels : les modalités de paiement sont définies dans le contrat de partenariat. 
                  Généralement, le paiement s'effectue par virement bancaire avec des délais de paiement convenus.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 8 - Réclamations</h3>
                <p>
                  Toute réclamation concernant la qualité ou la conformité de nos produits doit nous être signalée dans les 24 heures 
                  suivant la livraison ou l'achat, en contactant notre service client au 07 68 07 97 64 ou par email à contact@delicego.com.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 9 - Responsabilité</h3>
                <p>
                  Délice'Go s'engage à respecter toutes les normes d'hygiène et de sécurité alimentaire en vigueur. Notre laboratoire 
                  est certifié et régulièrement contrôlé. Nous ne saurions être tenus responsables d'une mauvaise conservation des produits 
                  après leur livraison ou leur achat.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Article 10 - Droit applicable</h3>
                <p>
                  Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute 
                  action judiciaire. À défaut, les tribunaux français seront seuls compétents.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
