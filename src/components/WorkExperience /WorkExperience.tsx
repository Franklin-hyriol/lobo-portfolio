import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./WorkExperience.scss";
import "swiper/css";
import "swiper/css/navigation";
import WorkCard from "../WorkCard/WorkCard";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const workExperienceData = [
  {
    img: "/images/biblio.jpg",
    alt: "BIBLIOTHEQUE RAJAONA SIMEON REGIS logo",
    link: "https://www.facebook.com/p/Tranomboky-iombonana-Rajaona-Sim%C3%A9on-Regis--100068511131575/",
    linkText: "Page Facebook",
    title: "Responsable marketing bénévole et community manager",
    company: "BIBLIOTHEQUE RAJAONA SIMEON REGIS",
    duration: "2022",
  },
  {
    img: "/images/madactylo.png",
    alt: "MADACTYLO logo",
    link: "https://madactylo.com/",
    linkText: "Site web",
    title: "Transcripteur de procès verbal de constatation",
    company: "MADACTYLO",
    duration: "2022 - 2023",
  },
  {
    img: "/images/college.png",
    alt: "COLLEGE PRIVE LE SUCCES logo",
    link: "https://www.facebook.com/lesuccesmoramanga",
    linkText: "Page Facebook",
    title: "Professeur de Français",
    company: "COLLEGE PRIVE LE SUCCES",
    duration: "2023 - 2024",
  },
  {
    img: "/images/meuble.jpg",
    alt: "MEUBLE ET DECORATION logo",
    link: "https://inhome-imobility.com/",
    linkText: "Site web",
    title: "Chargée de marketing",
    company: "INTELLIGENT MOBILITY TECHNOLOGIES",
    duration: "2024",
  },
];

function WorkExperience() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Déclenche la mise à jour une fois que les refs sont montées
    setSwiperReady(true);
  }, []);

  return (
    <section id="experiences" className="flex items-center justify-center">
      <div className="container">
        <div className="md:py-20 py-10">
          <h2 className="text-3xl font-bold">Expériences professionnelles</h2>

          <p className="text-base font-medium mb-8">
            Un parcours riche en marketing, gestion de projets et enseignement,
            guidé par une volonté constante de créer, partager et avoir un
            impact positif.
          </p>

          <div className="relative">
            <button
              ref={prevRef}
              className="custom-prev absolute -left-15 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2"
            >
              <MdArrowBackIosNew className="text-3xl" />
            </button>

            {swiperReady && (
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  type: "bullets",
                  clickable: true,
                  renderBullet: (_, className) =>
                    `<span class="${className}"></span>`,
                }}
              >
                {workExperienceData.map((work, index) => (
                  <SwiperSlide key={index}>
                    <WorkCard {...work} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <button
              ref={nextRef}
              className="custom-next absolute -right-15 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2"
            >
              <MdArrowForwardIos className="text-3xl" />
            </button>
          </div>

          <div className="swiperInfo mt-5">
            <div className="flex justify-center gap-4 swiper-pagination-custom"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
