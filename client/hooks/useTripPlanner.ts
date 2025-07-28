import { useState } from "react";
import { TripDetails, TripPlan } from "@/types/trip";
import { parseTripPlan, sampleTripOutput } from "@/utils/tripParser";

export const useTripPlanner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    origin: "",
    destination: "",
    arrivalDate: "",
    departureDate: "",
    travelStyle: "",
    interests: [],
    groupSize: 1,
    budgetTier: "",
    luxuryExperience: "",
    specialRequests: ""
  });
  const [showPlan, setShowPlan] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<TripPlan | null>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const updateField = (field: keyof TripDetails, value: any) => {
    setTripDetails(prev => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    const current = tripDetails.interests;
    updateField(
      "interests",
      current.includes(interest)
        ? current.filter(i => i !== interest)
        : [...current, interest]
    );
  };

  const nextStep = () => currentStep < 3 && setCurrentStep(cur => cur + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(cur => cur - 1);

  const generatePlan = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("https://adarsh03.app.n8n.cloud/webhook/travel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tripDetails)
      });

      if (!res.ok) throw new Error("Failed to generate plan");

      const data = await res.json();
      console.log("Webhook Response:", data);
      setApiResponse(data);
      
      // Parse the response - assuming it has the same structure as your sample
      if (data && data.length > 0 && data[0].output) {
        const parsed = parseTripPlan(data[0].output);
        setGeneratedPlan(parsed);
      } else {
        // Fallback to sample data for demonstration
        const parsed = parseTripPlan(sampleTripOutput);
        setGeneratedPlan(parsed);
      }

    } catch (err) {
      console.error(err);
      alert("Error generating trip plan. Please try again.");
      // Use sample data as fallback
      const parsed = parseTripPlan(sampleTripOutput);
      setGeneratedPlan(parsed);
    }

    setIsGenerating(false);
    setShowPlan(true);
  };

  const formatDateRange = () => {
    const a = new Date(tripDetails.arrivalDate);
    const d = new Date(tripDetails.departureDate);
    if (isNaN(a.getTime()) || isNaN(d.getTime())) return "";
    return `${a.toLocaleDateString()} - ${d.toLocaleDateString()}`;
  };

  return {
    currentStep,
    tripDetails,
    showPlan,
    isGenerating,
    generatedPlan,
    apiResponse,
    updateField,
    toggleInterest,
    nextStep,
    prevStep,
    generatePlan,
    formatDateRange,
    setShowPlan
  };
};