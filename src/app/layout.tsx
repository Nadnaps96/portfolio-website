import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spandan Ghosh | Full-Stack Developer & Backend Engineer",
  description: "Portfolio of Spandan Ghosh, a Full-Stack Developer and SDE-Backend Engineer specializing in Python, Django, Flask, Next.js, Docker, and AWS. Graduate of PDPM IIITDM Jabalpur.",
  keywords: ["Spandan Ghosh", "Full-Stack Developer", "Backend Engineer", "Next.js Portfolio", "Python Developer", "Django", "Flask", "Docker", "AWS", "IIITDM Jabalpur"],
  authors: [{ name: "Spandan Ghosh" }],
  openGraph: {
    title: "Spandan Ghosh | Full-Stack Developer & Backend Engineer",
    description: "Portfolio of Spandan Ghosh, showcasing Marevlo, IIITDM Alumni Connect, and StudyWise.",
    url: "https://spandanghosh.vercel.app", // Default fallback
    siteName: "Spandan Ghosh Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased selection:bg-accent selection:text-white font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
