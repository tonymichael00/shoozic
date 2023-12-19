import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shoozic",
  description: "Better than Spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} font-medium`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
