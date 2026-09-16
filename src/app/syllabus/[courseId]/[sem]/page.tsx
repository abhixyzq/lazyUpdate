import React from 'react';
import { notFound } from 'next/navigation';
import { puCompleteSyllabusData } from '@/data/puSyllabusComplete';
import { SemesterDetailView } from '@/components/SemesterDetailView';

interface SemesterPageProps {
  params: Promise<{
    courseId: string;
    sem: string;
  }>;
}

export function generateStaticParams() {
  const paramsList: { courseId: string; sem: string }[] = [];

  puCompleteSyllabusData.forEach((course) => {
    course.semesters.forEach((s) => {
      paramsList.push({
        courseId: course.id,
        sem: `sem-${s.semester}`,
      });
    });
  });

  return paramsList;
}

export default async function SemesterSyllabusPage({ params }: SemesterPageProps) {
  const { courseId, sem } = await params;
  const course = puCompleteSyllabusData.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  const semesterNumber = parseInt(sem.replace('sem-', ''), 10);
  if (isNaN(semesterNumber) || semesterNumber < 1 || semesterNumber > course.totalSemesters) {
    notFound();
  }

  const semesterData = course.semesters.find((s) => s.semester === semesterNumber);
  if (!semesterData) {
    notFound();
  }

  return (
    <SemesterDetailView
      course={course}
      semesterNumber={semesterNumber}
    />
  );
}
