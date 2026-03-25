import { useRef } from 'react';
import { CloseIcon } from '../icons/closeIcon';

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
  formUploadButtonText: string;
  setError: (file: string | null) => void;
};

export default function UploadCV({
  file,
  setFile,
  formUploadButtonText,
  setError,
}: Props) {
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
      setError('Only PDF, DOC, DOCX allowed');
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setError('Max file size is 5MB');
      return;
    }

    setFile(selected);
  };

  return (
    <div className='flex flex-col gap-2'>
      <button
        type='button'
        onClick={handleClick}
        className='h-10 cursor-pointer rounded-full border-2 border-gray-800 px-5 text-sm font-semibold text-gray-800'
      >
        {file ? (
          <div className='relative flex items-center justify-center px-4'>
            <span className='overflow-hidden text-ellipsis whitespace-nowrap'>
              {file.name}{' '}
            </span>
            <span
              className='absolute right-0 p-2.5'
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
                if (fileRef.current) fileRef.current.value = '';
                setError(null);
              }}
            >
              <CloseIcon className='h-3 w-3' />
            </span>
          </div>
        ) : (
          formUploadButtonText
        )}
      </button>

      <input
        type='file'
        ref={fileRef}
        onChange={handleChange}
        accept='.pdf,.doc,.docx'
        className='hidden'
      />
    </div>
  );
}
