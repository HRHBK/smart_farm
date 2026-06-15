"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import FarmCard from "../../components/farm/FarmCard";
import { MapPin, Users, Search, Wheat, Droplet, Plus } from "lucide-react";
import { motion } from "framer-motion";

type Field = {
  id: string;
  title: string;
  crop?: string;
  area?: string;
  workers?: number;
  image?: string;
  status?: 'healthy' | 'attention' | 'critical';
  moisture?: number;
};

const SAMPLE_FIELDS: Field[] = [
  { id: "f1", title: "North Field", crop: "Maize", area: "2.4 ha", workers: 3, status: "healthy", moisture: 65, image: "/images/corn-field.png" },
  { id: "f2", title: "East Plot", crop: "Cassava", area: "1.1 ha", workers: 1, status: "attention", moisture: 38, image: "/images/corn-field.png" },
  { id: "f3", title: "South Orchard", crop: "Plantain", area: "0.6 ha", workers: 2, status: "healthy", moisture: 72, image: "/images/corn-field.png" },
  { id: "f4", title: "Demo Bed", crop: "Vegetables", area: "0.2 ha", workers: 1, status: "critical", moisture: 20, image: "/images/corn-field.png" },
];

const totalWorkers = SAMPLE_FIELDS.reduce((s, f) => s + (f.workers || 0), 0);
const totalArea = SAMPLE_FIELDS.reduce((s, f) => s + parseFloat(f.area || "0"), 0);

export default function FarmPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return SAMPLE_FIELDS;
    return SAMPLE_FIELDS.filter(
      (f) => f.title.toLowerCase().includes(term) || (f.crop || "").toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Farm Management</h1>
            <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mt-1">Monitor fields, crops, and workers in real-time.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 text-white text-sm font-bold shadow-md shadow-emerald-500/20 transition-all">
            <Plus className="w-4 h-4" />
            Add Field
          </button>
        </header>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Fields", value: SAMPLE_FIELDS.length, icon: MapPin, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10" },
            { label: "Total Area", value: `${totalArea.toFixed(1)} ha`, icon: Wheat, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10" },
            { label: "Workers Active", value: totalWorkers, icon: Users, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10" },
            { label: "Avg Moisture", value: `${Math.round(SAMPLE_FIELDS.reduce((s, f) => s + (f.moisture || 0), 0) / SAMPLE_FIELDS.length)}%`, icon: Droplet, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
          ].map(({ label, value, icon: Icon, color, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, ease: "easeOut" }}
              className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-slate-200/50 dark:border-zinc-800/50 p-5 rounded-2xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wide">{label}</span>
                <div className={`p-2 rounded-lg ${bg} ${color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{value}</div>
            </motion.div>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search fields or crops…"
            className="w-full pl-10 pr-4 py-3 border border-slate-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-xl text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>

        {/* Field Cards */}
        <motion.section layout className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.length === 0 ? (
            <div className="col-span-2 flex flex-col items-center justify-center py-20 text-center text-slate-400">
              <MapPin className="w-12 h-12 mb-4 opacity-30" />
              <h3 className="text-lg font-bold text-slate-600 dark:text-zinc-400">No fields match your search</h3>
              <p className="text-sm mt-1">Try searching by a field name or crop type.</p>
            </div>
          ) : (
            filtered.map((f) => <FarmCard key={f.id} field={f} />)
          )}
        </motion.section>
      </div>
    </DashboardLayout>
  );
}
