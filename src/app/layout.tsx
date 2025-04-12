import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TamLH AI Assistant",
  description: "TamLH AI Assistant and Chatbot is a personalized AI powered by Retrieval-Augmented Generation (RAG). It answers questions about Tam’s tech background, blog posts, projects, and skills — from frontend/backend to cloud and product thinking. Built for recruiters, collaborators, or curious readers, it gives real-time answers from Tam’s latest content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="sticky top-0 z-50 bg-gray-900 p-4 border-b border-gray-800">
          <div className="max-w-3xl mx-auto flex gap-6">
            <a href="https://thnkandgrow.com" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="https://blog.thnkandgrow.com" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </a>
            <a href="https://thnkandgrow.com/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
