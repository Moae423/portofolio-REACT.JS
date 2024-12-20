import Footers from "./component/Footer.jsx";
import Headers from "./component/Header.jsx";
import HeroSection from "./component/HeroSection.jsx";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500">
      <Headers />
      <main className="flex-grow ">
        <HeroSection />
      </main>
      <Footers />
    </div>
  );
}
