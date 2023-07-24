import React from "react";

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

const Blogs = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div className="text-justify">{t.description}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blogs;