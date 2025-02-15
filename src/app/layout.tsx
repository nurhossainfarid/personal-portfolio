import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto, Raleway } from "next/font/google";
import Providers from "@/lib/Providers";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nur Hossain Farid",
  description: "This is the personal website of nur Hossain Farid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${roboto.className} ${raleway.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
