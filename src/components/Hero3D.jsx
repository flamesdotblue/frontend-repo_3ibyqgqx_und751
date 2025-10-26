import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-end md:items-center">
        <div className="text-white py-8 md:py-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/20 text-emerald-300 text-sm mb-4">
            <Rocket size={16} />
            <span>CareerPath Guru • Designed for rural students</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Discover your path. Learn the skills. Build your future.
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl">
            Friendly, step-by-step career guidance with scholarships, skill-building, and simple roadmaps — tailored to your interests and background.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
