import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import StoreProvider from "@/utils/StoreProvider";
import GetUserData from "@/utils/get-user";
import { Toaster } from "@/components/ui/sonner"
import { Toaster as HotToaster } from "react-hot-toast"


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
  title: "synopsis.ai - AI powered PDF summarizer",
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
              className={`${roboto.variable} ${geist.variable} antialiased bg-gray-100`}
            >
              <Navbar />
              <main className="w-full">{children}</main>
              <Footer />
              <Toaster position="bottom-right" />
              <HotToaster position="bottom-right" />
            </body>
          </html>
        </GetUserData>
      </ClerkProvider>
    </StoreProvider>
  );
}
