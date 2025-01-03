import Footers from "./component/Footer.jsx";
import Headers from "./component/Header.jsx";
import HeroSection from "./component/HeroSection.jsx";
import Project from "./component/Project.jsx";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500">
      <Headers />
      <main className="flex-grow min-h-screen ">
        <HeroSection />
        <Project />
      </main>
      <Footers />
    </div>
  );
}
