import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Phone } from "lucide-react";
import { TripOverviewCards } from "@/components/trip/TripOverviewCards";
import { DayItinerary } from "@/components/trip/DayItinerary";
import { ElevenLabsWidget } from "@/components/trip/ElevenLabsWidget";
import { useTripPlanner } from "@/hooks/useTripPlanner";

// Mock Footer component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; 2025 TravelAI. All rights reserved.</p>
    </div>
  </footer>
);

export default function TripPlanner() {
  const {
    currentStep,
    tripDetails,
    showPlan,
    isGenerating,
    generatedPlan,
    updateField,
    toggleInterest,
    nextStep,
    prevStep,
    generatePlan,
    formatDateRange,
    setShowPlan
  } = useTripPlanner();

  if (showPlan && generatedPlan) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <section className="flex-1 py-12 bg-gradient-to-br from-ocean-50 to-forest-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
                <Sparkles className="h-4 w-4" />
                <span>Your Trip Plan is Ready!</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {generatedPlan.route.split(' → ')[0]} to
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {generatedPlan.route.split(' → ')[1]}
                </span>
              </h1>
              <p className="text-xl text-gray-600">{generatedPlan.tripDates}</p>
            </div>

            <TripOverviewCards generatedPlan={generatedPlan} />
            <DayItinerary generatedPlan={generatedPlan} />

            <div className="text-center mt-12 space-x-4">
              <Button
                onClick={() => setShowPlan(false)}
                variant="outline"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg"
              >
                Plan Another Trip
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                Book This Trip
              </Button>
            </div>

            {/* Voice Agent Section */}
            <Card className="mt-16 border-0 bg-gradient-to-r from-orange-100 to-yellow-100 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Need a Human Touch?</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-10">
                      Talk to a certified travel expert for personalized planning and booking assistance.
                    </p>
                    <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white" onClick={() => console.log("Voice agent widget triggered")}>
                      <Phone className="mr-2 h-4 w-4" />
                      Talk to Expert
                    </Button>
                  </div>
                </div>
                <ElevenLabsWidget />
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // For now, return a simple form placeholder - the full form would be in TripPlannerForm component
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trip Planner</h1>
          <p className="text-gray-600 mb-8">Plan your perfect trip with AI assistance</p>
          <Button onClick={generatePlan} disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate Sample Trip"}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}