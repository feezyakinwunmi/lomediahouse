// app/courses/new-partner-onboarding/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Trophy, RotateCcw, Download } from 'lucide-react';

import Module1 from './modules/Module1';
import Module2 from './modules/Module2';
import Module3 from './modules/Module3';
import Module4 from './modules/Module4';
import Module5 from './modules/Module5';
import Module6 from './modules/Module6';

const modules = [
  { id: 1, title: "Who We Are", component: Module1 },
  { id: 2, title: "Culture & Conduct", component: Module2 },
  { id: 3, title: "Leadership & Structure", component: Module3 },
  { id: 4, title: "Key Policies", component: Module4 },
  { id: 5, title: "IP, AI & Confidentiality", component: Module5 },
  { id: 6, title: "People & HR", component: Module6 },
];

export default function OnboardingCourse() {
  const [currentModule, setCurrentModule] = useState(0);
  const [quizScores, setQuizScores] = useState<Record<number, number>>({});
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [progress, setProgress] = useState(0);

  // Calculate progress based on completed modules
  useEffect(() => {
    const completedModules = Object.keys(quizScores).length;
    const progressPercentage = (completedModules / modules.length) * 100;
    setProgress(progressPercentage);
  }, [quizScores]);

  const handleModuleComplete = (moduleId: number, score: number) => {
    const newScores = { ...quizScores, [moduleId]: score };
    setQuizScores(newScores);

    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
    } else {
      // Calculate final percentage
      const totalQuestions = modules.length * 2;
      const totalPoints = Object.values(newScores).reduce((a, b) => a + b, 0);
      const percentage = Math.round((totalPoints / totalQuestions) * 100);

      setTotalScore(percentage);
      setCourseCompleted(true);
    }
  };

  const retryCourse = () => {
    setCurrentModule(0);
    setQuizScores({});
    setCourseCompleted(false);
    setTotalScore(0);
    setProgress(0);
  };

  const CurrentModuleComponent = modules[currentModule].component;

  if (courseCompleted) {
    const passed = totalScore >= 70;

    return (
      <div className="bg-gray-50 min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="max-w-lg text-center px-4 sm:px-6">
          <Trophy className={`w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 ${passed ? 'text-emerald-600' : 'text-amber-600'}`} />
          
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
            {passed ? "Congratulations!" : "Course Completed"}
          </h1>
          
          <p className="text-4xl sm:text-6xl font-bold text-gray-900 mb-2">{totalScore}%</p>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
            {passed 
              ? "You have successfully completed the New Partner Onboarding Course." 
              : "You scored below the passing mark of 70%."}
          </p>

          {passed ? (
            <div className="space-y-3 sm:space-y-4">
              <button className="w-full bg-emerald-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium flex items-center justify-center gap-2 sm:gap-3 hover:bg-emerald-700 transition text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Certificate
              </button>
              <button className="w-full border border-gray-300 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base">
                Share Certificate
              </button>
            </div>
          ) : (
            <button 
              onClick={retryCourse}
              className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium flex items-center justify-center gap-2 sm:gap-3 hover:bg-red-700 transition text-sm sm:text-base"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" /> Retry Course
            </button>
          )}

          <Link href="/courses" className="block mt-6 sm:mt-8 text-sm sm:text-base text-gray-500 hover:text-red-600">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Progress Bar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-rose-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Bar - Made responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-8 sticky top-4 bg-white z-50 p-4 rounded-2xl shadow">
          <Link href="/courses" className="flex items-center gap-2 text-gray-500 hover:text-red-600 text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back to Courses
          </Link>

          <div className="text-center">
            <h1 className="font-bold text-sm sm:text-base">New Partner Onboarding Course</h1>
            <p className="text-xs sm:text-sm text-gray-500">LO Media House</p>
          </div>

          <div className="text-xs sm:text-sm font-medium">
            Module {currentModule + 1} of {modules.length}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Sidebar Navigation - Made responsive */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl p-4 sm:p-6 shadow">
              <h3 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Course Modules</h3>
              <div className="space-y-2">
                {modules.map((mod, index) => {
                  const isCompleted = quizScores[mod.id] !== undefined;
                  return (
                    <div
                      key={mod.id}
                      className={`px-3 sm:px-5 py-3 sm:py-4 rounded-xl flex items-center gap-3 transition-all ${
                        currentModule === index ? 'bg-red-50 border border-red-200 font-medium' : 'bg-gray-50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isCompleted && currentModule !== index ? 'bg-green-500 text-white' : 'bg-gray-200'
                      }`}>
                        {isCompleted && currentModule !== index ? '✓' : mod.id}
                      </div>
                      <span className="text-sm sm:text-base">{mod.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl pb-20">
            <CurrentModuleComponent onComplete={(score: number) => handleModuleComplete(modules[currentModule].id, score)} />
          </div>
        </div>
      </div>
    </div>
  );
}