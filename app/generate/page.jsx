"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CoverPageForm() {
  const [formData, setFormData] = useState({
    uni: "CSTU",
    uni_name: "",
    other_dept: "",
    studentName: "",
    studentID: "",
    department: "Computer Science and Engineering",
    session: "",
    courseName: "",
    courseCode: "",
    teacherName: "",
    teacherDesignation: "",
    teacherDept: "",
    teacherUni: "",
    coverPageType: "Assignment",
    serialNumber: "",
    coverPageTitle: "",
    submissionDate: "",
  });

  const [customLogo, setCustomLogo] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  // Load saved form & logo
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("formData");
      if (savedData) setFormData(JSON.parse(savedData));

      const savedLogo = localStorage.getItem("customLogo");
      if (savedLogo) setCustomLogo(savedLogo);
    } catch (err) {
      console.error("Error loading from sessionStorage:", err);
      localStorage.removeItem("formData");
      localStorage.removeItem("customLogo");
    }
  }, []);

  // Update field value
  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  // Clear form but keep some defaults
  const clearForm = () => {
    const clearedData = {
      uni: formData.uni,
      uni_name: formData.uni_name,
      other_dept: formData.other_dept,
      studentName: formData.studentName,
      studentID: formData.studentID,
      department: formData.department,
      session: formData.session,
      courseName: "",
      courseCode: "",
      teacherName: "",
      teacherDesignation: "",
      teacherDept: "",
      teacherUni: "",
      coverPageType: formData.coverPageType,
      serialNumber: "",
      coverPageTitle: "",
      submissionDate: "",
    };

    setFormData(clearedData);
    //  sessionStorage.setItem("formData", JSON.stringify(clearedData));
    localStorage.setItem("formData", JSON.stringify(clearedData));
  };

  // Handle custom logo upload
  const handleCustomLogo = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSizeMB = 10;
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File too big! Max allowed is ${maxSizeMB} MB.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64DataUrl = reader.result;
      setCustomLogo(base64DataUrl);
      localStorage.setItem("customLogo", base64DataUrl);
    };
    reader.readAsDataURL(file);
  };

  // Submit form → redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);

    setTimeout(() => {
      const params = new URLSearchParams(formData);
      router.push(`/download?${params.toString()}`);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-2xl">
        {/* University Info */}
        <fieldset className="mb-6 mt-4 md:mt-6 border border-gray-300 p-4 rounded-md">
          <legend className="text-lg md:text-xl font-semibold text-gray-700 px-2">
            University Information
          </legend>

          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="uni"
                value="CSTU"
                checked={formData.uni === "CSTU"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-400"
              />
              CSTU
            </label>

            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="uni"
                value="Others"
                checked={formData.uni === "Others"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-400"
              />
              Others
            </label>
          </div>

          {/*others uni name */}
          {formData.uni === "Others" && (
            <div className="mt-4">
              <input
                type="text"
                name="uni_name"
                value={formData.uni_name}
                onChange={handleChange}
                placeholder="University name"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          )}

          {/* Upload field appears only if "Others" is selected */}
          {formData.uni === "Others" && (
            <div className="mt-4">
              <input
                type="file"
                name="customLogo"
                accept="image/*"
                onChange={handleCustomLogo}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <p className="text-sm text-gray-700 mt-2">
                <p className="text-sm text-gray-700 ">
                  <span className="text-base font-bold text-red-500">*</span>{" "}
                  Upload your logo once, and it will remain saved until the
                  browser is uninstalled!
                </p>
                <span className="text-base font-bold text-red-500">*</span> For
                the best results, please upload a square logo image (1:1 aspect
                ratio).
              </p>
            </div>
          )}
        </fieldset>

        {/* Student Information */}
        <fieldset className="mb-6 mt-4 md:mt-6 border border-gray-300 p-4 rounded-md">
          <legend className="text-lg md:text-xl font-semibold text-gray-700 px-2">
            Student Information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium">
                Student Name:
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Student ID:
              </label>
              <input
                type="text"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Department:
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="Computer Science and Engineering">CSE</option>
                <option value="Information and Communication Technology">
                  ICT
                </option>
                <option value="Business Administration">DBA</option>
                <option value="Others">Others</option>
              </select>

              {/* custom dept */}
              {formData.department === "Others" && (
                <div className="mt-4">
                  <input
                    type="text"
                    name="other_dept"
                    value={formData.other_dept}
                    onChange={handleChange}
                    placeholder="Department"
                    className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Session:
              </label>
              <input
                type="text"
                name="session"
                value={formData.session}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>
        </fieldset>

        {/* Course Information */}
        <fieldset className="mb-6 border border-gray-300 p-4 rounded-md">
          <legend className="text-lg md:text-xl font-semibold text-gray-700 px-2">
            Course Information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium">
                Course Name:
              </label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Course Code:
              </label>
              <input
                type="text"
                name="courseCode"
                value={formData.courseCode}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Course Teacher:
              </label>
              <input
                type="text"
                name="teacherName"
                value={formData.teacherName}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Teacher's Designation:
              </label>
              <input
                type="text"
                name="teacherDesignation"
                value={formData.teacherDesignation}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Teacher's Department:
              </label>
              <input
                type="text"
                name="teacherDept"
                value={formData.teacherDept}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Teacher's University:
              </label>
              <input
                type="text"
                name="teacherUni"
                value={formData.teacherUni}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>
        </fieldset>

        {/* Cover Page Information */}
        <fieldset className="mb-6 border border-gray-300 p-4 rounded-md">
          <legend className="text-lg md:text-xl font-semibold text-gray-700 px-2">
            Cover Page Information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium">
                Cover Page Type:
              </label>
              <select
                name="coverPageType"
                value={formData.coverPageType}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="Assignment">Assignment</option>
                <option value="Lab Report">Lab Report</option>
                <option value="Project">Project</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Serial Number:
              </label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-600 font-medium">
                Cover Page Title:
              </label>
              <input
                type="text"
                name="coverPageTitle"
                value={formData.coverPageTitle}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-600 font-medium">
                Date of Submission:
              </label>
              <input
                type="date"
                name="submissionDate"
                value={formData.submissionDate}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>
        </fieldset>

        <div className=" flex gap-4 ">
          {/* Reset Button */}
          <button
            type="button"
            onClick={clearForm}
            className="mt-4 bg-gray-200 text-gray-600 font-medium py-2 w-full rounded-md hover:bg-gray-300 transition duration-200 cursor-pointer"
          >
            Clear
          </button>
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-medium py-2 w-full rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer"
          >
            {isClicked ? (
              <i className="fa-solid fa-spinner fa-spin-pulse"></i>
            ) : (
              "Generate"
            )}
          </button>
        </div>
      </form>
      <section className="mt-50" id="ad-container">
        <script
          async="async"
          data-cfasync="false"
          src="//pl27625217.revenuecpmgate.com/abc3d295d423f9a1638f67e2a7606b6f/invoke.js"
        ></script>
        <div id="container-abc3d295d423f9a1638f67e2a7606b6f"></div>
      </section>
    </div>
  );
}
