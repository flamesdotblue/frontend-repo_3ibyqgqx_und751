import React, { useMemo, useState } from 'react';
import Hero3D from './components/Hero3D';
import IntakeForm from './components/IntakeForm';
import ActionPanel from './components/ActionPanel';
import ChatBox from './components/ChatBox';

function craftGreeting(name) {
  const who = name ? `, ${name}` : '';
  return `Namaste${who}! I am CareerPath Guru — your friendly career guide. Tell me a bit about yourself and I’ll suggest careers, scholarships, and a simple plan.`;
}

function generateCareerOptions({ education, interests = '' }) {
  const list = [];
  const text = interests.toLowerCase();

  const push = (title, scope, skills, educationPath) => {
    list.push({ title, scope, skills, educationPath });
  };

  if (text.includes('science') || education.includes('Science')) {
    push(
      'Nursing / Paramedical',
      'High demand in hospitals, clinics and community health centres across India.',
      ['Biology basics', 'compassion', 'communication', 'hygiene'],
      'Complete Class 12 (PCB) → ANM/GNM or B.Sc Nursing → Register with state nursing council.'
    );
    push(
      'Agricultural Technician',
      'Work with farmers on seeds, soil, irrigation, and modern tools. Jobs in Krishi Vigyan Kendras (KVKs) and agri-startups.',
      ['Basic biology', 'field work', 'problem solving', 'record keeping'],
      'Class 10/12 → Diploma in Agriculture (2–3 yrs) or B.Sc Agriculture → Intern at local KVK.'
    );
    push(
      'Renewable Energy Technician',
      'Install and maintain solar pumps, rooftop panels, and microgrids. Growing sector in rural India.',
      ['Electrical basics', 'safety', 'tools handling', 'MS Office'],
      'Class 10/12 → ITI Electrician/Technician (1–2 yrs) + Solar PV short courses (NISE).'
    );
  }

  if (text.includes('computer') || text.includes('coding')) {
    push(
      'Junior Web Developer',
      'Remote/freelance work building websites for local businesses, schools, and NGOs.',
      ['HTML/CSS', 'JavaScript', 'Git', 'communication'],
      'Learn online via SWAYAM/YouTube → Build 3–5 projects → Apply for internships/freelance gigs.'
    );
  }

  if (text.includes('teaching') || text.includes('kids')) {
    push(
      'Primary Teacher / Tutor',
      'Teach in local schools or run an after-school tuition centre.',
      ['Subject knowledge', 'patience', 'Hindi/English basics', 'lesson planning'],
      'Complete Class 12 → D.El.Ed/B.Ed depending on state rules → Qualify CTET/State TET.'
    );
  }

  if (text.includes('farming') || text.includes('agri')) {
    push(
      'Agri-Entrepreneur',
      'Start small businesses: nursery, mushroom, vermicompost, dairy, poultry, or farm machinery services.',
      ['Basic accounts', 'marketing', 'soil/crop basics', 'digital payments'],
      'Short-term training via Krishi Vigyan Kendra / MANAGE / ATMA → Apply PMEGP for loan subsidy.'
    );
  }

  if (list.length === 0) {
    push(
      'ITI Electrician / Mechanic',
      'Steady jobs in government/private sector; easy to start after Class 10.',
      ['Electrical safety', 'tools', 'drawing', 'teamwork'],
      'Class 10 → ITI (1–2 yrs) → Apprenticeship via NAPS → Job in industry.'
    );
    push(
      'Community Health Worker',
      'Support local health drives; pathway to nursing/paramedical later.',
      ['Communication', 'record keeping', 'basic first aid'],
      'Complete Class 10/12 → Short CHW/ANM courses via state schemes.'
    );
  }

  return list;
}

function generateScholarships({ location = '', education = '' }) {
  const state = (location.split(',')[1] || '').trim().toLowerCase();
  const items = [
    {
      name: 'NSP (National Scholarship Portal) – Pre/Post Matric',
      details:
        'For SC/ST/OBC/EWS students based on income and category. Apply on scholarships.gov.in. Keep income certificate, caste certificate, bank passbook, Aadhaar, and mark sheets ready.',
    },
    {
      name: 'PMSSS for J&K and Ladakh',
      details:
        'For students from J&K/Ladakh pursuing UG outside the state. Apply via AICTE portal.'
    },
    {
      name: 'PMKVY / Skill India',
      details:
        'Free short-term skill courses with certification. Find Training Centres near you on skillindia.nsdc.gov.in.'
    },
  ];

  if (state === 'bihar') {
    items.push({
      name: 'Mukhyamantri Kanya Utthan Yojana (Bihar)',
      details: 'Support for girls for education related expenses after 12th and graduation.'
    });
  }
  if (state === 'maharashtra') {
    items.push({
      name: 'MahaDBT Scholarships',
      details: 'Multiple schemes for economically weaker students. Apply on mahadbt.maharashtra.gov.in.'
    });
  }
  if (education.includes('Class 10')) {
    items.push({
      name: 'NTSE/INSPIRE (for science talent)',
      details: 'Check latest state notifications; focus on science and maths performance.'
    });
  }

  return items;
}

function generateSkills({ interests = '' }) {
  const common = [
    { name: 'English & Communication', resource: 'British Council LearnEnglish, YouTube: "English with Lucy"' },
    { name: 'Digital Basics', resource: 'DiGiSakshar, YouTube: Basic MS Office, Google Docs/Sheets' },
    { name: 'Career Readiness', resource: 'Coursera Guided Projects, LinkedIn Learning (free trials), TCS iON Career Edge' },
  ];

  const extras = [];
  const t = interests.toLowerCase();
  if (t.includes('computer') || t.includes('coding')) {
    extras.push({ name: 'Web Dev Starter', resource: 'SWAYAM: Web Development, FreeCodeCamp.org' });
  }
  if (t.includes('farming') || t.includes('agri')) {
    extras.push({ name: 'Smart Farming', resource: 'MANAGE & KVK trainings, YouTube: Krishi Jagran, ICAR e-courses' });
  }
  if (t.includes('health') || t.includes('nurs')) {
    extras.push({ name: 'First Aid & Patient Care', resource: 'Red Cross First Aid, WHO patient safety basics' });
  }

  return [...common, ...extras];
}

