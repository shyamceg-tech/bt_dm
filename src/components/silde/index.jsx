"use client";

import { animate, motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ScrollLinked({ allCards }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto relative overflow-hidden sm:hidden block my-[40px]">
      <motion.ul
        ref={ref}
        className="flex list-none overflow-x-scroll gap-5 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 h-full"
      >
        {allCards.map((card, index) => (
          <div key={index} className="flex-none w-48 my-2">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full">
              
              {/* Photo */}
              <div className="w-full h-45 flex justify-center items-center bg-gray-100">
                <Image
                  className="w-auto h-full object-contain"
                  src={card.img}            // <-- NOW PUBLIC URL
                  alt={card.name}
                  width={200}
                  height={160}
                />
              </div>

              {/* Name + Company */}
              <div className="max-[768px]:pl-3">
                <span className="py-3 px-1 flex justify-between border-[#E2E2E2] border-b items-center my-auto">
                  <p className="font-semibold">{card.name}</p>

                  <Image
                    src={card.company}       // <-- NOW PUBLIC URL
                    alt="company"
                    width={80}
                    height={30}
                    className="w-[100px] h-[30px] object-contain md:w-[100px] md:h-[40px]"
                  />
                </span>
              </div>

              {/* Description */}
              <div className="p-2">
                <p
                  className={`text-[16px] text-[#282E38] ${
                    !expandedCards[card.id] ? "line-clamp-2" : ""
                  }`}
                >
                  {card.des}
                </p>

                <button
                  onClick={() => toggleExpand(card.id)}
                  className="mt-2 text-blue-600 transition cursor-pointer"
                >
                  {expandedCards[card.id] ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.ul>
    </div>
  );
}

// ---------------- MASK EFFECT FUNCTION ------------------

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `rgba(0,0,0,0)`;
const opaque = `rgba(0,0,0,1)`;

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(maskImage, `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`);
    } else if (value === 1) {
      animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`);
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`);
    }
  });

  return maskImage;
}
