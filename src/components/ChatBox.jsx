import React, { useEffect, useRef } from 'react';
import { MessageSquare, User, Bot } from 'lucide-react';

const Bubble = ({ role, children }) => {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div
        className={`max-w-[90%] md:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed border ${
          isUser
            ? 'bg-emerald-600/90 text-white border-emerald-400/30'
            : 'bg-slate-800/70 text-slate-100 border-white/10'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const ChatBox = ({ messages }) => {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-full bg-slate-900/60 border border-white/10 rounded-2xl p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="text-sky-300" size={20} />
        <h3 className="text-lg font-semibold text-white">Career Counselling</h3>
      </div>
      <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role}>{m.content}</Bubble>
        ))}
        <div ref={bottomRef} />
      </div>
      <p className="text-xs text-slate-400 mt-3">
        Tip: Ask anything like “I’m interested in farming technology — what should I study?”
      </p>
    </div>
  );
};

export default ChatBox;
