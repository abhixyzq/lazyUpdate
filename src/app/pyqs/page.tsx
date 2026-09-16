'use client';

import React from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { SyllabusFlow } from '@/components/SyllabusFlow';
import { useRouter } from 'next/navigation';

export default function PYQsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-transparent text-white pb-12">
      <SubpageHeader title="PYQs" />

      <main className="mx-auto max-w-xl px-3 pt-3">
        <SyllabusFlow
          defaultType="pyq"
          onBackToHome={() => router.push('/')}
        />
      </main>
    </div>
  );
}
