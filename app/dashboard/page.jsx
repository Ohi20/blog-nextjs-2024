import Link from "next/link";
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import React from "react";
import RemoveBtn from "@/components/RemoveBtn/RemoveBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import useSWR from 'swr';
// import Loading from './Loading';

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
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
    <div className="px-12">
      <h1 className="text-4xl text-center text-[#b64a13] mb-8 font-semibold">
        Add and Update your blogs{" "}
        <span>
          <FontAwesomeIcon icon={faBlog} />
        </span>
      </h1>
      <div className="flex justify-center items-center mb-8">
        <Link href={"/dashboard/addTopic"}>
          <button className="p-3 cursor-pointer outline-none bg-[#b64a13] text-white rounded">
            Add Blog
          </button>
        </Link>
      </div>
      <div className="card grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 shadow-xl">
        {topics.map((t) => (
          <div
            key={t._id}
            className="grid grid-cols-1 p-6 text-center border-2 border-[#b64a13] mb-8 rounded-lg sm:p-8"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold dark:text-[#D7D7D7]">
                {t.title}
              </h2>
              <p className="mb-5 text-base sm:text-lg dark:text-[#D7D7D7] text-justify">
                {t.description}
              </p>
            </div>

            <div className="flex flex-auto justify-center gap-4 ">
              <div>
                <RemoveBtn id={t._id} />
              </div>

              <Link
                className="flex flex-row justify-center"
                href={`/dashboard/editTopic/${t._id}`}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                <p>Edit</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// }

export default Dashboard;
