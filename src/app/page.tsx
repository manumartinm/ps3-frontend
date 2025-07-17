'use client';

import { FileUploadButton } from '@/components/FileUploadButton';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-black mb-4">
        PS3/BS3 Automatic Extraction
      </h1>
      <FileUploadButton />
    </main>
  );
}
