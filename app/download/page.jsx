"use client";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function PdfContent() {
  const searchParams = useSearchParams(); // Access query parameters
  const [html2pdf, setHtml2pdf] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return;
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
    <div className="py-12 overflow-auto">
      {/* Container with the form content */}
      <div
        style={{
          border: "3px solid gainsboro",
          margin: "0 auto",
          width: "fit-content",
          paddingBottom: "70px",
        }}
      >
        <div
          ref={pdfContentRef}
          style={{
            textAlign: "center",
            width: "8.27in",
            margin: "0 auto",
            padding: "70px 45px 0",
          }}
        >
          <h2
            style={{
              fontSize: "22pt",
              fontWeight: "bold",
              marginBottom: "0.25rem",
              margin: 0,
            }}
          >
            Chandpur Science and Technology University
          </h2>
          <h4
            style={{
              fontSize: "16pt",
              marginBottom: "1rem",
              marginTop: 0,
              color: "#80807F",
            }}
          >
            Department of {department}
          </h4>
          <img
            src="/logo.png"
            alt="University Logo"
            style={{ display: "block", margin: "3rem auto", width: "13rem" }}
          />
          <p
            style={{
              backgroundColor: "whitesmoke",
              margin: "0 auto",
              fontWeight: "600",
              width: "fit-content",
              padding: "0.5rem 1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              fontSize: "14pt",
            }}
          >
            {coverPageType} #{serialNumber}
          </p>
          <h3
            style={{
              paddingLeft: "3rem",
              paddingRight: "3rem",
              fontWeight: "600",
              marginBottom: "1rem",
              fontSize: "14pt",
            }}
          >
            {coverPageTitle}
          </h3>

          <p
            style={{
              marginTop: "3rem",
              marginBottom: "0",
              fontSize: "14pt",
              padding: "0 5rem",
            }}
          >
            <strong>Course Name:</strong> {courseName}
          </p>
          <p style={{ marginTop: "0", fontSize: "14pt", padding: "0 10rem" }}>
            <strong>Course Code:</strong> {courseCode}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3rem",
              padding: "1rem",
              border: "2px solid gainsboro",
            }}
          >
            <div
              style={{
                width: "50%",
                paddingRight: "1rem",
                borderRight: "2px solid gainsboro",
              }}
            >
              <h4
                style={{
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  fontSize: "16pt",
                }}
              >
                Submitted From
              </h4>
              <p style={{ margin: 0, fontSize: "14pt" }}>
                <strong>Name:</strong> {studentName}
              </p>
              <p style={{ margin: 0, fontSize: "14pt" }}>
                <strong>ID:</strong> {studentID}
              </p>
              <p style={{ margin: 0, fontSize: "14pt" }}>
                <strong>Session:</strong> {session}
              </p>
            </div>

            <div style={{ width: "50%", paddingLeft: "1rem" }}>
              <h4
                style={{
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  fontSize: "16pt",
                }}
              >
                Submitted To
              </h4>
              <p style={{ margin: 0, fontSize: "14pt" }}>
                <strong>Name:</strong> {teacherName}
              </p>
              <p style={{ margin: 0, fontSize: "14pt" }}>
                <strong>Designation:</strong> {teacherDesignation},
                <br />
                Dept. of {teacherDept}, {teacherUni}
              </p>
            </div>
          </div>
          <p style={{ marginTop: "5rem", fontSize: "14pt" }}>
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
      <div className="md:hidden fixed top-32 left-4 bg-slate-300 p-10">
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
