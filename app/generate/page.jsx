"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CoverPageForm() {
  const [formData, setFormData] = useState({
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

  function clearForm() {
    setFormData({
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
    sessionStorage.clear();
  }

  useEffect(() => {
    const savedData = sessionStorage.getItem("formData");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    sessionStorage.setItem("formData", JSON.stringify(newData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsClicked(true);

    // Generate a dynamic URL based on form data
    const {
      studentName,
      studentID,
      department,
      session,
      courseName,
      courseCode,
      teacherName,
      teacherDesignation,
      teacherDept,
      teacherUni,
      coverPageType,
      serialNumber,
      coverPageTitle,
      submissionDate,
    } = formData;

    // Redirect to /pdf page and pass formData as URL params
    setTimeout(() => {
      router.push(
        `/download?studentName=${studentName}&studentID=${studentID}&department=${department}&session=${session}&courseName=${courseName}&courseCode=${courseCode}&teacherName=${teacherName}&teacherDesignation=${teacherDesignation}&coverPageType=${coverPageType}&serialNumber=${serialNumber}&coverPageTitle=${coverPageTitle}&submissionDate=${submissionDate}&teacherDept=${teacherDept}&teacherUni=${teacherUni}`
      );
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-2xl">
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
                required
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
                required
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
              </select>
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                type="number"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
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
                required
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
                required
              />
            </div>
          </div>
        </fieldset>

        <div className=" flex gap-4 ">
          {/* Reset Button */}
          <button
            type="reset"
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
    </div>
  );
}
