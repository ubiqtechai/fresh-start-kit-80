

import Header from "@/components/Header"
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Plane,
  DollarSign,
  Star,
  Clock,
  Users,
  Camera,
  Utensils,
  Mountain,
  Building,
  Waves,
  Check,
  Sparkles,
  Globe,
  Heart,
  Phone,
  Coffee,
  TreePine,
  Music,
  Home
} from "lucide-react";

interface TripDetails {
  origin: string;
  destination: string;
  arrivalDate: string;
  departureDate: string;
  travelStyle: string;
  interests: string[];
  groupSize: number;
  budgetTier: string;
  luxuryExperience: string;
  specialRequests: string;
}

interface DayActivity {
  time: string;
  title: string;
  description: string;
}

interface TripPlan {
  route: string;
  duration: string;
  groupSize: string;
  budgetTier: string;
  experienceLevel: string;
  interests: string;
  tripDates: string;
  days: { [key: string]: DayActivity[] };
}

// // Mock Header component
// const Header = () => (
//   <header className="bg-white shadow-sm border-b">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <div className="bg-gradient-to-r from-blue-500 to-green-500 w-8 h-8 rounded-full"></div>
//           <span className="text-xl font-bold">TravelAI</span>
//         </div>
//         <nav className="hidden md:flex space-x-6">
//           <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
//           <a href="#" className="text-gray-600 hover:text-gray-900">Plans</a>
//           <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
//         </nav>
//       </div>
//     </div>
//   </header>
// );

// Mock Footer component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; 2025 TravelAI. All rights reserved.</p>
    </div>
  </footer>
);

// Widget loader component
const ElevenLabsWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-6">
      <div
        dangerouslySetInnerHTML={{
          __html: `<elevenlabs-convai agent-id=\"agent_01k0e0t378ekaapqyfnv96ka97\"></elevenlabs-convai>`
        }}
      />
    </div>
  );
};

// Function to parse the trip plan from your output format
const parseTripPlan = (outputText: string): TripPlan | null => {
  try {
    // Extract key information using regex
    const routeMatch = outputText.match(/\*\*Route\*\*: (.+)/);
    const durationMatch = outputText.match(/\*\*Duration\*\*: (.+)/);
    const groupSizeMatch = outputText.match(/\*\*Group Size\*\*: (.+)/);
    const budgetMatch = outputText.match(/\*\*Budget Tier\*\*: (.+)/);
    const experienceMatch = outputText.match(/\*\*Experience Level\*\*: (.+)/);
    const interestsMatch = outputText.match(/\*\*Interests\*\*: (.+)/);
    const datesMatch = outputText.match(/\*\*Trip Dates: (.+)\*\*/);

    // Parse days and activities with improved regex
    const days: { [key: string]: DayActivity[] } = {};
    
    // Split by day sections
    const daySections = outputText.split(/\*\*Day \d+\*\*/);
    
    // Remove the first empty section
    daySections.shift();
    
    daySections.forEach((daySection, index) => {
      const dayNum = `Day ${index + 1}`;
      const activities: DayActivity[] = [];
      
      // Extract activities using a more flexible regex
      // This regex matches: * **Time**: Title \n *Description*
      const activityPattern = /\* \*\*([^*]+)\*\*: ([^\n]+)\n\s*\*([^*]+)\*/g;
      let match;
      
      while ((match = activityPattern.exec(daySection)) !== null) {
        const time = match[1].trim();
        const title = match[2].trim();
        const description = match[3].trim();
        
        activities.push({
          time,
          title,
          description
        });
      }
      
      days[dayNum] = activities;
    });

    return {
      route: routeMatch ? routeMatch[1].trim() : '',
      duration: durationMatch ? durationMatch[1].trim() : '',
      groupSize: groupSizeMatch ? groupSizeMatch[1].trim() : '',
      budgetTier: budgetMatch ? budgetMatch[1].trim() : '',
      experienceLevel: experienceMatch ? experienceMatch[1].trim() : '',
      interests: interestsMatch ? interestsMatch[1].trim() : '',
      tripDates: datesMatch ? datesMatch[1].trim() : '',
      days
    };
  } catch (error) {
    console.error('Error parsing trip plan:', error);
    return null;
  }
};

