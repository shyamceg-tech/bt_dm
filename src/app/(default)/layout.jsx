"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";

export default function Whiteheader({ children }) {
  const [formType, setFormType] = useState("default");

  console.log("Whiteheader - formType:", formType);

  return (
    <div>
      <Header formType={formType} setFormType={setFormType} />

      {/* Ensure children receive formType and setFormType */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { formType, setFormType }) : child
      )}

      <Footer formType={formType} setFormType={setFormType}/>
      <ToastContainer />
    </div>
  );
}
