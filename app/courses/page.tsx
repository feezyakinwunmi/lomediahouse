// app/courses/page.tsx
'use client';

import Link from 'next/link';
import { Clock, Users, Award, PlayCircle, Search } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: "New Partner Onboarding Course",
      description: "Mandatory onboarding course covering culture, policies, structure, and expectations at LO Media House.",
      category: "ONBOARDING",
      duration: "2–3 hours",
      audience: "All New Partners",
      type: "Interactive",
      gradient: "from-red-600 to-rose-600",
      imageUrl: "/part.jpg",
      link: "/courses/new-partner-onboarding",
      modules: 6
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-[90%] mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">LO Media House Courses</h1>
          <p className="text-xl text-gray-600">Professional development for partners, team members & collaborators</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all bg-white"
            />
          </div>
        </div>

        {/* Course Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCourses.map((course) => (
            <Link href={course.link} key={course.id} className="group block">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add(`bg-gradient-to-br`, course.gradient);
                      }
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`} />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs mb-3 w-fit">
                      <Award className="w-3 h-3" /> {course.category}
                    </div>
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-red-100 text-sm mt-1">{course.modules} Modules</p>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {course.audience}
                    </div>
                    <div className="flex items-center gap-1">
                      <PlayCircle className="w-3 h-3" /> {course.type}
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 text-sm">
                    {course.description}
                  </p>

                  <div className="mt-6 text-red-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Start Course →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}