// Sample trip plan data from your output
const sampleTripOutput = `---

#### Trip Overview

* **Route**: Delhi (DEL) → Bagdogra (IXB)
* **Duration**: 4 days
* **Group Size**: Not specified
* **Budget Tier**: Economical
* **Experience Level**: Not specified
* **Interests**: Nature, Culture, Relaxation

**Trip Dates: July 29, 2025 – August 1, 2025**

---

### Day-by-Day Itinerary

**Day 1**

* **Morning (9:00 AM)**: Arrival and Check-in
  *Welcome to Bagdogra! Check-in at your chosen resort, unwind, and enjoy a complimentary breakfast.*
* **Afternoon (2:00 PM)**: Explore Bagdogra
  *Discover local markets and get your first taste of the region's unique culture and cuisine.*
* **Evening (7:00 PM)**: Dinner at Local Restaurant
  *Enjoy a local culinary experience in Bagdogra with traditional dishes.*

**Day 2**

* **Morning (9:00 AM)**: Sikkim Introduction
  *Start with an engaging presentation about Sikkim and its unique geographical and cultural attributes.*
* **Afternoon (2:00 PM)**: Scenic Drive to Sikkim
  *Enjoy a scenic drive through the lush landscapes leading to the bordering region of Sikkim.*
* **Evening (7:00 PM)**: Relax at Resort
  *Return to the resort, experience the amenities, and relax under the Himalayan stars.*

**Day 3**

* **Morning (9:00 AM)**: Nature Walk
  *Begin your day with a peaceful nature walk exploring the local biodiversity.*
* **Afternoon (2:00 PM)**: Cultural Tour
  *Immerse yourself in the local culture with visits to cultural sites and community interactions.*
* **Evening (7:00 PM)**: Traditional Dance Performance
  *End your day with a vibrant traditional dance performance that captures the spirit of the region.*

**Day 4**

* **Morning (9:00 AM)**: Farewell Brunch
  *Enjoy a farewell brunch as you reminisce your wonderful journey.*
* **Afternoon (2:00 PM)**: Departure Preparation
  *Prepare for your departure with a relaxed afternoon at the resort.*
* **Evening (7:00 PM)**: Fly Back to Delhi
  *Conclude your memorable trip to Sikkim and Bagdogra.*

---`;

