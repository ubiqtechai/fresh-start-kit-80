export interface TripDetails {
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

export interface DayActivity {
  time: string;
  title: string;
  description: string;
}

export interface TripPlan {
  route: string;
  duration: string;
  groupSize: string;
  budgetTier: string;
  experienceLevel: string;
  interests: string;
  tripDates: string;
  days: { [key: string]: DayActivity[] };
}