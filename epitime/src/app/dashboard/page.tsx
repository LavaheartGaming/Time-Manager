"use client";

import { useEffect, useState } from "react";
import { BarChart3, CheckSquare, Clock, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const [tasksDone, setTasksDone] = useState(12);
  const [tasksPending, setTasksPending] = useState(5);
  const [productivity, setProductivity] = useState(82);
  const [weeklyHours, setWeeklyHours] = useState(37);

  useEffect(() => {
    
    console.log("Dashboard chargé ✅");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12 bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-10 text-yellow-400 text-center">
        Tableau de bord
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        <DashboardCard
          icon={<CheckSquare className="w-10 h-10 text-green-400" />}
          label="Tâches terminées"
          value={tasksDone}
          color="from-green-500/20 to-green-700/20"
        />
        <DashboardCard
          icon={<Clock className="w-10 h-10 text-yellow-400" />}
          label="Tâches en attente"
          value={tasksPending}
          color="from-yellow-500/20 to-yellow-700/20"
        />
        <DashboardCard
          icon={<TrendingUp className="w-10 h-10 text-purple-400" />}
          label="Productivité (%)"
          value={`${productivity}%`}
          color="from-purple-500/20 to-purple-700/20"
        />
        <DashboardCard
          icon={<BarChart3 className="w-10 h-10 text-blue-400" />}
          label="Heures travaillées"
          value={`${weeklyHours}h`}
          color="from-blue-500/20 to-blue-700/20"
        />
      </div>

      <div className="mt-16 max-w-4xl bg-blue-950/70 border border-blue-800 rounded-2xl p-8 shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Résumé hebdomadaire</h2>
        <p className="text-white/80 leading-relaxed">
          Félicitations 🎉 Vous avez accompli{" "}
          <span className="text-yellow-300 font-semibold">{tasksDone}</span> tâches cette semaine,
          avec un taux de productivité de{" "}
          <span className="text-yellow-300 font-semibold">{productivity}%</span>.
          Continuez sur cette lancée pour atteindre vos objectifs 💪
        </p>
      </div>
    </div>
  );
}


function DashboardCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-2xl border border-white/10 p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex flex-col items-center">
        <div className="mb-4">{icon}</div>
        <div className="text-3xl font-bold text-white">{value}</div>
        <div className="text-sm text-white/70 mt-1">{label}</div>
      </div>
    </div>
  );
}
