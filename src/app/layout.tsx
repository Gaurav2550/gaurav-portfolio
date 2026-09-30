import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
  title: "Gaurav Thombare — Software Engineer",
  description:
    "Software Engineer specializing in Java, Spring Boot, REST APIs, system design, databases, and scalable backend applications.",
  keywords: [
    "Gaurav Thombare",
    "Software Engineer",
    "Java Developer",
    "Java Backend Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "Full Stack Developer",
    "REST API",
    "System Design",
    "Spring Security",
    "PostgreSQL",
    "MySQL",
  ],
  authors: [
    {
      name: "Gaurav Thombare",
    },
  ],
  openGraph: {
    title: "Gaurav Thombare — Software Engineer",
    description:
      "Software Engineer specializing in Java, Spring Boot, REST APIs, system design, databases, and scalable backend applications.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
