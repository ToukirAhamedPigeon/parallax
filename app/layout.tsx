import { ThemeProvider } from 'next-themes'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parallax",
  description: "Beautifull Landing Page with Paralax Effect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
      
    </html>
  );
}
