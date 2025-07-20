'use client';

import { FileUploadButton } from '@/components/FileUploadButton';
import { ExtractedDataTable } from '@/components/ExtractedDataTable';
import { OddsPathTable } from '@/components/OddsPathTable';
import { useTableStore } from '@/store/tableStore';

export default function Home() {
  const {
    extractedData,
    oddsPathData,
    loading,
    setExtractedData,
    setOddsPathData,
    setLoading,
    reset,
  } = useTableStore();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <h1 className="text-3xl font-bold text-black mb-4">
        PS3/BS3 Automatic Extraction
      </h1>
      <FileUploadButton
        onData={({ extracted_data, odds_path_data }) => {
          setExtractedData(extracted_data);
          setOddsPathData(odds_path_data);
          setLoading(false);
        }}
        onStart={() => {
          setLoading(true);
          reset();
        }}
      />
      <div className="w-full max-w-4xl mt-8">
        <ExtractedDataTable data={extractedData} loading={loading} />
      </div>
      <div className="w-full max-w-4xl mt-8">
        <OddsPathTable data={oddsPathData} loading={loading} />
      </div>
    </main>
  );
}
