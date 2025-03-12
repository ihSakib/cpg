"use client";

import { useState } from "react";
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
    coverPageType: "Assignment",
    serialNumber: "",
    coverPageTitle: "",
    submissionDate: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      coverPageType,
      serialNumber,
      coverPageTitle,
      submissionDate,
    } = formData;

    // Redirect to /pdf page and pass formData as URL params
    router.push(
      `/pdf?studentName=${studentName}&studentID=${studentID}&department=${department}&session=${session}&courseName=${courseName}&courseCode=${courseCode}&teacherName=${teacherName}&teacherDesignation=${teacherDesignation}&coverPageType=${coverPageType}&serialNumber=${serialNumber}&coverPageTitle=${coverPageTitle}&submissionDate=${submissionDate}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-2xl border border-gray-200"
      >
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
          Cover Page Generator
        </h2>

        {/* Student Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Student Information
          </h3>
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
        </div>

        {/* Course Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Course Information
          </h3>
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
                Teacher Name:
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
                Teacher Designation:
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
          </div>
        </div>

        {/* Cover Page Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Cover Page Information
          </h3>
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
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white font-medium py-2 w-full rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer"
        >
          Generate PDF
        </button>
      </form>
    </div>
  );
}
