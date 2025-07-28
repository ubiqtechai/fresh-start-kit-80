import { TripPlan, DayActivity } from "@/types/trip";

// Function to parse the trip plan from your output format
export const parseTripPlan = (outputText: string): TripPlan | null => {
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

// Sample trip plan data
export const sampleTripOutput = `---

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