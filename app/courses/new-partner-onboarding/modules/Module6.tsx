// app/courses/new-partner-onboarding/modules/Module6.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Users, AlertTriangle } from 'lucide-react';

type Props = {
  onComplete: (score: number) => void;   // ← This is the correct type
};

export default function Module6({ onComplete }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Your manager consistently gives you unreasonably harsh criticism in front of the team, week after week. This is most accurately described as:",
      options: [
        "Normal performance management",
        "Bullying",
        "Harassment",
        "A grievance matter, not a disciplinary one"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "You witness a financial irregularity that implicates both HR and the COO. Who should you report this to?",
      options: [
        "HR — because they handle all people matters",
        "The COO — because they are more senior than HR",
        "The Compliance Officer — because multiple senior leaders are implicated",
        "A colleague — to get a second opinion first"
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
          MODULE 6
        </div>
        <h2 className="text-4xl font-bold text-gray-900">People & HR</h2>
        <p className="text-gray-600 mt-3">Harassment, bullying, disciplinary process, and whistleblowing</p>
      </div>

      {/* Key Definitions */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-12">
        <h3 className="text-red-600 font-medium mb-6">KNOW THE DIFFERENCE</h3>
        <div className="space-y-8">
          <div>
            <p className="font-semibold text-gray-900">Harassment</p>
            <p className="text-gray-600">Any unwanted behaviour that violates a person’s dignity or creates a hostile, humiliating, or offensive environment.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Bullying</p>
            <p className="text-gray-600">Repeated or persistent behaviour intended to intimidate, undermine, exclude, or humiliate.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Discrimination</p>
            <p className="text-gray-600">Treating someone unfairly based on gender, age, race, religion, disability, or any protected characteristic.</p>
          </div>
          <div className="bg-emerald-50 p-5 rounded-2xl">
            <p className="font-medium text-emerald-800">Legitimate feedback and constructive criticism are NOT bullying when conducted professionally.</p>
          </div>
        </div>
      </div>

      {/* Disciplinary Process */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-16">
        <h3 className="text-red-600 font-medium mb-6 flex items-center gap-3">
          <Users className="w-6 h-6" /> DISCIPLINARY PROCESS — 5 STEPS
        </h3>
        <div className="space-y-6">
          {[
            "1. Informal Discussion — private conversation for minor or first-time issues.",
            "2. Verbal Warning — formal verbal warning, documented, with timeframe for improvement.",
            "3. Written Warning — formal written warning with expectations and consequences.",
            "4. Final Written Warning — last step before termination.",
            "5. Termination — where conduct does not improve or gross misconduct occurs."
          ].map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="w-8 h-8 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center font-bold flex-shrink-0">
                {i+1}
              </div>
              <span className="text-gray-700 pt-1">{step}</span>
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