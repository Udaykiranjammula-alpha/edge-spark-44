import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDGE SPARK — The New Frequency",
  description:
    "A contemporary luxury clothing brand from Guntur, Andhra Pradesh, India. Sharp structure, quiet movement, and pieces built to stay in rotation.",
  metadataBase: new URL("https://edgespark.in"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
