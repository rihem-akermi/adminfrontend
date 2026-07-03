import Sidebar from "@/components/Sidebar";

// 🔒 Plus tard : ici on vérifiera le token JWT + le rôle ADMIN
// avant d'afficher quoi que ce soit (voir la Phase Auth du backend).
// Pour l'instant, tout le monde peut voir cette page (mode apprentissage).

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
