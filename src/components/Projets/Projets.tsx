import useFancybox from "../../hooks/useFancybox";

function Projets() {
  const [fancyboxRef] = useFancybox({});

  return (
    <section id="projets" className="flex items-center justify-center">
      <div className="container">
        <div className="md:py-20 py-10">
          <h2 className="text-3xl font-bold">Projets</h2>
          <p className="text-base font-medium mb-8">
            Des idées transformées en actions concrètes, au service de l’impact
            et de la créativité.
          </p>
          <div className="space-y-12" ref={fancyboxRef}>
            {/* Projet 1 */}
            <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
              <a data-fancybox="gallery" href="/images/mobile.jpg" className="w-full lg:w-1/2 h-64">
                <img
                  src="/images/mobile.jpg"
                  alt="Projet 1"
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="p-6 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-xl font-semibold mb-4">
                  INTELLIGENT MOBILITY TECHNOLOGIES
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Création et gestion de campagnes publicitaires</li>
                  <li>Gestion des réseaux sociaux</li>
                  <li>Rédaction et envoi de SMS marketing</li>
                  <li>Création de guides et supports pour les chauffeurs</li>
                  <li>Veille concurrentielle et analyse de marché</li>
                  <li>Création de newsletters et d’emails marketing</li>
                </ul>
              </div>
            </div>
            {/* Projet 2 */}
            <div className="flex flex-col-reverse lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-xl font-semibold mb-4">
                  BIBLIOTHÈQUE RAJAONA SIMEON RÉGIS
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Création de contenus</li>
                  <li>Élaboration de stratégies de communication</li>
                  <li>Animation de la communauté</li>
                  <li>Analyse et reporting</li>
                  <li>Veille concurrentielle et analyse de marché</li>
                </ul>
              </div>
              <a data-fancybox="gallery" href="/images/collage.webp" className="w-full lg:w-1/2 h-64">
                <img
                  src="/images/collage.webp"
                  alt="Projet 2"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
            {/* Projet 3 */}
            <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
              <a data-fancybox="gallery" href="/images/collage-2.webp" className="w-full lg:w-1/2 h-64">
                <img
                  src="/images/collage-2.webp"
                  alt="Projet 3"
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="p-6 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-xl font-semibold mb-4">
                  ENSEIGNEMENT ET CRÉATION DE PROGRAMME ÉDUCATIF
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Enseignement et soutien scolaire</li>
                  <li>Création d’un programme sur mesure</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Partager mes connaissances est une véritable passion : j'aime
                  guider les autres et enrichir leur vie de manière
                  significative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projets;
