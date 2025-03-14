"use client";
import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function PdfPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <PdfContent />
    </Suspense>
  );
}

function PdfContent() {
  const searchParams = useSearchParams(); // Access query parameters
  const [html2pdf, setHtml2pdf] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB").format(date);
  };

  // Destructure form data from the searchParams
  const studentName = searchParams.get("studentName");
  const studentID = searchParams.get("studentID");
  const department = searchParams.get("department");
  const session = searchParams.get("session");
  const courseName = searchParams.get("courseName");
  const courseCode = searchParams.get("courseCode");
  const teacherName = searchParams.get("teacherName");
  const teacherDesignation = searchParams.get("teacherDesignation");
  const teacherDept = searchParams.get("teacherDept");
  const teacherUni = searchParams.get("teacherUni");
  const coverPageType = searchParams.get("coverPageType");
  const serialNumber = searchParams.get("serialNumber");
  const coverPageTitle = searchParams.get("coverPageTitle");
  const submissionDate = formatDate(searchParams.get("submissionDate"));

  useEffect(() => {
    import("html2pdf.js").then((module) => {
      setHtml2pdf(() => module.default);
    });
  }, []);

  // Reference for the container to be converted to PDF
  const pdfContentRef = useRef();

  // Function to generate the PDF
  const generatePDF = () => {
    if (!html2pdf) {
      console.error("html2pdf is not loaded yet");
      return;
    }

    console.log("Generating PDF");
    const input = pdfContentRef.current;
    const cc = courseCode.split(" ").join("_");
    const randomCode = Math.floor(1000 + Math.random() * 9000);

    var opt = {
      margin: 0,
      filename: "CP_" + cc + "_" + randomCode,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "A4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(input).save();
  };

  return (
    <div
      style={{
        paddingBlock: "50px",
        overflow: "auto",
      }}
    >
      {/* Container with the form content */}
      <div className="border-3 border-[gainsboro] mx-auto w-fit pb-[70px]">
        <div
          ref={pdfContentRef}
          className="font-sans text-center"
          style={{
            width: "8.27in",
            fontFamily: "sans-serif",
            textAlign: "center",
            paddingInline: "45px",
            paddingTop: "70px",
            margin: "auto",
          }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              margin: "0",
            }}
          >
            Chandpur Science and Technology University
          </h2>
          <h4
            style={{
              fontSize: "1.3rem",
              marginBottom: "16px",
              marginTop: "0px",
              color: "#80807F",
            }}
          >
            Department of {department}
          </h4>
          <img
            src="/logo.jpg"
            alt="University Logo"
            style={{ display: "block", margin: "0 auto", width: "20rem" }}
          />
          <p
            className=""
            style={{
              background: "whitesmoke",
              margin: "0 auto",
              fontWeight: 550,
              width: "fit-content",
              padding: "0.5rem 1rem",
              marginBlock: "1rem",
              marginBottom: "1rem",
            }}
          >
            {coverPageType} #{serialNumber}
          </p>
          <h3
            className="text-xl font-semibold mb-4"
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "1rem",
              paddingInline: "3rem",
            }}
          >
            {coverPageTitle}
          </h3>

          <p style={{ margin: 0, marginTop: "3rem" }}>
            <strong>Course Name:</strong> {courseName}
          </p>
          <p style={{ marginTop: "5px" }}>
            <strong>Course Code:</strong> {courseCode}
          </p>

          <div
            className="flex justify-between mt-8 p-4 border"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "4rem",
              padding: "1rem",
              border: "2px solid gainsboro",
            }}
          >
            <div
              className="w-1/2"
              style={{
                width: "50%",
                borderRight: "2px solid gainsboro",
                paddingInline: "1rem",
              }}
            >
              <h4
                className="font-semibold text-xl mb-2"
                style={{ fontWeight: "600" }}
              >
                Submitted From
              </h4>
              <p style={{ margin: 0 }}>
                <strong>Name:</strong> {studentName}
              </p>
              <p style={{ margin: 0 }}>
                <strong>ID:</strong> {studentID}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Session:</strong> {session}
              </p>
            </div>

            <div
              className="w-1/2"
              style={{ width: "50%", paddingInline: "1rem" }}
            >
              <h4
                className="font-semibold text-xl mb-2"
                style={{ fontWeight: "600" }}
              >
                Submitted To
              </h4>
              <p style={{ margin: 0 }}>
                <strong>Name:</strong> {teacherName}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Designation:</strong> {teacherDesignation},
                <br />
                Dept. of {teacherDept}, {teacherUni}
              </p>
            </div>
          </div>
          <p style={{ marginTop: "5rem" }}>
            <strong>Date of Submission:</strong> {submissionDate}
          </p>
        </div>
      </div>

      <div className="hidden md:block fixed top-32 right-32">
        <button
          onClick={generatePDF}
          className="px-5 py-2.5 rounded-md text-lg cursor-pointer outline-none bg-[#FFA500] hover:bg-[#FF8C00] text-white flex items-center"
        >
          <i className="fas fa-download mr-2"></i>
          Download
        </button>
      </div>

      {/***mobile view */}
      <div className="md:hidden fixed top-32 left-4  bg-slate-300 p-10">
        <p>Your Cover Page is Ready!</p>
        <p className="mb-4">For better view use desktop mode</p>

        <button
          type="button"
          onClick={generatePDF}
          className="bg-black hover:bg-neutral-600 text-white px-3 py-2 rounded text-xs cursor-pointer outline-none flex items-center"
        >
          <i className="fas fa-download mr-2"></i>
          Download
        </button>
      </div>
    </div>
  );
}
