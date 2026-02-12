import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";

import { fontSans, fontMono, fontDisplay } from "@/config/fonts";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#050505" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="de">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
