"use client";
import Image from "next/image";
import Link from "next/link";
const banner = "/img/banner.jpg";

export default function TermsAndConditions() {
  return (
    <>
      {/* Banner Section */}
      <section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4 pt-[110px] max-[768px]:mt-[-55px] md:pt-[80px] pb-[30px] md:pb-[50px]">
          <p className="text-[#F3F3F3] text-[25px] md:text-[48px] font-bold font-['Montserrat'] capitalize leading-[28px] md:leading-[60px] mt-[5px] md:mt-[10px] text-center">
            Terms And Condition
          </p>

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
                  Terms And Condition
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section>
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
          <div className="mx-auto md:p-6 mt-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
              Terms and Conditions
            </h1>

            <p className="mt-4 text-sm sm:text-base">
              <strong>BlueTick AI Academy</strong> is owned and operated by Tech Tree ("we," "our," or
              "us"). By accessing or using our website{" "}
              <a href="https://bluetickacademy.com" className="text-blue-500 underline">
                https://bluetickacademy.com
              </a>{" "}
              ("Website") and our services, you agree to comply with and be bound
              by these Terms and Conditions ("Terms"). If you do not agree with
              any part of these Terms, please do not use our services.
            </p>

            {/* ——— Section 1 ——— */}
            <h2 className="text-lg sm:text-xl font-semibold mt-6">1. Definitions</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base">
              <li>
                <strong>"User," "You," or "Your"</strong> refers to any individual
                or entity using our services.
              </li>
              <li>
                <strong>"Services"</strong> refer to all courses, training
                programs, and related offerings provided by BlueTick Academy.
              </li>
              <li>
                <strong>"Website"</strong> refers to{" "}
                <a href="https://bluetickacademy.com" className="text-blue-500 underline">
                  https://bluetickacademy.com
                </a>
              </li>
            </ul>

            {/* ——— Section 2 ——— */}
            <h2 className="text-lg sm:text-xl font-semibold mt-6">2. Eligibility</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base">
              <li>You must be at least 18 years old or have guardian consent.</li>
              <li>You must provide accurate and complete information when registering.</li>
            </ul>

            {/* ——— Section 3 ——— */}
            <h2 className="text-lg sm:text-xl font-semibold mt-6">3. Enrollment & Payments</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base">
              <li>Course fees must be paid in full or according to the agreed installment plan.</li>
              <li>Fees are non-refundable.</li>
              <li>We may modify course details before course commencement.</li>
              <li>Applicable taxes may be charged.</li>
            </ul>

            {/* ——— Section 4 ——— */}
            <h2 className="text-lg sm:text-xl font-semibold mt-6">4. Refund & Cancellation Policy</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base">
              <li>Cancellations 7 days before course start receive a full refund.</li>
              <li>
                Refund requests must be emailed to{" "}
                <a href="mailto:info@bluetickacademy.com" className="text-blue-500 underline">
                  info@bluetickacademy.com
                </a>
              </li>
              <li>No refunds after course commencement.</li>
            </ul>

            {/* ——— Section 5 ——— */}
            <h2 className="text-lg sm:text-xl font-semibold mt-6">5. Course Conduct & Code of Ethics</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base">
              <li>Maintain professional behavior.</li>
              <li>Harassment or misconduct results in termination without refund.</li>
              <li>Course materials cannot be shared or redistributed.</li>
            </ul>

            {/* ——— Section 6–14 remain same but corrected ——— */}

            <h2 className="text-lg sm:text-xl font-semibold mt-6">6. Intellectual Property</h2>
            <p className="text-sm sm:text-base">
              All content and course materials belong to BlueTick Academy and are
              copyright protected.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">7. Disclaimer of Warranties</h2>
            <p className="text-sm sm:text-base">
              Services are provided "as is" without guarantees of specific results.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">8. Limitation of Liability</h2>
            <p className="text-sm sm:text-base">
              We are not liable for indirect or consequential damages.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">9. Privacy Policy</h2>
            <p className="text-sm sm:text-base">
              Governed by our{" "}
              <a href="https://bluetickacademy.com/privacy-policy" className="text-blue-500 underline">
                Privacy Policy
              </a>
              .
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">
              10. Third-Party Links & Services
            </h2>
            <p className="text-sm sm:text-base">
              We are not responsible for third-party websites or services.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">
              11. Modification of Terms
            </h2>
            <p className="text-sm sm:text-base">
              Terms may be updated; continued use implies acceptance.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">12. Termination</h2>
            <p className="text-sm sm:text-base">
              Violations may result in termination without notice.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">
              13. Governing Law & Dispute Resolution
            </h2>
            <p className="text-sm sm:text-base">
              Governed by the laws of Bangalore, Karnataka.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-6">14. Contact Us</h2>
            <p className="text-sm sm:text-base">For queries:</p>

            <p className="font-semibold text-sm sm:text-base">BlueTick AI Academy</p>
            <p className="text-sm sm:text-base">
              No.545, 2nd Floor, CMH Road, Indiranagar Stage 2, Bangalore - 560038
            </p>

            <p className="text-sm sm:text-base">
              Email:{" "}
              <a href="mailto:sandya@bluetickacademy.com" className="text-blue-500 underline">
                sandya@bluetickacademy.com
              </a>
            </p>

            <p className="text-sm sm:text-base">
              Phone:{" "}
              <a href="tel:+919606995525" className="text-blue-500 underline">
                9606-9955-25
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
