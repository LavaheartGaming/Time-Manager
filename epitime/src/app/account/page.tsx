"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Pencil, Lock, Trash2, Bell, Settings } from "lucide-react";

export default function AccountPage() {
  const [openSection, setOpenSection] = useState<string | null>("profile");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2103/2103691.png"
          alt="Time Manager Logo"
          className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">Bonjour, scawward 👋</h1>
        <p className="text-white/70">Gérez vos informations et préférences de compte.</p>
      </div>

      {/* Container */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {/* SECTION 1 - Profil */}
        <AccountSection
          title="Gérer votre compte"
          icon={<Settings className="text-yellow-400" />}
          isOpen={openSection === "profile"}
          onToggle={() => toggleSection("profile")}
        >
          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition-colors">
              <Pencil size={16} /> Modifier mes informations
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition-colors">
              <Lock size={16} /> Changer mon mot de passe
            </li>
            <li className="flex items-center gap-2 hover:text-red-400 cursor-pointer transition-colors">
              <Trash2 size={16} /> Supprimer mon compte
            </li>
          </ul>
        </AccountSection>

        {/* SECTION 2 - Sorties enregistrées */}
        <AccountSection
          title="Mes tâches sauvegardées"
          icon={<Bell className="text-yellow-400" />}
          isOpen={openSection === "tasks"}
          onToggle={() => toggleSection("tasks")}
        >
          <p className="text-white/80 text-sm">
            Vous n’avez pas encore de tâches enregistrées.
          </p>
        </AccountSection>

        {/* SECTION 3 - Préférences */}
        <AccountSection
          title="Préférences et notifications"
          icon={<Settings className="text-yellow-400" />}
          isOpen={openSection === "prefs"}
          onToggle={() => toggleSection("prefs")}
        >
          <ul className="space-y-3">
            <li>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-yellow-400" /> 
                Recevoir un rappel quotidien de mes tâches
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-yellow-400" /> 
                Activer le mode sombre (automatique)
              </label>
            </li>
          </ul>
        </AccountSection>

        {/* SECTION 4 - Sécurité */}
        <AccountSection
          title="Sécurité et confidentialité"
          icon={<Lock className="text-yellow-400" />}
          isOpen={openSection === "security"}
          onToggle={() => toggleSection("security")}
        >
          <p className="text-white/80 text-sm">
            Votre compte est sécurisé par une authentification standard.  
            <br />Pour plus de sécurité, activez la double vérification.
          </p>
          <button className="mt-3 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-300 font-semibold transition-all">
            Activer la 2FA
          </button>
        </AccountSection>
      </div>
    </div>
  );
}

// --- Sous-composant réutilisable ---
function AccountSection({
  title,
  icon,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-blue-950/60 border border-blue-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-lg font-semibold text-yellow-400"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-white/90 text-sm animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
