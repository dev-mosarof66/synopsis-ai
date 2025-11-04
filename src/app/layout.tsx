import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/utils/StoreProvider";
import GetUserData from "@/utils/get-user";

const roboto = Roboto({
  variable: "--font-roboto",
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geist = Geist({
  variable: "--font-geist",
  style: ["normal"],
  weight: ["500", "400"],
});

export const metadata: Metadata = {
  title: "synopsis.ai - AI powered video and pdf summarizer",
  description:
    "This platform converts the uploaded video or pdf into a short summary like reels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <GetUserData>
          <html lang="en">
            <body
              className={`${roboto.variable} ${geist.variable} antialiased w-full min-h-screen flex flex-col`}
            >
              <Navbar />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
              <Toaster position="bottom-right" />
            </body>
          </html>
        </GetUserData>
      </ClerkProvider>
    </StoreProvider>
  );
}
