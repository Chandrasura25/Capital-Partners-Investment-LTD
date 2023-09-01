import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
export const metadata = {
  title: "Capital Partners Investment LTD",
  description: "Capital Partners Investment LTD",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <div className="flex w-full justify-center items-center min-h-screen">{children}</div>
          </body>
      </html>
    </ClerkProvider>
  );
}