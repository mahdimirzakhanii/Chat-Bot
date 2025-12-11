import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "Chat Bot",
  description: "AI Generated",
};

//defualt font
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

// API Key: AIzaSyBOKRNwINS9649sK332a8IhSt2jqbYx_BQ

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex ${lato.className} items-center justify-center`}>
        <div className="flex flex-col items-center justify-center gap-5 w-[80%]">
          <Header />
          <div className="flex flex-col items-center justify-start">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
