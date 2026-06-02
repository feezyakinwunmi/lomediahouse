// app/courses/new-partner-onboarding/modules/Module2.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

type Props = {
  onComplete: (score: number) => void;   // ← This is the correct type
};

export default function Module2({ onComplete }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [scenarioAnswer, setScenarioAnswer] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "At LO Group, a missed deadline without prior notice is treated as:",
      options: [
        "A minor administrative issue",
        "A performance matter that is taken seriously",
        "An expected part of a fast-paced environment",
        "Something that only matters for client-facing work"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "You identify a potential conflict of interest. What is the correct action?",
      options: [
        "Wait and see if it becomes a real problem",
        "Mention it informally to a colleague",
        "Disclose it in writing to HR or the COO immediately",
        "Quietly step back from the project"
      ],
      correct: 2
    }
  ];

  const scenarioOptions = [
    {
      text: "Ignore it until the report is ready, then send everything at once.",
      correct: false,
      feedback: "Going silent is never acceptable. Not responding is treated as a performance matter."
    },
    {
      text: "Reply immediately: 'Received — I'll have the full report ready by Wednesday 9am.'",
      correct: true,
      feedback: "This is exactly the right response. Acknowledge, give a specific ETC, and follow through."
    },
    {
      text: "Reply 'I'm working on it' with no further detail.",
      correct: false,
      feedback: "This is vague and does not give the team lead what they need."
    },
    {
      text: "Ask a colleague to reply on your behalf.",
      correct: false,
      feedback: "Communication at LO Group is personal and direct."
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
          MODULE 2
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Culture & Conduct</h2>
        <p className="text-gray-600 mt-3">The non-negotiables that define how we work at LO Media House</p>
      </div>

      {/* Content */}
      <div className="space-y-10 mb-16">
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="text-red-600 font-medium mb-3">THE CULTURAL REALITY</h3>
          <p className="text-gray-700 leading-relaxed">
            LO Group is a fast-moving, multi-venture organisation. Systems are still being built while we use them. Roles may require flexibility beyond narrow job descriptions. The pace will not always slow down for you to catch up.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            What is expected is ownership, initiative, and adaptability — not as exceptional qualities, but as the baseline.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="text-red-600 font-medium mb-4">FIVE NON-NEGOTIABLES</h3>
          <ul className="space-y-6 text-gray-700">
            {[
              "Ownership — you notice what needs doing and do it, without waiting to be told.",
              "Deadlines — a deadline is a commitment, not a target.",
              "Communication — acknowledge messages within 2 hours. Give ETCs. Never go silent.",
              "Quality — speed and quality must coexist.",
              "Transparency — if something is wrong, say it."
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="text-red-600 font-bold">●</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Scenario */}
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-10 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-amber-600" />
          <h3 className="text-xl font-semibold">Communication Scenario</h3>
        </div>
        <p className="text-gray-700 mb-6">
          It is Tuesday at 3pm. Your team lead sends a WhatsApp message asking for the status of a report you are still working on. You will not have it ready until tomorrow morning. What do you do?
        </p>

        <div className="space-y-3">
          {scenarioOptions.map((option, i) => (
            <button
              key={i}
              onClick={() => handleScenarioSelect(i)}
              disabled={submitted}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                scenarioAnswer === i 
                  ? option.correct 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-red-500 bg-red-50'
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