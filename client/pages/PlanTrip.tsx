import PlaceholderPage from "@/components/PlaceholderPage";
import { Calendar } from "lucide-react";

export default function PlanTrip() {
  return (
    <PlaceholderPage
      title="Plan Your Trip"
      description="Create personalized travel itineraries with our AI-powered trip planner. Input your preferences and get optimized day-by-day plans."
      icon={Calendar}
    />
  );
}
