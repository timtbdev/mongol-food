import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Noto_Sans } from "next/font/google";
import "@/styles/tailwind.css";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Celebration from "@/components/main/celebration";
import Container from "@/components/main/container";
import Main from "@/components/main/main";
import TailwindIndicator from "@/components/tailwind-indicator";
import ScrollProgress from "@/components/ui/scroll-progress";
import seoConfig from "@/config/seo";
import { cn, getBaseUrl } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "react-hot-toast";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

const noto_sans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: seoConfig.title,
  generator: seoConfig.author.name,
  applicationName: seoConfig.title,
  description: seoConfig.description,
  referrer: "origin-when-cross-origin",
  keywords: seoConfig.tags.join(", "),
  authors: [
    {
      name: seoConfig.author.name,
      url: seoConfig.author.twitterUrl,
    },
  ],
  creator: seoConfig.author.name,
  publisher: seoConfig.author.name,
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    types: {
      "application/rss+xml": getBaseUrl("/rss.xml"),
    },
  },
  appleWebApp: {
    title: seoConfig.title,
    statusBarStyle: "default",
    capable: true,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "favicons/favicon.ico",
        type: "image/x-icon",
      },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "favicons/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      { url: "/favicons/apple-icon.png" },
      {
        url: "/favicons/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicons/apple-icon-precomposed.png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: getBaseUrl(),
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: seoConfig.title,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: seoConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.twitterImage,
        width: 1200,
        height: 675,
        alt: seoConfig.title,
      },
    ],
    creator: seoConfig.author.twitterAddress,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={cn(
          bricolage.variable,
          noto_sans.variable,
          "min-h-full scroll-smooth",
        )}
        suppressHydrationWarning
      >
        <body
          className="selection:bg-brand-500 flex h-full flex-col bg-zinc-900 font-sans text-gray-200 antialiased selection:text-white"
          suppressHydrationWarning={true}
        >
          <ScrollProgress />
          <Main>
            <Header />
            <Celebration />
            <Container>{children}</Container>
            <Footer />
          </Main>
          <Analytics />
          <Toaster position="top-center" />
          <TailwindIndicator />
        </body>
        <GoogleAnalytics gaId="G-MD5KF34J62" />
      </html>
    </ViewTransitions>
  );
}
