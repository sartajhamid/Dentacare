import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentaCare Pro | Modern Dental Clinic",
  description: "Award-winning dental care in [City], USA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}