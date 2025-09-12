"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // Banner 1 (160x300)
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
    script2.src =
      "//www.highperformanceformat.com/0ef600ddea8ec6bb1ceaa8788f6587f0/invoke.js";
    document.getElementById("ad-container-1")?.appendChild(script1);
    document.getElementById("ad-container-1")?.appendChild(script2);

    // Banner 2 (728x90)
    const script3 = document.createElement("script");
    script3.type = "text/javascript";
    script3.innerHTML = `
      atOptions = {
        'key' : '564bf5d76a43f05a086416924fdd52c4',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    const script4 = document.createElement("script");
    script4.type = "text/javascript";
    script4.src =
      "//www.highperformanceformat.com/564bf5d76a43f05a086416924fdd52c4/invoke.js";
    document.getElementById("ad-container-2")?.appendChild(script3);
    document.getElementById("ad-container-2")?.appendChild(script4);
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
      <div
        className="hidden md:block mt-20"
        id="ad-container-2"
        style={{ maxWidth: "728px", height: "90px" }}
      ></div>
      <div
        className="md:hidden mt-15"
        id="ad-container-1"
        style={{ maxWidth: "160px", height: "300px" }}
      ></div>
    </div>
  );
};

export default Page;
