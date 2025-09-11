"use client";
import Link from "next/link";
import React from "react";
import Script from "next/script";

const Page = () => {
  return (
    <div>
      <script>
        (function(s)
        {
          ((s.dataset.zone = "9861038"),
          (s.src = "https://forfrogadiertor.com/tag.min.js"))
        }
        )([document.documentElement,
        document.body].filter(Boolean).pop().appendChild(document.createElement('script')))
      </script>
      {/** Home Page Content */}
      <section className="text-center  mt-10 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cover Page Generator
        </h1>
        <p className="md:text-lg mb-8 max-w-3xl mx-auto">
          Tired of manually formatting cover pages? CPG makes it quick and easy!
          Just fill out a simple form, and get a professionally formatted cover
          page for your lab reports, assignments, and projects in seconds.
        </p>
        <Link
          href="/generate"
          className="bg-blue-500 text-sm md:text-base text-white px-6 py-2 rounded-sm hover:bg-blue-700 cursor-pointer leading-0 pb-2.5 "
        >
          Generate Now
        </Link>
      </section>
    </div>
  );
};

export default Page;
