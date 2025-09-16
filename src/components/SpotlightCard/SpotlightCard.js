import { useRef } from "react";
import "./SpotlightCard.css";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convertir a porcentajes para que funcione con el CSS
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    divRef.current.style.setProperty("--mouse-x", `${xPercent}%`);
    divRef.current.style.setProperty("--mouse-y", `${yPercent}%`);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
