import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BudgetCalculator = () => {
  const [budgetBreakdown, setBudgetBreakdown] = useState({
    venue: 0,
    catering: 0,
    decor: 0,
    entertainment: 0,
  });
  const [isBreakdownVisible, setIsBreakdownVisible] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Dummy logic for budget breakdown calculation
    const venueCost = 0.3 * e.target.totalBudget.value;
    const cateringCost = 0.4 * e.target.totalBudget.value;
    const decorCost = 0.2 * e.target.totalBudget.value;
    const entertainmentCost = 0.1 * e.target.totalBudget.value;

    setBudgetBreakdown({
      venue: venueCost,
      catering: cateringCost,
      decor: decorCost,
      entertainment: entertainmentCost,
    });
    setIsBreakdownVisible(true);
  };

  const handleSavePlan = () => {
    const savedPlans = JSON.parse(localStorage.getItem("savedPlans")) || [];
    const newPlan = {
      id: Date.now(),
      breakdown: budgetBreakdown,
      date: new Date().toLocaleString(),
    };
    savedPlans.push(newPlan);
    localStorage.setItem("savedPlans", JSON.stringify(savedPlans));
    alert("Plan saved successfully!");
  };

  return (
    <div>
      <Navbar />
      <section
        className="flex flex-col items-center justify-center min-h-screen text-white px-6 py-10"
        style={{ backgroundColor: "rgb(21,21,21)" }}
      >
        <div className="w-full max-w-xl" style={{ backgroundColor: "rgb(28,28,28)", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "2rem" }}>
          <h2 className="text-2xl font-bold text-center mb-4">
            Event Budget Calculator
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Plan your event budget with ease. Fill out the details below to get
            a customized breakdown.
          </p>
          <form
            id="budget-form"
            className="space-y-6"
            onSubmit={handleFormSubmit}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="event-type" className="block font-semibold">
                  Event Type
                </label>
                <select
                  id="event-type"
                  name="eventType"
                  className="w-full p-2 border border-yellow-500 rounded bg-gray-700 text-white"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="conference">Conference</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block font-semibold">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  className="w-full p-2 border border-yellow-500 rounded bg-gray-700 text-white"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className="block font-semibold">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="w-full p-2 border border-yellow-500 rounded bg-gray-700 text-white"
                  min="1"
                  max="1000"
                  placeholder="Enter guest count"
                  required
                />
              </div>
              <div>
                <label htmlFor="total-budget" className="block font-semibold">
                  Total Budget ($)
                </label>
                <input
                  type="number"
                  id="total-budget"
                  name="totalBudget"
                  className="w-full p-2 border border-yellow-500 rounded bg-gray-700 text-white"
                  min="100"
                  max="100000"
                  placeholder="Enter total budget"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">
                  Additional Services
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="photography"
                      className="mr-2"
                    />{" "}
                    Photography
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="catering"
                      className="mr-2"
                    />{" "}
                    Catering
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="music"
                      className="mr-2"
                    />{" "}
                    Music/Entertainment
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded"
            >
              Calculate Budget
            </button>
          </form>

          {isBreakdownVisible && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Budget Breakdown</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <h4 className="font-bold">Venue</h4>
                  <p>${budgetBreakdown.venue.toFixed(2)}</p>
                </div>
                <div>
                  <h4 className="font-bold">Catering</h4>
                  <p>${budgetBreakdown.catering.toFixed(2)}</p>
                </div>
                <div>
                  <h4 className="font-bold">Decorations</h4>
                  <p>${budgetBreakdown.decor.toFixed(2)}</p>
                </div>
                <div>
                  <h4 className="font-bold">Entertainment</h4>
                  <p>${budgetBreakdown.entertainment.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={handleSavePlan}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded mt-4"
              >
                Save Plan
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BudgetCalculator;
