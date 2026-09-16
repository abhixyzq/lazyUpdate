import React from 'react';
import { notFound } from 'next/navigation';
import { puCompleteSyllabusData } from '@/data/puSyllabusComplete';
import { CourseSemesterView } from '@/components/CourseSemesterView';

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export function generateStaticParams() {
  return puCompleteSyllabusData.map((course) => ({
    courseId: course.id,
  }));
}

export default async function CourseSemesterSelectPage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = puCompleteSyllabusData.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return <CourseSemesterView course={course} />;
}
