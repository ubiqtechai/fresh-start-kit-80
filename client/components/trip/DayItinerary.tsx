import { Card, CardContent } from "@/components/ui/card";
import { Clock, Utensils, TreePine, Music, Home, Plane, MapPin } from "lucide-react";
import { TripPlan } from "@/types/trip";

interface DayItineraryProps {
  generatedPlan: TripPlan;
}

const getActivityIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('breakfast') || lowerTitle.includes('brunch') || lowerTitle.includes('dinner')) return Utensils;
  if (lowerTitle.includes('nature') || lowerTitle.includes('walk')) return TreePine;
  if (lowerTitle.includes('cultural') || lowerTitle.includes('dance')) return Music;
  if (lowerTitle.includes('check-in') || lowerTitle.includes('resort') || lowerTitle.includes('relax')) return Home;
  if (lowerTitle.includes('drive') || lowerTitle.includes('departure')) return Plane;
  if (lowerTitle.includes('explore') || lowerTitle.includes('market')) return MapPin;
  return Clock;
};

export const DayItinerary = ({ generatedPlan }: DayItineraryProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Day-by-Day Itinerary</h2>
        <p className="text-gray-600">Your personalized travel schedule</p>
      </div>

      {Object.entries(generatedPlan.days).map(([day, activities], dayIndex) => (
        <Card key={day} className="border-0 bg-white shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
              <h3 className="text-2xl font-bold">{day}</h3>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {activities.map((activity, actIndex) => {
                  const IconComponent = getActivityIcon(activity.title);
                  return (
                    <div key={actIndex} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-semibold text-blue-600">{activity.time}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};