import { useState, useEffect, useRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import ClickSpark from "./ClickSpark";
import GradientText from "./GradientText";
import catIcon from "../assets/cat-svgrepo-com.svg";

const Catcha = ({ onClose, isOpen }) => {
  // États du jeu captcha
  const [strokesCount, setStrokesCount] = useState(0);
  const [requiredStrokes, setRequiredStrokes] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [showMiaou, setShowMiaou] = useState(false);
  const [miaouPosition, setMiaouPosition] = useState({ x: 0, y: 0 });

  // Référence pour l'image du chat
  const catRef = useRef(null);

  // Initialise le jeu quand le composant s'ouvre
  useEffect(() => {
    if (isOpen) {
      setRequiredStrokes(Math.floor(Math.random() * 9) + 2);
      setStrokesCount(0);
      setIsValidated(false);
    }
  }, [isOpen]);

  // Gère les clics sur le chat
  const handleCatClick = (e) => {
    if (strokesCount >= requiredStrokes || isValidated) return;

    // Calcule la position du clic
    const rect = catRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Définit la zone cliquable (tête du chat)
    const headArea = {
      x: rect.width * 0.49,
      y: rect.height * 0.07,
      width: rect.width * 0.5,
      height: rect.height * 0.4,
    };

    // Vérifie si le clic est dans la bonne zone
    if (
      x >= headArea.x &&
      x <= headArea.x + headArea.width &&
      y >= headArea.y &&
      y <= headArea.y + headArea.height
    ) {
      // Clic valide : incrémente le compteur
      setStrokesCount((prev) => prev + 1);
      setIsAnimating(true);

      // Positionne la bulle "Miaou !" à l'endroit du clic
      setMiaouPosition({
        x: x - 40,
        y: y - 50,
      });

      // Affiche la bulle temporairement
      setShowMiaou(true);
      setTimeout(() => setShowMiaou(false), 1000);

      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  // Valide automatiquement quand l'objectif est atteint
  useEffect(() => {
    if (strokesCount === requiredStrokes && requiredStrokes > 0) {
      setIsValidated(true);
    }
  }, [strokesCount, requiredStrokes]);

  // N'affiche rien si le composant n'est pas ouvert
  if (!isOpen) return null;

  // Calcule les caresses restantes
  const remainingStrokes = requiredStrokes - strokesCount;

  return (
    <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 text-gray-200 text-center w-120 h-100 mx-auto border border-slate-700/60 flex flex-col">
      <ClickSpark
        sparkColor="#a78bfa"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* En-tête du captcha */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src={catIcon}
            alt="Miaou"
            className="w-12 h-12 opacity-80 hover:scale-110 transition-transform cursor-pointer"
          />
          <h1 className="text-3xl font-bold">Catcha</h1>
        </div>

        {/* Contenu principal qui change selon l'état */}
        <div className="flex flex-col justify-center items-center flex-1">
          {isValidated ? (
            // Écran de validation réussie
            <div className="flex flex-col items-center gap-6 mb-12">
              <FaRegCheckCircle className="text-green-400 text-6xl animate-bounce" />
              <h3 className="text-2xl font-bold text-green-400">
                Catcha Validé !
              </h3>
              <GradientText
                colors={["#a78bfa", "#60a5fa", "#c084fc", "#8b5cf6", "#a78bfa"]}
                animationSpeed={3}
                showBorder={false}
              >
                Le chat confirme que vous n'êtes pas un robot !
              </GradientText>
            </div>
          ) : (
            // Interface de jeu active
            <div className="flex flex-col items-center gap-6">
              {/* Instructions */}
              <GradientText
                colors={["#a78bfa", "#60a5fa", "#c084fc", "#8b5cf6", "#a78bfa"]}
                animationSpeed={3}
                showBorder={false}
              >
                Caressez le chat sur la tête pour valider le Catcha !
              </GradientText>

              {/* Zone interactive avec le chat */}
              <div className="relative">
                {/* Bulle "Miaou !" qui apparaît au clic */}
                {showMiaou && (
                  <div
                    className="absolute z-10 animate-bounce"
                    style={{
                      left: `${miaouPosition.x}px`,
                      top: `${miaouPosition.y}px`,
                    }}
                  >
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg relative font-bold text-sm whitespace-nowrap">
                      Miaou !{/* Flèche de la bulle */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className="border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Image du chat cliquable */}
                <div
                  className={`transition-all duration-400 ${
                    isAnimating ? "scale-110" : "scale-100"
                  } hover:scale-105`}
                >
                  <img
                    ref={catRef}
                    src={catIcon}
                    alt="Miaou"
                    className="w-32 h-32 opacity-80 cursor-pointer"
                    onClick={handleCatClick}
                  />
                </div>
              </div>

              {/* Compteur de progression */}
              <p>
                Caresses restantes :{" "}
                <span className="font-bold">{remainingStrokes}</span>
              </p>
            </div>
          )}
        </div>

        {/* Bouton de fermeture */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className={`px-6 py-2 cursor-pointer rounded-lg transition-colors active:scale-95 ${
              isValidated
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {isValidated ? "Continuer" : "Fermer"}
          </button>
        </div>
      </ClickSpark>
    </div>
  );
};

export default Catcha;
