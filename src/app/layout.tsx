import type { Metadata } from "next";
import "./selenora.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Selenora - Maroquinerie artisanale française",
  description:
    "Découvrez notre collection de sacs en cuir artisanaux français. Qualité premium et savoir-faire traditionnel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="selenora">
      <body className="antialiased">{children}</body>
    </html>
  );
}
