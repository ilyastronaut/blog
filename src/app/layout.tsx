import { Geist } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="p-6 mx-auto w-full max-w-2xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
