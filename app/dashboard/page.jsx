import Link from 'next/link';

import { HiPencilAlt } from 'react-icons/hi';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import React from 'react';
import RemoveBtn from '@/components/RemoveBtn/RemoveBtn';
// import useSWR from 'swr';
// import Loading from './Loading';

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/blogs', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading topics: ', error);
  }
};

const Dashboard = async () => {
  const { topics } = await getTopics();

  // const session = useSession();

  // const router = useRouter();

  //NEW WAY TO FETCH DATA
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, mutate, error, isLoading } = useSWR(
  //   `/api/topics?username=${session?.data?.user.name}`,
  //   fetcher
  // );

  // if (session.status === 'loading') {
  //   return <Loading />;
  // }

  // if (session.status === 'unauthenticated') {
  //   router?.push('/dashboard/login');
  // }

  // if (session.status === 'authenticated') {
  return (
    <>
      <div>
        <Link href={'/dashboard/addTopic'}>
          <button>Add Topic</button>
        </Link>
      </div>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div className='text-justify'>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/dashboard/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
// }

export default Dashboard;
