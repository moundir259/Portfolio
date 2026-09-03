import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/300-italic.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

const siteUrl = "https://moundirrammit.com"; // update once you have your live domain

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moundir Rammit — AI Artist & Creative Technologist",
    template: "%s — Moundir Rammit",
  },
  description:
    "Moundir Rammit is an AI Artist and Creative Technologist based in Kraków, Poland, creating cinematic AI commercials, UGC campaigns, and visual stories for brands.",
  keywords: [
    "AI Artist",
    "AI Creative Director",
    "AI Commercials",
    "UGC Content Creator",
    "Creative Technologist",
    "Moundir Rammit",
  ],
  authors: [{ name: "Moundir Rammit" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Moundir Rammit — AI Artist & Creative Technologist",
    description:
      "Cinematic AI commercials, UGC campaigns, and visual stories for brands — real filmmaking meets generative production.",
    url: siteUrl,
    siteName: "Moundir Rammit",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moundir Rammit — AI Artist & Creative Technologist",
    description:
      "Cinematic AI commercials, UGC campaigns, and visual stories for brands.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
