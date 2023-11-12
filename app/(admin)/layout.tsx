import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capital Partners Investment LTD",
  description: "A leading investment company with a diverse portfolio covering various sectors of the economy.",
  manifest: "/manifest.json",
  icons: { apple: "/assets/logo1.jpg", android: "/assets/logo1.jpg" },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.className}`}>
      <div className="">{children}</div>
      <Toaster />
    </body>
  </html>
  );
}
