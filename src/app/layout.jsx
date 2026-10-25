import "./globals.css";
import SiteShell from "@/components/SiteShell";
export const metadata = {
  title: {
    default: "DSR PHARMACHEM — Fine Chemicals & API Intermediates",
    template: "%s | DSR PHARMACHEM",
  },
  description:
    "R&D fine chemicals, building blocks, API intermediates and custom synthesis from Hyderabad, India.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
