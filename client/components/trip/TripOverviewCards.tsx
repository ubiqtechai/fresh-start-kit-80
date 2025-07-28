import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, MapPin, Plane } from "lucide-react";
import { TripPlan } from "@/types/trip";

interface TripOverviewCardsProps {
  generatedPlan: TripPlan;
}

export const TripOverviewCards = ({ generatedPlan }: TripOverviewCardsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-ocean-500 to-forest-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Duration</h3>
              <p className="text-gray-600">{generatedPlan.duration}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Budget Tier</span>
              <span className="font-semibold text-gray-900">{generatedPlan.budgetTier}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Group Size</span>
              <span className="font-semibold text-gray-900">{generatedPlan.groupSize}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Interests</h3>
              <p className="text-gray-600">Your preferences</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {generatedPlan.interests.split(', ').map((interest, index) => (
              <span key={index} className="bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Route</h3>
              <p className="text-gray-600">Your journey</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Plane className="h-4 w-4 text-gray-400" />
              <span className="text-gray-700">{generatedPlan.route}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};