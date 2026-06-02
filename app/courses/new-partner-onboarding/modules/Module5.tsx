// app/courses/new-partner-onboarding/modules/Module5.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, AlertTriangle } from 'lucide-react';

type Props = {
  onComplete: (score: number) => void;   // ← This is the correct type
};

export default function Module5({ onComplete }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [scenarioAnswer, setScenarioAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "You design graphics for an LO Group campaign in your own time, on your personal laptop. Who owns those graphics?",
      options: [
        "You do, because you used personal time and equipment",
        "LO Group, because they were created for an LO Group campaign",
        "It depends on whether you were paid for that time",
        "You both share ownership equally"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "A partner leaves LO Group. Their confidentiality obligations under the NDA:",
      options: [
        "End on their last working day",
        "Continue for 6 months after departure",
        "Continue for 1 year after departure",
        "Remain fully binding indefinitely after departure"
      ],
      correct: 3
    }
  ];

  const scenarioOptions = [
    {
      text: "Yes — it is just for inspiration and no one will know.",
      correct: false,
      feedback: "The intent is irrelevant. Client data is confidential. Pasting it into an external AI system is a direct violation."
    },
    {
      text: "Yes — as long as you edit the output before submitting.",
      correct: false,
      feedback: "Editing the output does not change the violation. The breach occurs when you enter confidential data."
    },
    {
      text: "No — client information is confidential and must never be entered into any external AI system.",
      correct: true,
      feedback: "Correct. Client names, project details, budgets, and briefs are all confidential."
    },
    {
      text: "Only if the client has given general consent to AI use.",
      correct: false,
      feedback: "Client consent does not override LO Group's internal policy."
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
          MODULE 5
        </div>
        <h2 className="text-4xl font-bold text-gray-900">IP, AI & Confidentiality</h2>
        <p className="text-gray-600 mt-3">Protecting our work, data, and intellectual property</p>
      </div>

      {/* Ownership of Work */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-10">
        <h3 className="text-red-600 font-medium mb-4">OWNERSHIP OF WORK</h3>
        <p className="text-gray-700 leading-relaxed">
          All work created by partners during their engagement — whether during or outside working hours, using personal or organisational tools — is the exclusive intellectual property of LO Group. 
          This includes written content, designs, code, strategies, campaign ideas, frameworks, and any content created using LO Group platforms or information. <strong>There are no exceptions.</strong>
        </p>
      </div>

      {/* Critical AI Rule */}
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="w-8 h-8 text-amber-600" />
          <h3 className="text-xl font-semibold text-amber-800">CRITICAL AI RULE</h3>
        </div>
        <p className="text-amber-800 leading-relaxed">
          No confidential information may ever be entered into any AI system — including ChatGPT, Google Gemini, Copilot, or similar tools. 
          These are not secure internal systems. Treat every AI prompt as a potentially public document.
        </p>
      </div>

      {/* Scenario */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-amber-600" />
          <h3 className="text-xl font-semibold">AI Usage Scenario</h3>
        </div>
        <p className="text-gray-700 mb-6">
          You are writing a proposal for a client. To save time, you want to paste the client's brief into ChatGPT to help structure your response. Is this acceptable?
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
          <div className="mt-6 p-5 bg-gray-50 rounded-2xl border">
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