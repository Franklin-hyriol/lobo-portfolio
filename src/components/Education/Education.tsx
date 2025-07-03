function Education() {
  return (
    <section id="formation" className="flex items-center justify-center bg-base-200">
      <div className="container">
        <div className="md:py-20 py-10">
          <h2 className="text-3xl font-bold">Formation</h2>

          <p className="text-base font-medium mb-8">
            Apprendre, comprendre, évoluer : la formation a toujours été le
            point de départ de mes ambitions.
          </p>

          {/* Time Line */}
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle text-2xl">🎓</div>

              <div className="timeline-start m-0 mb-10 pt-1.5 pr-3.5 md:text-end">
                <time className="text-2xl font-bold text-stroke">2022</time>
                <div className="text-lg font-black">Master 1 en commerce</div>
                <div className="text-base text-accent">CNTEMAD</div>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle text-2xl">🎓</div>
              <div className="timeline-end m-0 mb-10 pt-1.5 pl-3.5 md:mb-10">
                <time className="text-2xl font-bold text-stroke">2021</time>
                <div className="text-lg font-black">
                  Pao et multim&eacute;dia
                </div>
                <div className="text-base text-accent">CFPM DE MADAGASCAR</div>
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-middle text-2xl">🎓</div>
              <div className="timeline-start m-0 mb-10 pt-1.5 pr-3.5 md:text-end">
                <time className="text-2xl font-bold text-stroke">2020</time>
                <div className="text-lg font-black">
                  Licence en marketing et commerce international
                </div>
                <div className="text-base text-accent">UNIVERSITE ACEEM</div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
