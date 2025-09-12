"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";

const Page = () => {

    useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '0ef600ddea8ec6bb1ceaa8788f6587f0',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/0ef600ddea8ec6bb1ceaa8788f6587f0/invoke.js";

    // append scripts in order
    document.getElementById("ad-container")?.appendChild(script1);
    document.getElementById("ad-container")?.appendChild(script2);

   
  }, []);

  return (
    <div>
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
      <section id="ad-container" className="text-center  mt-10 px-6">
       
      </section>
    </div>
  );
};

export default Page;
