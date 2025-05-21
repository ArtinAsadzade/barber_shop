import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

// Using Vazirmatn as our Persian font
const vazirmatn = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "آرایشگاه مردانه مدرن | Modern Men's Barbershop",
  description: "یک آرایشگاه مردانه مدرن با خدمات حرفه‌ای و با کیفیت",
  openGraph: {
    title: "آرایشگاه مردانه مدرن | Modern Men's Barbershop",
    description: "یک آرایشگاه مردانه مدرن با خدمات حرفه‌ای و با کیفیت",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(vazirmatn.variable, "font-vazirmatn bg-background min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
