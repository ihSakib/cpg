import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center px-2 mt-6">
      {/* About Page Content */}
      <section className="text-center max-w-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          About CPG
        </h1>
        <p className="md:text-lg text-gray-700 mb-6">
          Cover Page Generator (CPG) is a tool designed to simplify the process
          of creating cover pages for lab reports, assignments, and projects.
          Generate professional cover pages in seconds!
        </p>
      </section>

      {/* Developer Section */}
      <section className="mt-10 lg:mt-16  mb-6 w-full max-w-3xl text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 underline">
          Meet the Developer
        </h2>

        {/* Developer Profile Card */}
        <div className="flex flex-col md:flex-row items-center  border border-neutral-100 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          {/* Profile Image */}
          <div className="w-32 h-32  md:w-40 md:h-40 md:-ml-6">
            <Image
              className="rounded-md md:rounded-l-none rounded-tr-md rounded-br-md object-cover "
              src="/iftekhar.jpg"
              alt="Iftekhar Hossain"
              width={160}
              height={160}
            />
          </div>

          {/* Profile Details */}
          <div className="mt-4 md:mt-0  md:w-[70%] md:ml-10 text-center md:text-left flex flex-col justify-center ">
            <h2 className="text-xl font-semibold">Iftekhar Hossain</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              Developer of CPG | Student at CSTU
            </p>
            <p className="text-sm  text-gray-500 mb-4">
              He is a web development learner passionate about full-stack
              development. With intermediate knowledge of React, Next.js, and
              Tailwind CSS, he builds responsive and dynamic web apps. He also
              has basic skills in PHP, MySQL, and Node.js, and is dedicated to
              improving his craft and creating user-friendly solutions.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:ihsakib.dev@gmail.com"
                className="text-blue-600 hover:underline text-sm"
              >
                ✉️ contact@ihsakib.dev
              </a>
              <a
                href="https://linkedin.com/in/ihsakib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                🔗 linkedin.com/in/ihsakib
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
