import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dymas Alfin — UI/UX Designer",
  description:
    "Designing digital products that are clear, usable, and conversion focused. Portfolio of Dymas Alfin, UI/UX Designer with 9+ years of experience.",
  keywords: [
    "UI/UX Designer",
    "Portfolio",
    "Product Design",
    "Dymas Alfin",
    "Web Design",
  ],
  authors: [{ name: "Dymas Alfin" }],
  openGraph: {
    title: "Dymas Alfin — UI/UX Designer",
    description:
      "Designing digital products that are clear, usable, and conversion focused.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
