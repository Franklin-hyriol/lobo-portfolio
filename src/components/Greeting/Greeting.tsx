import { TbTargetArrow } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";

function Greeting() {
  return (
    <section className="min-h-[calc(100vh-70px)] flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col md:flex-row h-fit gap-8 md:gap-18 py-20">
          <picture className="block flex-1 h-auto before-img after-img relative mb-8 md:mb-0">
            <img
              src="/images/loboR.png"
              alt="Greeting Image"
              className="w-full md:w-[90%] h-full object-cover object-top m-auto border-3 border-base-100 md:mx-auto rounded-3xl"
            />
          </picture>

          <div className="flex flex-1 flex-col justify-center gap-6 md:gap-10">
            <h1 className="text-3xl md:text-5xl/13 font-black text-center md:text-left">
              <span className="text-primary">Bonjour, Je suis Lobo</span>
              <br />
              <span>Responsable marketing spécialisée en digital</span>
            </h1>

            <ul className="flex flex-row items-center justify-center md:justify-start gap-5 text-lg font-bold text-accent">
              <li className="flex items-center gap-2">
                <TbTargetArrow />
                Stratégie
              </li>
              <li className="flex items-center gap-2">
                <VscGraph />
                Analyse
              </li>
              <li className="flex items-center gap-2">
                <IoColorPaletteOutline />
                Créativité
              </li>
            </ul>

            <p className="text-base font-bold text-center md:text-left">
              En tant que Responsable Marketing spécialisée dans le digital, je
              conçois et mets en œuvre des stratégies innovantes pour renforcer
              la visibilité et la performance des marques. Ce qui me passionne
              dans ce métier, c’est la possibilité de combiner créativité et
              réflexion stratégique. J’aime explorer de nouvelles idées, repérer
              des concepts novateurs et m’inspirer des dernières tendances pour
              rester en avance et proposer des campagnes percutantes.
            </p>

            <p className="text-neutral-content text-base text-center md:text-left">
              Je suis ouverte à de nouvelles opportunités d'emploi - si vous
              souhaitez discuter de votre projet, je suis disponible à l'adresse{" "}
              <a
                href="mailto:murah.nyantra@gmail.com"
                className="underline text-base-content"
              >
                murah.nyantra@gmail.com
              </a>{" "}
              ou au{" "}
              <a
                href="tel:+261345381766"
                className="underline text-base-content"
              >
                +261 34 53 81 766
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;