function generateRoadmap({ education = '', goal = '' }) {
  const steps = [];
  const g = goal.toLowerCase();

  if (g.includes('nurs')) {
    steps.push(
      'Focus on Biology, Chemistry, and English. Keep notes neat and revise weekly.',
      'After Class 12 (PCB), apply for ANM/GNM or B.Sc Nursing. Prepare documents: Aadhaar, marksheets, photos, income/caste certificates if any.',
      'Do a hospital/clinic internship for practical skills. Learn basic patient care and hygiene.'
    );
  } else if (g.includes('agri')) {
    steps.push(
      'Strengthen basics of Biology and Environmental Science. Learn local soil and crop patterns.',
      'Apply for Diploma/B.Sc in Agriculture or short trainings at KVK. Participate in field demos.',
      'Create a small pilot: mushroom/vegetable patch or vermicompost. Track costs and earnings.'
    );
  } else if (g.includes('electric') || g.includes('technician')) {
    steps.push(
      'Learn Physics basics: current, voltage, safety rules. Practice with safe tools.',
      'Join ITI Electrician or relevant trade. Do an apprenticeship via NAPS for work experience.',
      'Earn Solar PV certification (NISE) to work on pumps/rooftop systems.'
    );
  } else if (g.includes('teacher') || g.includes('teach')) {
    steps.push(
      'Build strong subject basics. Start tutoring younger students for practice.',
      'Pursue D.El.Ed after Class 12 or B.Ed after graduation, then clear CTET/TET.',
      'Learn classroom management and simple lesson plans. Create a folder of teaching aids.'
    );
  } else {
    steps.push(
      'Clarify your interest and strengths. Write 3 areas you enjoy and 3 skills to improve.',
      'Pick a pathway (academic or vocational). Shortlist 2 nearby institutes or online programs.',
      'Prepare documents (Aadhaar, mark sheets, photos, income/caste certificate) and apply for 1 scholarship.'
    );
  }

  const quickWins = [
    'Improve English for 15 minutes daily (reading + speaking).',
    'Learn MS Office or Google Docs/Sheets basics this week.',
    'Create a simple CV and track your progress in a notebook.'
  ];

  return { steps, quickWins };
}

export default function App() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    location: '',
    education: '',
    interests: '',
    goal: '',
  });

  const [messages, setMessages] = useState([
    { role: 'assistant', content: craftGreeting('') },
  ]);

  const addAssistant = (content) => setMessages((m) => [...m, { role: 'assistant', content }]);
  const addUser = (content) => setMessages((m) => [...m, { role: 'user', content }]);

  const handleStart = () => {
    const intro = `Great! I’ve noted your details. Age: ${profile.age || '—'}, Education: ${
      profile.education || '—'
    }, Location: ${profile.location || '—'}. Tell me your interests in one line to begin.`;
    if (profile.name) setMessages([{ role: 'assistant', content: craftGreeting(profile.name) }]);
    addAssistant(intro);
  };

  const onCareers = () => {
    addUser('Show Career Options');
    const options = generateCareerOptions(profile);
    const text = options
      .map(
        (o, i) =>
          `${i + 1}. ${o.title}\n• Scope: ${o.scope}\n• Skills: ${o.skills.join(', ')}\n• Education Path: ${o.educationPath}`
      )
      .join('\n\n');
    addAssistant(
      `Based on your profile, here are suitable careers:\n\n${text}\n\nWould you like scholarships or a step-by-step plan for one of these?`
    );
  };

  const onScholarships = () => {
    addUser('View Scholarships');
    const s = generateScholarships(profile)
      .map((x) => `• ${x.name}: ${x.details}`)
      .join('\n');
    addAssistant(
      `Scholarships and schemes you can explore:\n${s}\n\nApply early. Keep scanned copies of: Aadhaar, income/caste certificates (if applicable), mark sheets, bank passbook, photos.`
    );
  };

  const onSkills = () => {
    addUser('Learn Skills Online');
    const s = generateSkills(profile)
      .map((x) => `• ${x.name}: ${x.resource}`)
      .join('\n');
    addAssistant(
      `Here are free/low-cost skill resources:\n${s}\n\nTip: Study 45–60 mins daily. Practice by doing small projects and helping locally (school, panchayat, shops).`
    );
  };

  const onRoadmap = () => {
    addUser('Get Step-by-Step Plan');
    const { steps, quickWins } = generateRoadmap(profile);
    addAssistant(
      `Your step-by-step plan:\n${steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nNext 3 actions for this week:\n${quickWins.map((s, i) => `• ${s}`).join('\n')}\n\nYou have a bright future ahead. Shall I show courses or scholarships next?`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 space-y-6">
        <Hero3D />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <IntakeForm data={profile} setData={setProfile} onStart={handleStart} />
            <ActionPanel
              onCareers={onCareers}
              onScholarships={onScholarships}
              onSkills={onSkills}
              onRoadmap={onRoadmap}
            />
          </div>
          <div className="lg:col-span-1">
            <ChatBox messages={messages} />
          </div>
        </div>

        <footer className="text-center text-slate-400 text-sm pt-4">
          You have a bright future ahead. Let’s take your first step today — would you like me to show you free online courses or scholarships for your chosen path?
        </footer>
      </div>
    </div>
  );
}
