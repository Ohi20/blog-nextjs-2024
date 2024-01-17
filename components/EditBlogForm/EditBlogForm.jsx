'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Edit from 'public/edit.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error('Failed to update topic');
      }

      router.refresh();
      router.push('/blogs');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-8 px-12">
      <h1 className="text-4xl text-center text-[#b64a13] mb-10 font-semibold">Edit your blog <span><FontAwesomeIcon icon={faPenToSquare} /></span></h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="mb-8 flex-1 relative h-[300px] w-[300px]">
          <Image
            src={Edit}
            fill={true}
            sizes=""
            alt="contact"
            className="object-fit w-[300px] h-[300px]"
          />
        </div>
        
        <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-8">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
        type="text"
        placeholder="Blog Title"
      />

      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
        type="text"
        placeholder="Blog Description"
        cols="30"
        rows="10"
      />

    <div className='flex justify-center items-center'>
    <button className="p-3 cursor-pointer outline-none bg-[#b64a13] text-white rounded">
        Update Topic
      </button>
    </div>
    </form>
        </div>
        
      </div>
  );
}
