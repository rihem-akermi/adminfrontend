import "./globals.css";

export const metadata = {
  title: "Plateforme Artisans - Admin",
  description: "Dashboard admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
