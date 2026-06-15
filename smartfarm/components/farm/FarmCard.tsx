"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Activity, Droplet, ThermometerSun } from "lucide-react";
import Image from "next/image";

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

export default function FarmCard({ field }: { field: Field }) {
  const statusColors = {
    healthy: "bg-emerald-500",
    attention: "bg-amber-500",
    critical: "bg-rose-500"
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-lg border border-slate-800 transition-all hover:shadow-emerald-900/20"
    >
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={field.image || "/images/corn-field.png"} 
          alt={field.title} 
          fill
          className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <MapPin className="text-emerald-400" size={20} />
            </div>
            <div>
              <h3 className="truncate text-lg font-bold text-white tracking-tight">{field.title}</h3>
              <div className="text-xs font-medium text-emerald-300">{field.area ?? "—"}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
            <div className={`w-2 h-2 rounded-full ${statusColors[field.status || 'healthy']}`} />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{field.status || 'Healthy'}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-6">
          <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
            <span className="text-sm font-semibold text-emerald-100">Crop: {field.crop ?? "Mixed"}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm">
                <Users size={16} className="text-slate-400" />
                <span>{field.workers ?? 0}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm">
                <Droplet size={16} className="text-blue-400" />
                <span>{field.moisture ?? 45}%</span>
              </div>
            </div>

            <button className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all">
              Manage
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
