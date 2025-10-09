"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  LogIn,
  LogOut,
  CheckCircle,
  AlertTriangle,
  Timer,
  CalendarDays,
} from "lucide-react";

export default function ClockPage() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);
  const [signature, setSignature] = useState("");
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const [workedTime, setWorkedTime] = useState<string>("00:00:00");

  // Update timer every second if user is clocked in
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isClockedIn && clockInTime) {
      interval = setInterval(() => {
        const diff = Date.now() - clockInTime.getTime();
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        setWorkedTime(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isClockedIn, clockInTime]);

  const handleClockIn = () => {
    setIsClockedIn(true);
    const now = new Date();
    setClockInTime(now);
    setLastAction("Clocked in at " + now.toLocaleTimeString());
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    const now = new Date();
    setLastAction("Clocked out at " + now.toLocaleTimeString());
    setClockInTime(null);
    setWorkedTime("00:00:00");
  };

  const handleSubmitSignature = () => {
    if (!signature.trim()) return alert("⚠️ Please sign before submitting!");
    alert(`✅ Your attendance has been signed: "${signature}"`);
    setSignature("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white py-16 px-4">
      {/* --- HEADER --- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold mb-2 text-yellow-400">
          Time Clock System
        </h1>
        <p className="text-blue-200 text-sm">
          Track your daily attendance and working hours in real-time.
        </p>
      </motion.div>

      {/* --- MAIN CARD --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0F2658] rounded-2xl shadow-lg p-8 w-full max-w-3xl flex flex-col items-center"
      >
        <Clock className="w-16 h-16 text-cyan-400 mb-6 animate-pulse" />

        <h2 className="text-2xl font-bold mb-4 text-center">
          {isClockedIn
            ? "You are currently clocked in"
            : "You are currently clocked out"}
        </h2>

        <p className="text-blue-200 text-sm mb-6 text-center">
          {lastAction || "No record for today yet."}
        </p>

        {/* --- TIMER SECTION --- */}
        {isClockedIn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 bg-slate-800/60 border border-slate-700 px-5 py-3 rounded-xl mb-6"
          >
            <Timer className="text-cyan-400 w-5 h-5" />
            <span className="text-cyan-300 font-semibold text-lg">
              Working time: {workedTime}
            </span>
          </motion.div>
        )}

        {/* --- ACTION BUTTONS --- */}
        <div className="flex gap-6 mb-8">
          <button
            onClick={handleClockIn}
            disabled={isClockedIn}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold transition-all ${
              isClockedIn
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-emerald-400 text-slate-900 hover:bg-emerald-300"
            }`}
          >
            <LogIn className="w-5 h-5" /> Clock In
          </button>

          <button
            onClick={handleClockOut}
            disabled={!isClockedIn}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold transition-all ${
              !isClockedIn
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-red-400 text-slate-900 hover:bg-red-300"
            }`}
          >
            <LogOut className="w-5 h-5" /> Clock Out
          </button>
        </div>

        {/* --- SIGNATURE SECTION --- */}
        <div className="w-full bg-slate-800/60 p-5 rounded-xl border border-slate-700">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-400" /> Digital Signature
          </h3>
          <p className="text-slate-300 text-sm mb-3">
            Please sign your attendance for today before leaving.
          </p>

          <input
            type="text"
            placeholder="Type your name..."
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleSubmitSignature}
            className="mt-4 w-full py-2 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-all"
          >
            Sign Attendance
          </button>
        </div>
      </motion.div>

      {/* --- STATUS MESSAGE --- */}
      {lastAction && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex items-center gap-3 bg-slate-800/70 border border-slate-700 px-6 py-3 rounded-xl"
        >
          {isClockedIn ? (
            <CheckCircle className="text-emerald-400" />
          ) : (
            <AlertTriangle className="text-yellow-400" />
          )}
          <span className="text-slate-200 text-sm">{lastAction}</span>
        </motion.div>
      )}

      {/* --- FOOTER --- */}
      <div className="mt-16 text-center text-sm text-blue-300 flex flex-col items-center">
        <CalendarDays className="w-5 h-5 mb-2" />
        <p>
          {new Date().toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
