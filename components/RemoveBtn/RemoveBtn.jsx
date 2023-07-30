'use client';
import { useRouter } from 'next/navigation';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className='flex justify-center items-center text-red-400 '>
      <FontAwesomeIcon icon={faEraser} size={24} />
      <p className='text-red-400'>Delete</p>
    </button>
  );
}