export default function TripPlanner() {
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

            {/* Trip Overview */}
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

            {/* Day by Day Itinerary */}
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

            <div className="text-center mt-12 space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4">
                <Heart className="mr-2 h-5 w-5" /> Save This Plan
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                <Globe className="mr-2 h-5 w-5" /> Share
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowPlan(false)} className="px-8 py-4">
                <ChevronLeft className="mr-2 h-5 w-5" /> Create New Plan
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <section className="flex-1 py-12 bg-gradient-to-br from-ocean-50 to-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <Sparkles className="h-4 w-4" />
              <span>AI Trip Planner</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Plan Your Perfect
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Adventure</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your dream trip and we'll create a personalized itinerary just for you.
            </p>
          </div>

          {/* Call with Daffy Interface */}
          <div className="max-w-lg mx-auto mb-12">
            <Card className="border-0 bg-gradient-to-br from-sunset-50 via-earth-50 to-forest-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
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
                    <Button class onClick={() => console.log("Voice agent widget triggered")}>
                      
                    </Button>
                  </div>
                </div>
                <ElevenLabsWidget />
              </CardContent>
            </Card>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step ? <Check className="h-6 w-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 transition-colors duration-300 ${
                      currentStep > step ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <Card className="border-0 bg-white shadow-2xl">
            <CardContent className="p-8 md:p-12">
              {/* Step 1: Basic Details */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Where are you going?</h2>
                    <p className="text-gray-600">Let's start with the basics of your trip</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">From</label>
                      <div className="relative">
                        <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Origin city"
                          value={tripDetails.origin}
                          onChange={(e) => updateField('origin', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Destination city"
                          value={tripDetails.destination}
                          onChange={(e) => updateField('destination', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Arrival Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          value={tripDetails.arrivalDate}
                          onChange={(e) => updateField('arrivalDate', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Departure Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          value={tripDetails.departureDate}
                          onChange={(e) => updateField('departureDate', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Preferences */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">What's your travel style?</h2>
                    <p className="text-gray-600">Help us personalize your experience</p>
                  </div>

                  {/* Travel Style */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Travel Style</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: 'adventure', label: 'Adventure', icon: Mountain, desc: 'Thrilling experiences' },
                        { value: 'relaxation', label: 'Relaxation', icon: Waves, desc: 'Peace and tranquility' },
                        { value: 'cultural', label: 'Cultural', icon: Building, desc: 'History and culture' }
                      ].map((style) => (
                        <button
                          key={style.value}
                          onClick={() => updateField('travelStyle', style.value)}
                          className={`p-6 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-lg ${
                            tripDetails.travelStyle === style.value
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <style.icon className="h-8 w-8 mx-auto mb-3" />
                          <h3 className="font-bold mb-2">{style.label}</h3>
                          <p className="text-sm text-gray-600">{style.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">What interests you? (Select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: 'food', label: 'Food & Drink', icon: Utensils },
                        { value: 'photography', label: 'Photography', icon: Camera },
                        { value: 'nature', label: 'Nature', icon: Mountain },
                        { value: 'history', label: 'History', icon: Building },
                        { value: 'beaches', label: 'Beaches', icon: Waves },
                        { value: 'nightlife', label: 'Nightlife', icon: Star },
                        { value: 'shopping', label: 'Shopping', icon: Building },
                        { value: 'wellness', label: 'Wellness', icon: Heart }
                      ].map((interest) => (
                        <button
                          key={interest.value}
                          onClick={() => toggleInterest(interest.value)}
                          className={`p-4 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-md ${
                            tripDetails.interests.includes(interest.value)
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <interest.icon className="h-6 w-6 mx-auto mb-2" />
                          <span className="text-sm font-medium">{interest.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Group Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Group Size</label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateField('groupSize', Math.max(1, tripDetails.groupSize - 1))}
                        className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors"
                      >
                        -
                      </button>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-gray-400" />
                        <span className="text-2xl font-bold text-gray-900">{tripDetails.groupSize}</span>
                        <span className="text-gray-600">{tripDetails.groupSize === 1 ? 'person' : 'people'}</span>
                      </div>
                      <button
                        onClick={() => updateField('groupSize', Math.min(20, tripDetails.groupSize + 1))}
                        className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Experience */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Budget & Experience Level</h2>
                    <p className="text-gray-600">Let's match your budget and luxury preferences</p>
                  </div>

                  {/* Budget Tier */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Budget Tier</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: 'budget', label: 'Budget', range: '$50-100/day', desc: 'Great value experiences' },
                        { value: 'mid-range', label: 'Mid-Range', range: '$100-250/day', desc: 'Comfort and quality' },
                        { value: 'luxury', label: 'Luxury', range: '$250+/day', desc: 'Premium experiences' }
                      ].map((tier) => (
                        <button
                          key={tier.value}
                          onClick={() => updateField('budgetTier', tier.value)}
                          className={`p-6 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-lg ${
                            tripDetails.budgetTier === tier.value
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          <DollarSign className="h-8 w-8 mx-auto mb-3" />
                          <h3 className="font-bold mb-1">{tier.label}</h3>
                          <p className="text-sm text-gray-600 mb-2">{tier.range}</p>
                          <p className="text-xs text-gray-500">{tier.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Luxury Experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Luxury Experience Level</label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[
                        { value: 'basic', label: 'Basic', stars: 1 },
                        { value: 'comfort', label: 'Comfort', stars: 2 },
                        { value: 'premium', label: 'Premium', stars: 3 },
                        { value: 'ultra-luxury', label: 'Ultra Luxury', stars: 4 }
                      ].map((level) => (
                        <button
                          key={level.value}
                          onClick={() => updateField('luxuryExperience', level.value)}
                          className={`p-4 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-md ${
                            tripDetails.luxuryExperience === level.value
                              ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                              : 'border-gray-200 hover:border-yellow-300'
                          }`}
                        >
                          <div className="flex justify-center mb-2">
                            {Array.from({ length: level.stars }, (_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{level.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Special Requests (Optional)</label>
                    <textarea
                      placeholder="Any dietary restrictions, accessibility needs, special occasions, or other preferences..."
                      value={tripDetails.specialRequests}
                      onChange={(e) => updateField('specialRequests', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Step {currentStep} of 3
                  </p>
                </div>

                {currentStep < 3 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={generatePlan}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 flex items-center space-x-2 px-8"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        <span>Generate Plan</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

