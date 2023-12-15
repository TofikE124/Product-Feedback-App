import type { Metadata } from "next";
import { Jost } from "next/font/google";
import SessionProvider from "./providers/SessionProvider";
import "./main.scss";
import Navbar from "./Navbar";

const jost = Jost({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
