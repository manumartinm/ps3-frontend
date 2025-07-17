import { useRef } from 'react';
import { Button } from '@/components/ui/button';

export function FileUploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => inputRef.current?.click();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Archivo:', file.name);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={onFileChange}
        className="hidden"
      />
      <Button onClick={onClick}>Subir archivo</Button>
    </div>
  );
}
