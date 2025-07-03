import { CgDesignmodo } from "react-icons/cg";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";
import { SiGooglemarketingplatform, SiMicrostrategy } from "react-icons/si";

function Skills() {
  return (
    <section
      id="competences"
      className="flex items-center justify-center bg-base-200"
    >
      <div className="container">
        <div className="md:py-20 py-10">
          <h2 className="text-3xl font-bold">Compétences</h2>

          <p className="text-base font-medium mb-8">
            Je possède une expertise en stratégie marketing, analyse de données,
            gestion de campagnes publicitaires et création de contenu, tout en
            ayant une expérience dans l’enseignement du français et de
            l’anglais, ce qui renforce mes compétences en communication, en
            créativité et en leadership d’équipe.
          </p>

          <picture className="block w-full h-auto mb-8">
            <img
              src="/images/skills.jpg"
              alt="Skills"
              className="w-full h-full object-cover rounded-xl"
            />
          </picture>

          <ul className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between">
            <li className="flex items-center flex-col gap-2">
              <span className="w-20 h-20 bg-secondary flex items-center justify-center rounded-md mb-2 p-3">
                <SiGooglemarketingplatform className="text-base-100 text-9xl" />
              </span>
              <span className="text-2xl font-bold">Marketing digital</span>
            </li>

            <li className="flex items-center flex-col gap-2">
              <span className="w-20 h-20 bg-secondary flex items-center justify-center rounded-md mb-2 p-3">
                <SiMicrostrategy className="text-base-100 text-9xl" />
              </span>
              <span className="text-2xl font-bold">Stratégie marketing</span>
            </li>

            <li className="flex items-center flex-col gap-2">
              <span className="w-20 h-20 bg-secondary flex items-center justify-center rounded-md mb-2 p-3">
                <CgDesignmodo className="text-base-100 text-9xl" />
              </span>
              <span className="text-2xl font-bold">Graphic design</span>
            </li>

            <li className="flex items-center flex-col gap-2">
              <span className="w-20 h-20 bg-secondary flex items-center justify-center rounded-md mb-2 p-3">
                <GiGiftOfKnowledge className="text-base-100 text-9xl" />
              </span>
              <span className="text-2xl font-bold">Pédagogie</span>
            </li>

            <li className="flex items-center flex-col gap-2 col-span-2 md:col-span-1">
              <span className="w-20 h-20 bg-secondary flex items-center justify-center rounded-md mb-2 p-3 mx-auto">
                <MdMarkEmailRead className="text-base-100 text-9xl" />
              </span>
              <span className="text-2xl font-bold text-center">
                Email marketing
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
