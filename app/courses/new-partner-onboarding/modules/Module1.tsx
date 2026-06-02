// app/courses/new-partner-onboarding/modules/Module1.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

type Props = {
  onComplete: (score: number) => void;   // ← This is the correct type
};

export default function Module1({ onComplete }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the primary description of LO Group's organisational character?",
      options: [
        "Corporate and profit-driven",
        "Faith-based, purpose-driven, and excellence-oriented",
        "Casual and flexible with no fixed standards",
        "Technology-first"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Which statement best describes how LO Group views work?",
      options: [
        "A transactional exchange of time for pay",
        "An opportunity for personal growth above all else",
        "An act of service to God expressed through excellence",
        "A means to an end with no deeper meaning"
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
          MODULE 1
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
        <p className="text-gray-600 mt-3">Understanding LO Group’s foundation, identity, and purpose</p>
      </div>

      {/* Content Cards */}
      <div className="space-y-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="text-red-600 font-medium mb-3">OUR FOUNDATION</h3>
          <p className="text-gray-700 leading-relaxed">
            LO Group is a faith-based, purpose-driven organisation operating across media, education, creative production, community development, and faith-based initiatives. Every venture, every decision, every output flows from one conviction: <strong>work is an act of service to God.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            LO Media House is the central operational hub — the engine that powers content, digital systems, and brand execution across the entire group.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="text-red-600 font-medium mb-4">THE FOUR PILLARS OF OUR IDENTITY</h3>
          <ul className="space-y-6">
            {[
              "Faith-Based Foundation — work is grounded in service to God and alignment with Kingdom values.",
              "Purpose-Driven Direction — meaningful impact is always the goal.",
              "Excellence-Oriented Execution — high standards are non-negotiable in every deliverable.",
              "People-Focused Approach — work is designed to serve individuals and communities."
            ].map((pillar, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {i+1}
                </div>
                <span className="text-gray-700">{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Knowledge Check */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-8">Knowledge Check</h3>

        {questions.map((q, index) => (
          <div key={q.id} className="mb-12 last:mb-0">
            <p className="font-semibold mb-4 text-lg">Q{index + 1}. {q.question}</p>
            <div className="space-y-3">
              {q.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(q.id, i)}
                  disabled={submitted}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    selectedAnswers[q.id] === i 
                      ? submitted 
                        ? i === q.correct 
                          ? 'border-emerald-500 bg-emerald-50' 
                          : 'border-red-500 bg-red-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>

            {submitted && (
              <div className="mt-4 p-4 bg-gray-50 rounded-2xl text-sm">
                {selectedAnswers[q.id] === q.correct ? (
                  <span className="text-emerald-600 font-medium">✓ Correct</span>
                ) : (
                  <span className="text-red-600 font-medium">✗ Incorrect</span>
                )}
                <p className="mt-2 text-gray-600">
                  {q.id === 1 
                    ? "LO Group is fundamentally faith-based, purpose-driven, and excellence-oriented."
                    : "Work at LO Group is first understood as service to God, expressed through excellence."}
                </p>
              </div>
            )}
          </div>
        ))}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white py-4 rounded-2xl font-medium transition mt-6"
          >
            Submit Answers
          </button>
        ) : (
          <div className="text-center mt-8">
            <p className="text-2xl font-bold">Your Score: <span className="text-red-600">{score}/2</span></p>
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