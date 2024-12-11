import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";cd
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineFolderOpen } from "react-icons/ai";

const SavedPlans = () => {
  const [savedPlans, setSavedPlans] = useState([]);

  
  useEffect(() => {
    const plans = JSON.parse(localStorage.getItem("savedPlans")) || [];
    setSavedPlans(plans);
  }, []);

  
  const handleDeletePlan = (id) => {
    const updatedPlans = savedPlans.filter((plan) => plan.id !== id);
    setSavedPlans(updatedPlans);
    localStorage.setItem("savedPlans", JSON.stringify(updatedPlans));
    alert("Plan deleted successfully!");
  };

  return (
    <div>
      <Navbar />
      <section
        className="min-h-screen bg-gray-900 text-white px-6 py-10"
        style={{ backgroundColor: "rgb(21,21,21)" }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Your Saved Event Plans</h1>
        {savedPlans.length > 0 ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {savedPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">Plan ID: {plan.id}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Saved on: {plan.date}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold">Venue</h4>
                    <p>${plan.breakdown.venue.toFixed(2)}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Catering</h4>
                    <p>${plan.breakdown.catering.toFixed(2)}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Decorations</h4>
                    <p>${plan.breakdown.decor.toFixed(2)}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Entertainment</h4>
                    <p>${plan.breakdown.entertainment.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeletePlan(plan.id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded"
                >
                  Delete Plan
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center">
              <AiOutlineFolderOpen className="text-6xl text-gray-600 mb-4" />
              <p className="text-gray-400 mb-4">
                You haven't saved any event plans yet.
              </p>
              <Link
                to="/calculator" // Updated to use Link for navigation
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded"
              >
                Create Your First Plan
              </Link>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default SavedPlans;
