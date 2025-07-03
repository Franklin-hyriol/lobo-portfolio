import "./global.css";
import CallToAction from "./components/CallToAction/CallToAction";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting/Greeting";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
import WorkExperience from "./components/WorkExperience /WorkExperience";
import Projets from "./components/Projets/Projets";

function App() {


  return (
    <>
      <Header />

      <main>
        <Greeting />
        <Skills />
        <WorkExperience />
        <Education />
        <Projets />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
export default App;
