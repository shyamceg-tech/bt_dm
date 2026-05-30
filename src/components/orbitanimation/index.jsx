"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OrbitAnimation() {
  const [mounted, setMounted] = useState(false);
  const [radius, setRadius] = useState(170);

  useEffect(() => {
    setMounted(true);

    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 120 : 170);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  if (!mounted) return null;

  const calculatePosition = (index, total, radius) => {
    const angle = (index / total) * Math.PI * 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  // 🌟 Using public image paths instead of imports
  const orbitingElements = [
    { src: "/img/round/swiggy.svg", alt: "Swiggy" },
    { src: "/img/round/amazonsvg.svg", alt: "Amazon" },
    { src: "/img/round/filpkartsvg.svg", alt: "Flipkart" },
    { src: "/img/round/googlesvg.svg", alt: "Google" },
  ];

  return (
    <div className="flex items-center justify-center w-full h-auto p-4">
      <div className="relative w-full max-w-[600px] h-[80vw] max-h-[430px] xl:right-25">
        
        {/* Center Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[85%] lg:w-[70%] max-w-[300px]">
          <Image
            src="/img/round.svg"
            alt="Globe"
            width={500}
            height={500}
            className="w-full h-auto"
          />

          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-[19px] text-white w-[150px]">
            Our Learners Thrive at Top Global Companies
          </p>
        </div>

        {/* Orbiting Logos */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {orbitingElements.map((icon, index) => {
            const pos = calculatePosition(index, orbitingElements.length, radius);

            return (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  top: `calc(50% + ${pos.y}px - 40px)`,
                  left: `calc(50% + ${pos.x}px - 40px)`,
                  width: "80px",
                  height: "80px",
                }}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={80}
                  height={80}
                  className="w-18 h-18"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
