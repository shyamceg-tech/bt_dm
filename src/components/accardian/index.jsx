"use client";
import { useState } from "react";

const Accordion = ({items}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const items = [
  //   {
  //     title: "What makes Bangalore a great place for digital marketing education?",
  //     content:
  //       "Bangalore is known as India’s technology hub, hosting a vibrant ecosystem of startups, tech giants, and creative agencies. This dynamic environment offers excellent internship and networking opportunities. Institutes like BlueTick Academy leverage these local advantages to provide students with practical, industry-focused training.",
  //   },
  //   {
  //     title: "How do I decide between online and offline digital marketing classes in Bangalore?",
  //     content:
  //       "Consider your schedule, learning style, and geographic convenience. Online marketing courses in Bangalore offer flexibility and are ideal for busy professionals, while classroom settings—such as those at BlueTick Academy—provide direct interaction and immediate feedback.",
  //   },
  //   {
  //     title: "Can I transition into digital marketing from a non-marketing background?",
  //     content:
  //       "Absolutely. A comprehensive Digital Marketing Course is designed for beginners as well as professionals. With a structured curriculum and practical projects, you can build the necessary skills. BlueTick Academy tailors its programs to welcome students from all backgrounds.",
  //   },
  //   {
  //     title: "Are the certifications provided by these courses recognized globally?",
  //     content:
  //       "BlueTick Academy offers 15 international certificates, including those from Google and HubSpot. The certifications you earn are respected by employers worldwide, boosting your credibility in the digital marketing field.",
  //   },
  //   {
  //     title: "How long does it typically take to complete a digital marketing training in Bangalore?",
  //     content:
  //       "BlueTick Academy offers flexible durations to suit different career objectives and time commitments. There are two programs – 3 months and 4.5 months, allowing you to choose based on your career goals.",
  //   },
  //   {
  //     title: "Where can I find reviews for the best digital marketing courses in Bangalore?",
  //     content:
  //       "Check educational forums, social media groups, and reputable review websites. Student testimonials often highlight the effectiveness of programs offered by BlueTick Academy.",
  //   },
  //   {
  //     title: "What should I expect in terms of practical training?",
  //     content:
  //       "The best courses emphasize hands-on learning through live projects, real-life case studies, and interactive sessions. BlueTick Academy integrates these elements seamlessly, ensuring that you gain the experience needed to succeed.",
  //   },
  // ];


  return (
    <div className="w-full mx-auto mt-4">

      {items.map((item, index) => (
        <div key={index} className="bg-[#F6F6F6] py-1 px-2 md:p-3 border-gray-300 mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center pr-1 py-3 text-left text-gray-800 font-semibold"
          >
            <span>{item.title}</span>
            <span className="text-2xl font-semibold">
              {openIndex === index ? "×" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-3 text-gray-600 border-t border-[grey]">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
