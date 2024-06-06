import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [openaiResponse, setOpenaiResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generateContent = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();

      if (response.ok) {
        setOpenaiResponse(data.content);
        toast.success("Content generated successfully");
      } else {
        console.error("Error:", data.error);
        toast.error("Error generating content");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

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
          <p className="text-gray-800">{openaiResponse}</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Main;
