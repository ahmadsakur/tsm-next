import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "TSM Apps",
  description: "TSM Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
