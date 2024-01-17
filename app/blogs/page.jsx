import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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

const Blogs = async () => {
  const { topics } = await getTopics();

  return (
    <div className="px-12">
      <h1 className="text-4xl text-center mb-8 text-[#b64a13] font-semibold">
        Here are some blogs for you{" "}
        <span>
          <FontAwesomeIcon icon={faBlog} />
        </span>
      </h1>
      <div className="p-6 text-center mb-8 rounded-lg sm:p-8">
        <div className="card grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 shadow-xl">
          {topics.map((t) => (
            <div class="grid grid-cols-1 p-6 text-center border-2 border-[#b64a13] mb-8 rounded-lg sm:p-8">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold dark:text-[#D7D7D7]">
                  {t.title}
                </h2>
                <p className="mb-5 text-base sm:text-lg dark:text-[#D7D7D7] text-justify">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
