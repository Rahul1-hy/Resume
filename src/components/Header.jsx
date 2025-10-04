import { FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header text-center bg-white shadow-lg rounded-xl max-w-xl mx-auto p-10 mt-8">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-2 font-sans">Rahul Kumar</h1>
      <p className="text-lg text-gray-600 mb-4">Full Stack Developer | React | Node.js</p>
      <a
        href="mailto:rahulkumar1813111034@gmail.com"
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        <FaEnvelope className="mr-2" /> Contact Me
      </a>
    </header>
  );
}