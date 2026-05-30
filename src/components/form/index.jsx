'use client';
import { useState } from 'react';
import Image from 'next/image';
const Captcha = "/img/captcha.png";
const FormBack = "/img/formback.svg";
import Popup from '../popup';

export default function LearningAdvisorForm({ formType, setFormType }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    center: "",
    company: "",
    location: "",
    learningMode: "",
    captchaChecked: false,
  });
  const [errors, setErrors] = useState({});

  // -------------------- Validation --------------------
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid email";
    if (!formData.mobile.match(/^\d{10}$/))
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    if (formType === "default" && !formData.center)
      tempErrors.center = "Select a center";
    if (formType === "hire" && !formData.company.trim())
      tempErrors.company = "Company name is required";
    if (formType === "franchisee" && !formData.location.trim())
      tempErrors.location = "Location name is required";
    if (!(formType === "hire" || formType === "franchisee") && !formData.learningMode)
      tempErrors.learningMode = "Select a learning mode";
    if (formType === "default" && !formData.captchaChecked)
      tempErrors.captchaChecked = "Please verify the captcha";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // -------------------- Handle Input --------------------
  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [name || id]: type === "checkbox" ? checked : value,
    });
  };

  // -------------------- Submit --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Type:", formType);
    console.log("Form Data:", formData);

    if (!validate()) {
      console.warn("Validation failed");
      return;
    }

    try {
      console.log("Sending data to Amplify Lambda...");
      const API_URL = "https://4tm07os0jl.execute-api.ap-south-1.amazonaws.com/prod/items";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType,
        }),
      });

      const result = await res.json();
      console.log("Zoho API Response:", result);

      if (result.success) {
        let message = "";
        if (formType === "hire") {
          message = "Your hiring enquiry has been received. Our recruitment team will contact you soon.";
        } else if (formType === "franchisee") {
          message = "Thank you for your interest in our franchise! Our business team will reach out shortly.";
        } else {
          message = "Your registration is successful. Our learning advisor will reach out to you shortly.";
        }

        setPopupType("success");
        setPopupMessage(message);
        console.log("Lead synced successfully to Zoho Bigin");
      } else {
        setPopupType("error");
        setPopupMessage("Zoho Bigin API failed. Please check console logs.");
        console.error("Zoho Error:", result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setPopupType("error");
      setPopupMessage("Something went wrong! Please try again.");
    } finally {
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        center: "",
        company: "",
        location: "",
        learningMode: "",
        captchaChecked: false,
      });
      setErrors({});
      e.target.reset();
    }
  };

  // -------------------- Render --------------------
  return (
    <div className="px-2 md:px-8 relative my-auto">
      <Image
          src={FormBack}
          alt="Form Background"
          width={400}
          height={400}
          className="absolute right-0 bottom-0 z-[-10] h-full w-auto pointer-events-none select-none"
        />

      <p className="text-center text-[20px] md:text-[24px] font-[500] sm:bg-[#F7F8F9] py-4 sm:border border-[#f5f7f8] mx-[10px] sm:mx-[20px]">
        Speak with Our{" "}
        {formType === "franchisee" || formType === "hire" ? (
          <span className="font-bold border-b-[4px] border-[#FE7C55]">Team</span>
        ) : (
          <span className="font-bold border-b-[4px] border-[#FE7C55]">Learning Advisor</span>
        )}
      </p>

      <form
        id="form"
        onSubmit={handleSubmit}
        className="mx-[10px] sm:mx-[20px] py-4 sm:py-8 px-3 md:px-8 border-[#EEEEEE] border max-[640px]:rounded-[5px] bg-white"
      >
        {/* Name */}
        <div className="mb-5">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-5">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div className="mb-5">
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="bg-white outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        {/* Center (Default Form Only) */}
        {formType === "default" && (
          <div className="mb-5">
            <select
              name="center"
              value={formData.center}
              onChange={handleChange}
              className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="">Select Center</option>
              <option>Indiranagar (Besides Metro Station)</option>
              <option>Hoodi (Near Junction)</option>
              <option>Bannerghatta Road</option>
            </select>
            {errors.center && <p className="text-red-500 text-sm">{errors.center}</p>}
          </div>
        )}

        {/* Company (Hire Form Only) */}
        {formType === "hire" && (
          <div className="mb-5">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
        )}

        {/* Location (Franchisee Form Only) */}
        {formType === "franchisee" && (
          <div className="mb-5">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
        )}

        {/* Learning Mode (Default Only) */}
        {!(formType === "hire" || formType === "franchisee") && (
          <div className="mb-5">
            <p className="text-[#556376] py-2 font-semibold">Learning Mode</p>
            <div className="flex gap-2">
              {["Online", "Offline"].map((mode) => (
                <label key={mode} className="flex items-center h-5">
                  <input
                    type="radio"
                    name="learningMode"
                    value={mode}
                    checked={formData.learningMode === mode}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300"
                  />
                  <p className="text-[#556376] pl-2">{mode}</p>
                </label>
              ))}
            </div>
            {errors.learningMode && <p className="text-red-500 text-sm">{errors.learningMode}</p>}
          </div>
        )}

        {/* Captcha (Default Only) */}
        {formType === "default" && (
          <div className="captcha-box border border-gray-300 rounded-lg p-2 flex items-center justify-between my-3 max-w-[300px]">
            <span className="flex items-center">
              <input
                type="checkbox"
                id="captchaChecked"
                name="captchaChecked"
                checked={formData.captchaChecked}
                onChange={handleChange}
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="captchaChecked" className="text-[#556376] max-[768px]:text-[12px]">
                I am not a robot
              </label>
            </span>
            <Image
              src={Captcha}
              alt="captcha"
              width={60}
              height={40}
              className="w-[60px] h-[40px]"
            />

          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 w-full py-1 md:py-2 text-center my-3 uppercase"
        >
          {formType === "franchisee" || formType === "hire" ? "Submit" : "Register"}
        </button>
      </form>

      {showPopup && (
        <Popup
          message={popupMessage}
          type={popupType}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
