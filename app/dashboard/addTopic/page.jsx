'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import Blog from 'public/blog.png';
import Image from 'next/image';

 const AddTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to create a topic');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (    
    <div className="my-8 px-12">
      <h1 className="text-4xl text-center text-[#b64a13] mb-10 font-semibold">Add a blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="mb-8 flex-1 relative h-[300px] w-[300px]">
          <Image
            src={Blog}
            fill={true}
            sizes=""
            alt="contact"
            className="object-fit w-[300px] h-[300px]"
          />
        </div>
        
        <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-8">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
        type="text"
        placeholder="Blog Title"
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="p-4 bg-transparent border border-[#b64a13] rounded text-sm font-semibold"
        placeholder="Blog Description"
        cols="30"
        rows="10"
      />

    <div className='flex justify-center items-center'>
    <Button url="#" type="submit" text="Post"/>
    </div>
    </form>
        </div>
        
      </div>
  );
}

export default AddTopic;
