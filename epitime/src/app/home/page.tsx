"use client";

import { Clock, Users, BarChart3, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Suivi du temps",
      desc: "Enregistrez vos arrivées et départs en un clic, visualisez vos heures et vos retards.",
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Gestion d’équipe",
      desc: "Pilotez vos collaborateurs, visualisez leur présence et distribuez les tâches efficacement.",
      icon: <Users className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Statistiques & KPI",
      desc: "Analysez les performances avec des indicateurs clairs et visuels.",
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Performance & Fiabilité",
      desc: "Des outils rapides, fiables et connectés pour vos projets quotidiens.",
      icon: <CheckCircle2 className="w-6 h-6 text-pink-400" />,
    },
  ];

  const stats = [
    { number: "250+", label: "Employés actifs" },
    { number: "32", label: "Équipes gérées" },
    { number: "1.2K", label: "Heures enregistrées / jour" },
    { number: "98%", label: "Taux de satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
            Bienvenue sur <span className="text-white">Time Manager</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Optimisez votre temps, votre équipe et vos résultats !
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/login"
              className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
            >
              Se connecter
            </a>
            <a
              href="/stats"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all transform hover:scale-105"
            >
              Voir les statistiques
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-16 flex justify-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2103/2103691.png"
            alt="Illustration gestion du temps"
            width={250}
            height={250}
            className="drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">
            Fonctionnalités principales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-blue-800/30 border border-blue-600 rounded-2xl p-6 text-center hover:scale-105 hover:bg-blue-700/40 transition-all shadow-lg"
              >
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-blue-100">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 to-blue-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="group">
              <div className="text-4xl font-bold text-yellow-400 group-hover:text-yellow-300 transition mb-2">
                {s.number}
              </div>
              <div className="text-blue-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-blue-200 bg-blue-950/80">
        © 2025 Time Manager — Epitech Project
      </footer>
    </div>
  );
}
