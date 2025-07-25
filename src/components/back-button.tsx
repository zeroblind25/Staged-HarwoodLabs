'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="ghost">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  );
}
