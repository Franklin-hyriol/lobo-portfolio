function CallToAction() {
  return (
    <section className="flex items-center justify-center bg-base-200">
      <div className="container">
        <div className="md:py-20 py-10">
          <div className="flex lg:flex-row flex-col gap-4 lg:gap-10">
            <div className="lg:flex-3/5 flex-1">
              <h2 className="text-3xl font-bold">
                Besoin d’une experte en marketing digital pour booster votre
                projet ? Contactez-moi et parlons de votre projet !
              </h2>

              <p className="text-lg font-medium">
                Say Hello at{" "}
                <a className="underline text-secondary font-semibold" href="mailto:murah.nyantra@gmail.com">murah.nyantra@gmail.com</a>{" "}
                or <a className="underline text-secondary font-semibold" href="tel:+261345381766">+261 34 53 81 766</a>
              </p>
            </div>

            <div className="lg:flex-2/5 flex-1 px-10 lg:px-0">
              <h3 className="text-xl font-bold mb-2">Faites appel à moi pour :</h3>
              <ul className="list-disc list-inside space-y-1">
                <li className="before:content-[' ']">Stratégie marketing digital</li>
                <li className="before:content-[' ']">Gestion de campagnes (SEO, SEA, réseaux sociaux)</li>
                <li className="before:content-[' ']">Création de contenu engageant</li>
                <li className="before:content-[' ']">Email marketing & automation</li>
                <li className="before:content-[' ']">Optimisation de la visibilité en ligne</li>
                <li className="before:content-[' ']">Analyse des performances & reporting</li>
                <li className="before:content-[' ']">Stratégie d’acquisition & fidélisation clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
