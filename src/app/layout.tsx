import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/presentation/components/theme/ThemeProvider";
import { site } from "@/config/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description:
    "Self-taught software engineer with 7+ years shipping production apps across Android, iOS, Flutter, React and .NET. Based in Nairobi, Kenya.",
  keywords: [
    "Siro Jackson",
    "SiroDevs",
    "Software Engineer Nairobi",
    "Flutter Developer Kenya",
    "Android Developer",
    "iOS Developer",
    "React Developer",
    "Mobile App Developer Kenya",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Self-taught software engineer with 7+ years shipping production apps across Android, iOS, Flutter, React and .NET.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/profile.jpg", width: 1200, height: 1200 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Self-taught software engineer with 7+ years shipping production apps across Android, iOS, Flutter, React and .NET.",
    creator: "@SiroFitske",
    images: ["/images/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0B09" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-grain`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
