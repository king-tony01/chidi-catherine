import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chidi Catherine Obi-Hezekiah, RPN | Electronic Professional Nursing Portfolio",
  description:
    "Electronic Professional Nursing Portfolio for Chidi Catherine Obi-Hezekiah, Registered Practical Nurse (RPN) licensed since 2021 and Honours BSN Candidate at Seneca Polytechnic (President's Honour List). Documenting clinical progression, nursing philosophy, acute placement experience, and CNO competencies.",
  keywords: [
    "Nursing Portfolio",
    "Chidi Catherine Obi-Hezekiah",
    "Chidi Obi-Hezekiah",
    "RPN Ontario",
    "Seneca Polytechnic BSN",
    "Mackenzie Health Hospital 3 Aqua",
    "Brampton Civic Hospital General Medicine",
    "Seneca President's Honour List",
    "College of Nurses of Ontario",
    "CNO Entry to Practice",
    "Registered Nurse Candidate",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
