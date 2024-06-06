import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MagazinePage from "./Magazine";
import { data as pop } from "../utils/data";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const [topic, setTopic] = useState("");
  const [openaiResponse, setOpenaiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoaderModal, setShowLoaderModal] = useState(false);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Magazine Content",
    onAfterPrint: () => {
      // Optional: Handle any post-print actions here
    },
  });

  const generateContent = async () => {
    setLoading(true);
    setShowLoaderModal(true);
    try {
      // const response = await fetch("/api/generate-content", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ topic }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      setOpenaiResponse(pop);
      toast.success("Content generated successfully");
      setShowModal(true); // Open the modal when content is generated successfully
      // } else {
      //   console.error("Error:", data.error);
      //   toast.error("Error generating content");
      // }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
      setShowLoaderModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setOpenaiResponse(null);
  };

  const saveAsPdf = () => {
    setShowLoaderModal(true);
    handlePrint();
    setShowLoaderModal(false);
  };

  useEffect(() => {
    console.log("openaiResponse:", openaiResponse); // Check if openaiResponse is correctly set
  }, [openaiResponse]);

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Enter topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
      />
      <button
        onClick={generateContent}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Content"}
      </button>
      {openaiResponse && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">OpenAI Response:</h2>
          <p className="text-gray-800">{openaiResponse.content}</p>
        </div>
      )}
      <ToastContainer />

      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="bg-white rounded-lg p-8 modal-content"
              ref={componentRef}
            >
              {/* Pass openaiResponse directly */}
              <MagazinePage data={pop} /> {/* Ensure correct data is passed */}
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-4"
                  onClick={saveAsPdf}
                >
                  Save as PDF
                </button>
                <button
                  className="bg-blue-500 text-white rounded-lg px-4 py-2"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLoaderModal && (
        <div
          className="fixed z-20 inset-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-2">Building PDF...</h2>
            <div className="loader"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
