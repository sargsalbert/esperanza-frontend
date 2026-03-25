import { useRef } from 'react';

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
};

export default function UploadCV({ file, setFile }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => fileRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

    // basic validation
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(selected.type)) {
      alert('Only PDF, DOC, DOCX allowed');
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      alert('Max file size is 5MB');
      return;
    }

    setFile(selected);
  };

  return (
    <div className='flex flex-col gap-2'>
      <button
        type='button'
        onClick={handleClick}
        className='h-10 rounded-full border-2 border-gray-800 px-5 text-sm font-semibold text-gray-800'
      >
        {file ? 'Replace CV' : 'Upload CV'}
      </button>

      <input
        type='file'
        ref={fileRef}
        onChange={handleChange}
        accept='.pdf,.doc,.docx'
        className='hidden'
      />

      {file && (
        <div className='flex items-center justify-between text-xs text-gray-500'>
          <span>{file.name}</span>
          <button
            type='button'
            onClick={() => setFile(null)}
            className='ml-2 text-red-500'
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
