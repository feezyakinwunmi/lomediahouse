// app/courses/new-partner-onboarding/modules/Module3.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Users } from 'lucide-react';

type Props = {
  onComplete: (score: number) => void;   // ← This is the correct type
};

export default function Module3({ onComplete }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [scenarioAnswer, setScenarioAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which authority level covers signing contracts with external parties?",
      options: [
        "Level 1 — Partner can sign independently",
        "Level 2 — Team Lead approval is sufficient",
        "Level 3 — COO recommends, Level 4 CEO approves",
        "Level 2 — Team Lead signs off"
      ],
      correct: 2
    },
    {
      id: 2,
      question: "A verbal approval from a senior leader is sufficient for a Level 2 decision.",
      options: [
        "True — if a team lead says yes verbally, you can proceed",
        "False — all approvals at Level 2 and above must be in writing",
        "True — verbal is fine for urgent decisions",
        "False — only Level 4 decisions require written approval"
      ],
      correct: 1
    }
  ];

  const scenarioOptions = [
    {
      text: "Post about it in the general WhatsApp group and wait for someone to act.",
      correct: false,
      feedback: "The general group is not the right channel. Website downtime must be escalated directly."
    },
    {
      text: "Alert the CTO immediately via direct WhatsApp.",
      correct: true,
      feedback: "Correct. Website downtime goes to the CTO immediately as Step 1."
    },
    {
      text: "Wait until 4pm to see if it resolves itself.",
      correct: false,
      feedback: "Downtime affecting client-facing work must be escalated immediately."
    },
    {
      text: "Email HR about it.",
      correct: false,
      feedback: "HR is not the correct first contact for a technology issue."
    }
  ];

  const handleSelect = (qId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const handleScenarioSelect = (index: number) => {
    setScenarioAnswer(index);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined) && scenarioAnswer !== null;
  const score = questions.filter(q => selectedAnswers[q.id] === q.correct).length;

  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <div className="inline-block px-4 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full mb-4">
          MODULE 3
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Leadership & Structure</h2>
        <p className="text-gray-600 mt-3">Understanding authority, decision-making, and escalation at LO Media House</p>
      </div>

      {/* Executive Leadership */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-10">
        <h3 className="text-red-600 font-medium mb-6">EXECUTIVE LEADERSHIP</h3>
        <div className="grid gap-6">
          {[
            { name: "CEO — Oluwabunmilayo (Layo) Obidike", role: "Vision, strategy, and final authority", email: "layo@ithriveonwisdom.com" },
            { name: "COO — John Olumutimi", role: "Day-to-day operations and organisational management", email: "john.olumutimi@godstreasury.com" },
            { name: "CTO — Kennie Oyinloye", role: "Technology, systems, cybersecurity", email: "kennie@ithriveonwisdom.com" },
            { name: "HR — Folasayo Ayo-Sonubi", role: "People, onboarding, records, compliance", email: "hr@lomediahouse.com" }
          ].map((leader, i) => (
            <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-semibold">{leader.name}</p>
                <p className="text-sm text-gray-500">{leader.role}</p>
              </div>
              <p className="text-sm text-gray-500">{leader.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Authority Levels */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-10">
        <h3 className="text-red-600 font-medium mb-6">AUTHORITY LEVELS</h3>
        <div className="space-y-6">
          {[
            "Level 1 (Partner) — Routine tasks within your role",
            "Level 2 (Team Lead) — Team-level approvals",
            "Level 3 (COO) — Operational, financial, cross-team decisions",
            "Level 4 (CEO) — Strategic, legal, reputational decisions"
          ].map((level, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold">{i+1}</div>
              <span className="text-gray-700 pt-1">{level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario */}
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-10 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-amber-600" />
          <h3 className="text-xl font-semibold">Escalation Scenario</h3>
        </div>
        <p className="text-gray-700 mb-6">
          At 2pm on a Wednesday, you notice the LO Group website has gone down. The CTO is online. What do you do first?
        </p>

        <div className="space-y-3">
          {scenarioOptions.map((option, i) => (
            <button
              key={i}
              onClick={() => handleScenarioSelect(i)}
              disabled={submitted}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                scenarioAnswer === i 
                  ? option.correct ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {scenarioAnswer !== null && (
          <div className="mt-6 p-5 bg-white rounded-2xl border">
            <p className={`font-medium ${scenarioOptions[scenarioAnswer].correct ? 'text-emerald-600' : 'text-red-600'}`}>
              {scenarioOptions[scenarioAnswer].feedback}
            </p>
          </div>
        )}
      </div>

      {/* Knowledge Check */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-8">Knowledge Check</h3>

        {questions.map((q, index) => (
          <div key={q.id} className="mb-12 last:mb-0">
            <p className="font-semibold mb-4">Q{index + 1}. {q.question}</p>
            <div className="space-y-3">
              {q.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(q.id, i)}
                  disabled={submitted}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    selectedAnswers[q.id] === i 
                      ? submitted 
                        ? i === q.correct ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white py-4 rounded-2xl font-medium mt-6 transition"
          >
            Submit Answers
          </button>
        ) : (
          <div className="text-center mt-10">
            <p className="text-2xl font-bold mb-2">Score: <span className="text-red-600">{score}/2</span></p>
            <button
              onClick={() => onComplete(score)}
              className="mt-6 inline-flex items-center gap-2 bg-emerald-600 text-white px-10 py-4 rounded-2xl font-medium hover:bg-emerald-700 transition"
            >
              Mark Module Complete <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}