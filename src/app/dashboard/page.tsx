"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleGeminiAI = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/gemini");
      console.log("res : ", res.data);
    } catch (error) {
      console.log("error while getting gemini response : ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full min-h-screen py-24 flex items-center justify-center">
      <Button
        onClick={handleGeminiAI}
        className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg text-base shadow-sm transition-all"
      >
        {loading ? "AI is thinking..." : " Gemini AI"}
      </Button>
    </section>
  );
};

export default Dashboard;
