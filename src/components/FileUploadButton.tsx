import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ResearchArticle } from '@/model/DTO/ResearchArticle';
import { OddsPath } from '@/model/DTO/OddsPath';

interface FileUploadButtonProps {
  onData: (data: { extracted_data: ResearchArticle[]; odds_path_data: OddsPath[] }) => void;
  onStart?: () => void;
}

export function FileUploadButton({ onData, onStart }: FileUploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => inputRef.current?.click();

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (onStart) onStart();
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await fetch('http://localhost:8000/get-pdf-data', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 1234',
          },
          body: formData,
        });
        
        const data = await res.json();
        if (data.extracted_data && data.odds_path_data) {
          onData({
            extracted_data: data.extracted_data,
            odds_path_data: data.odds_path_data,
          });
        } else {
          alert('Respuesta inesperada de la API');
        }
      } catch (err) {
        alert('Error al subir el archivo o procesar la respuesta');
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={onFileChange}
        className="hidden"
        accept="application/pdf"
      />
      <Button onClick={onClick}>Subir archivo</Button>
    </div>
  );
}
