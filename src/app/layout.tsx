import type { Metadata } from "next";
import "./globals.css"; // Retour au CSS pur

export const metadata: Metadata = {
  title: "Selenora - Maroquinerie artisanale française",
  description:
    "Découvrez l'élégance de la maroquinerie artisanale française avec Selenora. Sacs, accessoires et créations uniques.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
