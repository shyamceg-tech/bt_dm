"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import LearningAdvisorForm from "../form";
import Modal from "../model";
import Popup from "../popup";

const Logo = "/img/logo.svg";

function Footer({ formType, setFormType }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success");
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      temp.email = "Invalid email address";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const API_URL =
        "https://4tm07os0jl.execute-api.ap-south-1.amazonaws.com/prod/items";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          formType: "newsletter",
        }),
      });

      const result = await res.json();

      if (result.success) {
        setPopupType("success");
        setPopupMessage("Thank you for subscribing!");

        // Meta Pixel Lead event
        if (window.fbq) {
          const id = crypto.randomUUID?.() || String(Date.now());
          window.fbq("track", "Lead", { source: "newsletter" }, { eventID: id });
        }
      } else {
        setPopupType("error");
        setPopupMessage("Subscription failed. Try again.");
      }

      setFormData({ email: "" });
      setErrors({});
    } catch (error) {
      setPopupMessage("Something went wrong!");
      setPopupType("error");
    } finally {
      setShowPopup(true);
    }
  };

  return (
    <>
      <section className="bg-[#272727] pb-5 mt-[50px] md:mt-[80px]">
        <div>
          {/* ---------- TOP GRID (LOGO + SOCIAL + CONTACTS) ---------- */}
          <div className="grid grid-cols-12">
            <div className="py-5 px-5 border border-[#4F4F4F] md:block hidden col-span-2">
              <Image src={Logo} alt="logo" width={120} height={40} />
            </div>

            {/* Social Icons */}
            {["facebook", "twitter", "youtube", "linkedin", "instagram"].map(
              (social) => (
                <div
                  key={social}
                  className="py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2"
                >
                  <Icon
                    icon={`mdi:${social}`}
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
              )
            )}

            {/* Email */}
            <div className="col-span-12 md:col-span-3 lg:col-span-3">
              <Link href="mailto:info@bluetickacademy.com">
                <div className="py-2 md:py-8 px-4 md:px-2 md:border border-[#4F4F4F] flex gap-1 items-center">
                  <Icon
                    icon="ic:baseline-email"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <p className="text-white">info@bluetickacademy.com</p>
                </div>
              </Link>
            </div>

            {/* Phone */}
            <div className="col-span-12 md:col-span-2">
              <Link href="tel:+919606995525" className="js-call-cta">
                <div className="py-3 md:py-8 px-4 md:px-3 border-b md:border border-[#4F4F4F] flex gap-1 items-center">
                  <Icon icon="gg:phone" width={24} height={24} className="text-white" />
                  <p className="text-white">+91-9606 9955 25</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ---------- QUICK LINKS + NEWSLETTER ---------- */}
          <div className="grid md:grid-cols-3 px-8 py-8">
            <div className="md:col-span-2">
              <p className="text-white py-2 font-semibold text-lg">Quick Links</p>

              <div className="md:flex gap-5">
                <Link href="#courses">
                  <span className="flex gap-2 text-white py-1 cursor-pointer">
                    <Icon icon="weui:arrow-outlined" width={12} className="text-[#FE4855]" />
                    Our Courses
                  </span>
                </Link>

                <span
                  onClick={() => {
                    setFormType("hire");
                    setModalOpen(true);
                  }}
                  className="cursor-pointer flex gap-2 text-white py-1"
                >
                  <Icon icon="weui:arrow-outlined" width={12} className="text-[#FE4855]" />
                  Hire From Us
                </span>

                <span
                  onClick={() => {
                    setFormType("franchisee");
                    setModalOpen(true);
                  }}
                  className="cursor-pointer flex gap-2 text-white py-1"
                >
                  <Icon icon="weui:arrow-outlined" width={12} className="text-[#FE4855]" />
                  Franchisee Enquiry
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-white font-semibold text-[18px] py-2">
                Sign up to our newsletter
              </p>
              <p className="text-white text-[14px] my-2">
                Stay updated on hiring, placements & course announcements.
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800 border border-gray-300 text-white rounded-lg block w-full p-2.5 my-3"
                  placeholder="Email address*"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                <button
                  type="submit"
                  className="text-white bg-gradient-to-b from-orange-500 to-red-500 font-medium rounded-lg px-8 w-full py-2 my-2"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM COPYRIGHT ---------- */}
        <div className="text-center text-white">
          <p className="text-[12px] md:text-[16px] py-3">
            © {new Date().getFullYear() } BlueTick Academy. All Rights Reserved.
          </p>

          <div className="flex gap-5 justify-center text-sm md:text-lg font-[600]">
            <Link href="/privacypolicy">Privacy Policy</Link>
            <Link href="/termsandcondition">Terms & Conditions</Link>
            <Link href="/contact_us">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ---------- Modal ---------- */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <LearningAdvisorForm formType={formType} setFormType={setFormType} />
      </Modal>

      {/* ---------- Popup ---------- */}
      {showPopup && (
        <Popup
          message={popupMessage}
          type={popupType}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}

export default Footer;
