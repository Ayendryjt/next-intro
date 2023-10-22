import { Header } from "./components/Header";
import { SecondaryTitle } from "./components/SecondaryTitle";
import { VoteSection } from "./components/VoteSection";
import { Footer } from "./components/Footer";

import {
  extraSection,
  firstSection,
  secondSection,
  thirdSection,
  fourthSection,
  fifthSection,
  sixthSection,
  seventhSection,
  EighthSection,
  ninthSection,
  tenthSection,
  eleventhSection, 
} from "./sectionsData";


export default function Home() {
  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col">
      <Header />
      <section className="mt-48 max-w-[1000px] mx-auto">
        <h1 className="max-w-5xl mx-auto text-5xl font-extrabold text-center text-black md:text-8xl">
          Vota los mejores del desarrollo web
        </h1>
        <p className="max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70">
          Decide qué stack, tecnologías y frameworks han sido los mejores del
          año. ¡Cada voto cuenta!
        </p>
        <div className="max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg">
          <SecondaryTitle title="Mejor nueva funcionalidad ECMAScript" />
          <VoteSection section={extraSection} />

          <SecondaryTitle title="Mejor biblioteca UI" />
          <VoteSection section={firstSection} />

          <SecondaryTitle title="Mejor framework Backend" />
          <VoteSection section={secondSection} />

          <SecondaryTitle title="Mejor framework FullStack" />
          <VoteSection section={thirdSection} />

          <SecondaryTitle title="Mejores empaquetadores de código" />
          <VoteSection section={fourthSection} />

          <SecondaryTitle title="Mejor entorno de ejecución de JavaScript" />
          <VoteSection section={fifthSection} />

          <SecondaryTitle title="Mejor librería CSS en JS" />
          <VoteSection section={sixthSection} />

          <SecondaryTitle title="Mejor herramienta de testing" />
          <VoteSection section={seventhSection} />

          <SecondaryTitle title="Mejor test E2E" />
          <VoteSection section={EighthSection} />

          <SecondaryTitle title="Mejor BaaS (Backend as a Service)" />
          <VoteSection section={ninthSection} />

          <SecondaryTitle title="Mejor catálogo de componentes" />
          <VoteSection section={tenthSection} />

          <SecondaryTitle title="Mejor sitio para hosting de tu proyecto web" />
          <VoteSection section={eleventhSection} />
        </div>
      </section>
      <Footer />
    </div>
  );
}