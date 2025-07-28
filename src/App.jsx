import "./App.css";
import { useState } from "react";
import Catcha from "./components/Catcha";
import ParticlesBackground from "./components/ParticlesBackground";
import GradientText from "./components/GradientText";
import catIcon from "./assets/cat-svgrepo-com.svg";

function App() {
  // État pour basculer entre l'écran d'accueil et le captcha
  const [showCatcha, setShowCatcha] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      {/* Fond animé avec particules */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground
          particleColors={[
            "#4a5568",
            "#6b7280",
            "#7c3aed",
            "#8b5cf6",
            "#a78bfa",
            "#c084fc",
            "#60a5fa",
            "#3b82f6",
          ]}
        />
      </div>

      {/* Affichage conditionnel selon l'état showCatcha */}
      {!showCatcha ? (
        // Page d'accueil
        <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 text-gray-200 border border-slate-700/60 w-120 h-50 flex flex-col justify-center items-center text-center">
          {/* En-tête avec logo et titre */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src={catIcon}
              alt="Miaou"
              className="w-12 h-12 opacity-80 hover:scale-110 transition-transform cursor-pointer"
            />
            <h1 className="text-3xl font-bold">Catcha</h1>
          </div>

          {/* Contenu de la page d'accueil */}
          <div className="flex flex-col items-center gap-6">
            <GradientText
              colors={["#a78bfa", "#60a5fa", "#c084fc", "#8b5cf6", "#a78bfa"]}
              animationSpeed={8}
              showBorder={false}
            >
              Seul un robot ne voudrait pas caresser un chat !
            </GradientText>

            {/* Bouton pour lancer le captcha */}
            <button
              onClick={() => setShowCatcha(true)}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-bold py-3 px-6 rounded-lg transition-all duration-150 active:scale-95 cursor-pointer"
            >
              Commencer le Catcha
            </button>
          </div>
        </div>
      ) : (
        // Composant Catcha avec fonction de fermeture
        <Catcha onClose={() => setShowCatcha(false)} isOpen={showCatcha} />
      )}
    </div>
  );
}

export default App;
