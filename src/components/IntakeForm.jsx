import React from 'react';
import { User, MapPin, GraduationCap, Heart } from 'lucide-react';

const Label = ({ children }) => (
  <label className="block text-sm font-medium text-slate-200 mb-1">{children}</label>
);

const Input = (props) => (
  <input
    {...props}
    className={`w-full bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${props.className || ''}`}
  />
);

const TextArea = (props) => (
  <textarea
    {...props}
    className={`w-full bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${props.className || ''}`}
  />
);

const IntakeForm = ({ data, setData, onStart }) => {
  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="w-full bg-slate-900/60 border border-white/10 rounded-2xl p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="text-emerald-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Tell me about you</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Name</Label>
          <Input
            placeholder="Your name"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </div>
        <div>
          <Label>Age</Label>
          <Input
            type="number"
            min={10}
            max={60}
            placeholder="e.g., 16"
            value={data.age}
            onChange={(e) => update('age', e.target.value)}
          />
        </div>
        <div>
          <Label className="flex items-center gap-2"><MapPin size={16} /> Location</Label>
          <Input
            placeholder="Village/Town, State"
            value={data.location}
            onChange={(e) => update('location', e.target.value)}
          />
        </div>
        <div>
          <Label className="flex items-center gap-2"><GraduationCap size={16} /> Education level</Label>
          <select
            value={data.education}
            onChange={(e) => update('education', e.target.value)}
            className="w-full bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Select</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11 (Science)">Class 11 (Science)</option>
            <option value="Class 11 (Commerce)">Class 11 (Commerce)</option>
            <option value="Class 11 (Arts)">Class 11 (Arts)</option>
            <option value="Class 12 (Science)">Class 12 (Science)</option>
            <option value="Class 12 (Commerce)">Class 12 (Commerce)</option>
            <option value="Class 12 (Arts)">Class 12 (Arts)</option>
            <option value="Diploma / ITI">Diploma / ITI</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <Label className="flex items-center gap-2"><Heart size={16} /> Interests & strengths</Label>
          <TextArea
            rows={3}
            placeholder="e.g., I like science, helping others, computers, working with hands, farming, teaching..."
            value={data.interests}
            onChange={(e) => update('interests', e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <Label>Career goal (optional)</Label>
          <Input
            placeholder="e.g., nurse, teacher, electrician, agriculture, entrepreneur"
            value={data.goal}
            onChange={(e) => update('goal', e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Start Guidance
        </button>
        <p className="text-slate-400 text-sm">
          I’ll tailor suggestions to your background and interests. You can ask questions anytime.
        </p>
      </div>
    </div>
  );
};

export default IntakeForm;
