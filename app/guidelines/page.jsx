import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center underline">
        Guidelines
      </h1>
      <img
        className="w-full max-w-lg h-auto mb-4 "
        src="./guidelines.jpg"
        alt="Guidelines"
      />
      <a
        className="bg-blue-500 text-sm md:text-base text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
        href="./guidelines.jpg"
        download
      >
        {" "}
        <i className="fas fa-download mr-2"></i>
        Download
      </a>
    </div>
  );
};

export default Page;
