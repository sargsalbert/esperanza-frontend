import { useRef } from 'react';

export default function UploadCV() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  //   const [fileName, setFileName] = useState('');

  const handleClick = () => fileRef.current?.click();

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];
  //     if (file) setFileName(file.name);
  //   };

  return (
    <div className='flex flex-col gap-2'>
      <button
        onClick={handleClick}
        className='h-9 min-w-63 cursor-pointer rounded-full border-2 border-gray-800 bg-transparent px-5 py-1 text-sm font-semibold text-gray-800 md:h-10.5 lg:min-w-38 lg:text-base 2xl:h-12.5 2xl:min-w-60 2xl:border-3 2xl:text-lg'
      >
        Upload CV
      </button>

      {/* <input
        type='file'
        ref={fileRef}
        onChange={handleChange}
        accept='.pdf,.doc,.docx'
        className='hidden'
      />

      {fileName && <span className='text-xs text-gray-500'>{fileName}</span>} */}
    </div>
  );
}
