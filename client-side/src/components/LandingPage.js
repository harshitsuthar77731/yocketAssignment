import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


function LandingPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const text = "Welcome to Yocket HQ, where the chase is on! Get set to assign our fearless cops their wheels and cities, because we've got a fugitive on the loose and the adrenaline's pumping!".split(" ");
  const [animationComplete, setAnimationComplete] = useState(false);
  return (
    <div className="landingPage flex flex-col gap-[2vh]">
    <div>
      {text.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: i / 10 }}
          onAnimationComplete={() => {
            if (i === text.length - 1) {
              setAnimationComplete(true);
            }
          }}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
    {animationComplete && (
      <button onClick={() => navigate("/form")}>Click To Catch</button>
    )}
  </div>
  );
}

export default LandingPage;
