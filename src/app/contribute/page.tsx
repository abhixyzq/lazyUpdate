'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContributeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/contributors');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="text-center space-y-2">
        <div className="h-6 w-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs font-semibold text-slate-600">Redirecting to Contributors...</p>
      </div>
    </div>
  );
}
