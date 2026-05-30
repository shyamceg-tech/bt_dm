"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Modal from "../model";
import LearningAdvisorForm from "../form";

// Static public folder image paths
const Logo = "/img/logo.svg";
const WhatsappIcon = "/img/whatapp.svg";
const PhoneIcon = "/img/phoneicon.svg";
const HammerIcon = "/img/hammer.svg";

export default function Header({ formType, setFormType }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    // Sticky navbar scroll color change (optional)
    const [color, setColor] = useState(false);
    const changeColor = () => {
        setColor(window.scrollY >= 90);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => window.removeEventListener("scroll", changeColor);
    }, []);

    return (
        <>
            <div
                className={`bg-[#2D2E5A] md:bg-[#101445] z-50 sticky max-[768px]:top-5 top-0 mx-4 md:mx-0 max-[768px]:rounded-[50px]`}
            >
                <div className="w-full h-[60px] md:h-[80px] flex justify-between items-center min-[1280px]:container min-[1440px]:max-w-[1440px] mx-auto px-4 md:px-6">

                    {/* LOGO */}
                    <div onClick={() => setMenuOpen(false)} className="w-[95px] min-[500px]:w-[120px] min-[500px]:h-[41px]">
                        <Link href="/">
                            <Image src={Logo} alt="Bluetick Logo" width={120} height={41} />
                        </Link>
                    </div>

                    <div className="flex gap-[10px] min-[1050px]:gap-[0px] items-center">

                        {/* MENU LIST */}
                        <div
                            className={`${menuOpen ? "max-[1049px]:translate-x-0" : "max-[1049px]:translate-x-full"
                                } min-[1050px]:flex fixed top-[80px] left-0 z-[5] max-[500px]:p-[15px] max-[1049px]:p-[35px] min-[1050px]:static bg-white min-[1050px]:bg-transparent h-full max-[1049px]:w-full flex flex-col min-[1050px]:flex-row gap-[15px] min-[1050px]:gap-[40px] min-[1050px]:items-center font-[400] text-[18px] text-black min-[1050px]:text-white capitalize max-[1024px]:overflow-y-scroll duration-300`}
                        >

                            <Link href="#courses">
                                <div onClick={() => setMenuOpen(false)} className="py-[10px] min-[1050px]:py-0">
                                    <p>Our Courses</p>
                                </div>
                            </Link>

                            {/* Hire From Us */}
                            <div
                                onClick={() => {
                                    setMenuOpen(false);
                                    setFormType("hire");
                                    setModalOpen(true);
                                }}
                                className="cursor-pointer py-[10px] min-[1050px]:py-0"
                            >
                                <p>Hire from us</p>
                            </div>

                            {/* Franchisee */}
                            <div
                                onClick={() => {
                                    setMenuOpen(false);
                                    setFormType("franchisee");
                                    setModalOpen(true);
                                }}
                                className="cursor-pointer py-[10px] min-[1050px]:py-0 mr-8"
                            >
                                <p>Franchisee Enquiry</p>
                            </div>
                        </div>

                        {/* Desktop WhatsApp Button */}
                        <div className="mr-5 md:block hidden">
                            <Link
                                href="https://wa.me/9606995525"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="js-wa-cta"
                            >
                                <div className="bg-[#2D2E5A] py-2 px-3 rounded-full font-[600] text-[15px] flex items-center gap-1">
                                    <Image src={WhatsappIcon} width={30} height={30} alt="WhatsApp" />
                                    <p className="text-white">+91-9606 9955 25</p>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Call Button */}
                        <div className="md:block hidden">
                            <Link href="tel:+919606995525" className="js-call-cta">
                                <div className="bg-[#2D2E5A] py-2 px-3 rounded-full font-[600] text-[15px] flex items-center gap-1">
                                    <Image src={PhoneIcon} width={30} height={30} alt="Call" />
                                    <p className="text-white">+91-9606 9955 25</p>
                                </div>
                            </Link>
                        </div>

                        {/* Mobile WhatsApp */}
                        <div className="mr-1 md:hidden block">
                            <Link href="https://wa.me/9606995525" target="_blank" className="js-wa-cta">
                                <Image src={WhatsappIcon} width={36} height={36} alt="WhatsApp" />
                            </Link>
                        </div>

                        {/* Mobile Call */}
                        <div className="mr-1 md:hidden block">
                            <Link href="tel:+919606995525" className="js-call-cta">
                                <Image src={PhoneIcon} width={36} height={36} alt="Call" />
                            </Link>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div onClick={() => setMenuOpen(!menuOpen)} className="block min-[1050px]:hidden">
                            {menuOpen ? (
                                <XMarkIcon className="text-white w-[30px] h-[30px]" />
                            ) : (
                                <div className="p-2.5 bg-gradient-to-b from-[#FD9055] to-[#FE4855] rounded-full">
                                    <Image src={HammerIcon} width={16} height={16} alt="Menu" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <LearningAdvisorForm formType={formType} setFormType={setFormType} />
            </Modal>
        </>
    );
}
