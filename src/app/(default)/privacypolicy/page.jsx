"use client";
import Image from "next/image";
import Link from "next/link";
const banner = "/img/banner.jpg";

export default function PrivacyPolicy() {
    return (
        <>
            <section style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
                <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4 pt-[110px] max-[768px]:mt-[-55px] md:pt-[80px] pb-[30px] md:pb-[50px]">

                    <p className="text-[#F3F3F3] text-[25px] md:text-[48px] font-bold font-['Montserrat'] capitalize leading-[28px] md:leading-[60px] mt-[5px] md:mt-[10px] text-center">Privacy Policy</p>
                    <div className="flex justify-center">
                        <nav className="mt-[5px] md:mt-[8px]">
                            <ol className="list-reset flex">
                                <li className="font-normal text-[11px] md:text-[15px] leading-[33px] text-[#E4E4E4]">
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <span className="mx-2 font-normal text-[15px] leading-[33px] text-[#E4E4E4]">
                                        /
                                    </span>
                                </li>
                                <li className="font-semibold text-[11px] md:text-[15px] leading-[33px] text-[#FAB019]">
                                Privacy Policy
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section>
                <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
                    <div class="mx-auto md:p-6 mt-10">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
                            Privacy Policy - {new Date().getFullYear()}
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg text-center mb-6">
                            Bluetick AI Academy owned and operated by Tech Tree ("we," "our," or "us") respects your privacy and is committed to protecting it through this Privacy Policy.
                        </p>
                        <div className="max-w-3xl mx-auto">
                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Information We Collect</h2>
                                <p className="text-sm md:text-base">We collect several types of information from and about users of our Website, including:</p>
                                <h3 className="font-semibold mt-2">a. Personal Information:</h3>
                                <ul className="list-disc list-inside text-sm md:text-base">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Billing and payment information (if applicable)</li>
                                    <li>Any other information you voluntarily provide</li>
                                </ul>
                                <h3 className="font-semibold mt-2">b. Non-Personal Information:</h3>
                                <ul className="list-disc list-inside text-sm md:text-base">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Device type and operating system</li>
                                    <li>Pages visited and time spent on the Website</li>
                                    <li>Referring URL and search queries</li>
                                </ul>
                                <h3 className="font-semibold mt-2">c. Cookies and Tracking Technologies:</h3>
                                <p className="text-sm md:text-base">We may use cookies, web beacons, and similar technologies to track user activity and improve our Website.</p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
                                <ul className="list-disc list-inside text-sm md:text-base">
                                    <li>To provide, operate, and improve our Website and services</li>
                                    <li>To personalize your experience on the Website</li>
                                    <li>To communicate with you, respond to inquiries, and provide customer support</li>
                                    <li>To process transactions and send transactional emails</li>
                                    <li>To analyze website performance and improve our offerings</li>
                                    <li>To prevent fraudulent activities and enhance security</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">3. How We Share Your Information</h2>
                                <p className="text-sm md:text-base">We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following cases:</p>
                                <ul className="list-disc list-inside text-sm md:text-base">
                                    <li><strong>Service Providers:</strong> We may share your data with trusted third-party service providers.</li>
                                    <li><strong>Legal Compliance:</strong> We may disclose information if required by law.</li>
                                    <li><strong>Business Transfers:</strong> In case of a merger or acquisition, your data may be transferred.</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Data Security</h2>
                                <p className="text-sm md:text-base">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method is 100% secure.</p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Your Rights and Choices</h2>
                                <ul className="list-disc list-inside text-sm md:text-base">
                                    <li>Request a copy of your personal data.</li>
                                    <li>Request corrections to inaccurate data.</li>
                                    <li>Request deletion of your personal data.</li>
                                    <li>Adjust cookie preferences in your browser settings.</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Third-Party Links</h2>
                                <p className="text-sm md:text-base">Our Website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Children's Privacy</h2>
                                <p className="text-sm md:text-base">Our Website is not intended for individuals under the age of 10.</p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
                                <p className="text-sm md:text-base">We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
                            </section>

                            <p className="text-sm md:text-base text-center">For any questions, contact us at <a href="mailto:info@bluetickacademy.com" className="text-blue-600 underline">info@bluetickacademy.com</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}





