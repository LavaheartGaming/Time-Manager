"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setProfilePicUrl("/default-avatar.png");
    } else {
      setIsLoggedIn(false);
      setProfilePicUrl(null);
    }
  }, []);

  const navigation = [
    { name: "Accueil", href: "/home" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Mes tâches", href: "/tasks" },
    { name: "Mon compte", href: "/account" },
  ];

  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white">
        <nav className="sticky top-0 z-50 w-full bg-blue-950/95 backdrop-blur-md border-b border-blue-800 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
            <div className="flex items-center gap-3">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2103/2103691.png"
                alt="Logo Time Manager"
                width={40}
                height={40}
                className="rounded-md"
              />
              <Link
                href="/home"
                className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-all"
              >
                Time Manager
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-sm tracking-wide transition-all ${
                    pathname === item.href
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href={isLoggedIn ? "/profile" : "/login"}
                className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-yellow-400 hover:bg-yellow-300 transition-all transform hover:scale-110 border border-white/20 shadow-md"
              >
                {profilePicUrl ? (
                  <Image
                    src={profilePicUrl}
                    alt="Profil"
                    width={40}
                    height={40}
                    className="object-cover rounded-full"
                  />
                ) : (
                  <User className="h-5 w-5 text-gray-900" />
                )}
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-yellow-400 hover:text-yellow-300 transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-blue-950/95 border-t border-blue-800 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-lg transition-all ${
                    pathname === item.href
                      ? "text-yellow-400 font-semibold"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-4 border-t border-blue-800 pt-3">
                <Link
                  href={isLoggedIn ? "/profile" : "/login"}
                  className="block w-full bg-yellow-400 text-gray-900 text-center font-semibold py-2 rounded-lg hover:bg-yellow-300 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isLoggedIn ? "Mon compte" : "Se connecter"}
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="flex-grow">{children}</main>

        <footer className="bg-blue-950 border-t border-blue-800 text-center text-sm py-4 mt-10">
          <p className="text-blue-200">
            © 2025 Time Manager | Projet Étudiant Epitech |
            <Link href="/mentions-legales" className="text-yellow-400 hover:underline mx-1">
              Mentions légales
            </Link>
            |
            <Link href="/confidentialite" className="text-yellow-400 hover:underline mx-1">
              Politique de confidentialité
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
