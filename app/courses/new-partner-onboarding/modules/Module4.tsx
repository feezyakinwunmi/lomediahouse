// app/courses/new-partner-onboarding/modules/Module4.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Clock, Calendar } from 'lucide-react';

type Props = {
  onComplete: (score: number) => void;   // ← This is the correct type
};

export default function Module4({ onComplete }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "You are taking 6 days of annual leave next month. What is the minimum notice you must give?",
      options: [
        "1 working day",
        "3 working days",
        "5 working days",
        "10 working days"
      ],
      correct: 2
    },
    {
      id: 2,
      question: "Your LO Group account password is the same as your personal email password. Is this acceptable?",
      options: [
        "Yes — it is easier to remember",
        "Yes — as long as it is a strong password",
        "No — passwords must be unique and never reused",
        "No — but only because it needs to be longer"
      ],
      correct: 2
    }
  ];

  const handleSelect = (qId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);
  const score = questions.filter(q => selectedAnswers[q.id] === q.correct).length;

  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <div className="inline-block px-4 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full mb-4">
          MODULE 4
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Key Policies</h2>
        <p className="text-gray-600 mt-3">Leave, timelines, cybersecurity, and essential rules</p>
      </div>

      {/* Leave Entitlements */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-10">
        <h3 className="text-red-600 font-medium mb-6 flex items-center gap-3">
          <Calendar className="w-6 h-6" /> LEAVE ENTITLEMENTS
        </h3>
        <div className="space-y-6 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">Annual Leave</p>
              <p className="text-sm">10 working days paid per year. Minimum 5 working days' notice required.</p>
            </div>
            <div>
              <p className="font-semibold">Sick Leave</p>
              <p className="text-sm">5 paid sick days per year. Certificate required if absence exceeds 2 consecutive days.</p>
            </div>
            <div>
              <p className="font-semibold">Maternity Leave</p>
              <p className="text-sm">12 weeks fully paid. Notify HR at least 4 weeks in advance.</p>
            </div>
            <div>
              <p className="font-semibold">Bereavement Leave</p>
              <p className="text-sm">Up to 3 working days paid for loss of an immediate family member.</p>
            </div>
          </div>
        </div>
      </div>

      {/* First Week Timeline */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-16">
        <h3 className="text-red-600 font-medium mb-6 flex items-center gap-3">
          <Clock className="w-6 h-6" /> FIRST WEEK TIMELINE
        </h3>
        <div className="space-y-6">
          {[
            "Day 1: Log in, set up email signature, introduce yourself in team WhatsApp, submit documents to HR.",
            "Days 1–2: Welcome call with team lead. Discuss 30-day goals.",
            "Within 5 working days: All onboarding documentation submitted and confirmed by HR.",
            "End of Week 1: Handbook read in full. Partner Acknowledgement form signed and returned.",
            "Within 14 days: IT security training and conflict of interest declaration completed.",
            "Within 30 days: Compliance, data protection, and anti-harassment training all completed."
          ].map((item, i) => (
            <div key={i} className="flex gap-5">
              <div className="w-7 h-7 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i+1}
              </div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
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