'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { SyllabusFlow } from '@/components/SyllabusFlow';
import { useRouter } from 'next/navigation';

export default function SyllabusPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader title="Syllabus" />

      <main className="mx-auto max-w-xl px-3 pt-3">
        <SyllabusFlow
          defaultType="syllabus"
          onBackToHome={() => router.push('/')}
        />
      </main>
    </div>
  );
}
