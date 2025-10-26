import React from 'react';
import { Sparkles, GraduationCap, BookOpenCheck, Route } from 'lucide-react';

const ActionPanel = ({ onCareers, onScholarships, onSkills, onRoadmap }) => {
  const base =
    'flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-900 text-slate-100 transition-colors';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <button className={`${base}`} onClick={onCareers}>
        <Sparkles className="text-emerald-400" size={18} />
        Show Career Options
      </button>
      <button className={`${base}`} onClick={onScholarships}>
        <GraduationCap className="text-yellow-300" size={18} />
        View Scholarships
      </button>
      <button className={`${base}`} onClick={onSkills}>
        <BookOpenCheck className="text-sky-300" size={18} />
        Learn Skills Online
      </button>
      <button className={`${base}`} onClick={onRoadmap}>
        <Route className="text-pink-300" size={18} />
        Get Step-by-Step Plan
      </button>
    </div>
  );
};

export default ActionPanel;
