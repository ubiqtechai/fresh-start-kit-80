import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Users,
  Camera,
  Calendar,
  Star,
  Shield,
  Phone,
  Map,
  Heart,
  Globe,
  Mountain,
  Waves,
  TreePine,
  UtensilsCrossed,
  ChevronRight,
  Play,
  Mail,
  Clock,
  Award,
  CheckCircle,
  MessageCircle,
  User,
  ThumbsUp,
  Eye,
  Download,
  Share2,
  Filter,
  Grid3X3,
  List,
  Search,
  Bookmark
} from "lucide-react";

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle hash navigation from other pages
  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Enhanced Hero Section with Background Image */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 animate-pulse"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5006581/pexels-photo-5006581.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            animation: 'kenBurns 20s ease-in-out infinite alternate'
          }}
        />

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-800/80 via-ocean-700/70 to-earth-800/80 animate-pulse" />

        {/* Enhanced Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\"/%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sunset-400/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-ocean-400/30 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-forest-400/30 rounded-full animate-bounce delay-3000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-2xl">
              Get Smart Travel Suggestions
              <span className="block bg-gradient-to-r from-sunset-300 to-sunset-400 bg-clip-text text-transparent">
                Through Voice
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              Meet Daffy, your AI-powered voice travel assistant. Simply speak your travel preferences and get instant, personalized destination suggestions and complete itineraries tailored just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-sunset-500 hover:bg-sunset-600 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-sunset-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/daffy'}
              >
                <Phone className="mr-3 h-6 w-6" />
                Talk to Daffy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-ocean-700 px-10 py-5 text-xl font-bold backdrop-blur-sm bg-white/10 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('features')}
              >
                <Play className="mr-3 h-6 w-6" />
                See How It Works
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-white/80 backdrop-blur-sm bg-white/10 rounded-2xl p-6 mx-auto max-w-4xl shadow-2xl">
              <div className="flex items-center space-x-3 group hover:text-sunset-300 transition-colors">
                <div className="bg-sunset-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-xl">50K+</span>
                  <span className="ml-2">voice conversations</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 group hover:text-forest-300 transition-colors">
                <div className="bg-forest-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-xl">4.9/5</span>
                  <span className="ml-2">AI accuracy rating</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 group hover:text-ocean-300 transition-colors">
                <div className="bg-ocean-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold">Instant suggestions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Voice-Powered Travel Planning
              <span className="text-ocean-600"> Made Simple</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Daffy, our AI voice assistant, understands your travel preferences and provides instant, personalized suggestions through natural conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {/* Voice Agent - Primary Feature */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-sunset-50 to-sunset-100 hover:-translate-y-2 transform-3d hover:rotate-3 scroll-reveal opacity-0 translate-y-8 ring-2 ring-sunset-500/20">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-sunset-500 to-earth-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg animate-pulse">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Daffy Voice Assistant</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Simply speak to Daffy about your travel dreams. Our AI voice agent understands natural language and provides instant, personalized destination suggestions and complete itineraries.
                </p>
                <Button
                  variant="ghost"
                  className="text-sunset-600 hover:text-sunset-700 p-0 font-semibold group-hover:translate-x-2 transition-transform"
                  onClick={() => window.location.href = '/daffy'}
                >
                  Talk to Daffy <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Travel Buddy Finder */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-forest-50 to-forest-100 hover:-translate-y-2 transform-3d hover:-rotate-3 scroll-reveal opacity-0 translate-y-8">
              <CardContent className="p-8">
                <div className="bg-forest-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Travel Buddy Finder</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Connect with like-minded travelers visiting the same destinations. Share experiences, split costs, and create lifelong friendships.
                </p>
                <Button variant="ghost" className="text-forest-600 hover:text-forest-700 p-0 font-semibold group-hover:translate-x-2 transition-transform">
                  Find Travelers <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Photo Galleries */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-sunset-50 to-sunset-100 hover:-translate-y-2 transform-3d hover:rotate-2 scroll-reveal opacity-0 translate-y-8">
              <CardContent className="p-8">
                <div className="bg-sunset-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-float">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Inspiring Galleries</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Explore stunning photo galleries of destinations worldwide, complete with user reviews and hidden gem recommendations.
                </p>
                <Button variant="ghost" className="text-sunset-600 hover:text-sunset-700 p-0 font-semibold group-hover:translate-x-2 transition-transform magnetic-button">
                  Explore Photos <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Maps */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-earth-50 to-earth-100 hover:-translate-y-2 transform-3d hover:-rotate-2 scroll-reveal opacity-0 translate-y-8">
              <CardContent className="p-8">
                <div className="bg-earth-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg animate-float animation-delay-2000">
                  <Map className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Interactive Maps</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Visualize your entire journey with our detailed interactive maps. See attractions, routes, and plan your daily adventures.
                </p>
                <Button variant="ghost" className="text-earth-600 hover:text-earth-700 p-0 font-semibold group-hover:translate-x-2 transition-transform magnetic-button">
                  View Maps <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Premium Support */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-ocean-50 to-forest-50 hover:-translate-y-2 transform-3d hover:rotate-1 scroll-reveal opacity-0 translate-y-8">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-ocean-500 to-forest-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg animate-glow">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Expert Guidance</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get personalized advice from travel experts through audio calls. Premium support for your most important trips.
                </p>
                <Button variant="ghost" className="text-ocean-600 hover:text-ocean-700 p-0 font-semibold group-hover:translate-x-2 transition-transform magnetic-button">
                  Talk to Expert <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Secure Payments */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-forest-50 to-sunset-50 hover:-translate-y-2 transform-3d hover:-rotate-1 scroll-reveal opacity-0 translate-y-8">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-forest-500 to-sunset-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Secure Payments</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Book with confidence using our secure payment gateway. Your transactions are protected with bank-level security.
                </p>
                <Button variant="ghost" className="text-forest-600 hover:text-forest-700 p-0 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Destinations Categories */}
      <section id="destinations" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Explore by
              <span className="text-ocean-600"> Category</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're seeking adventure in the mountains or relaxation by the sea, find your perfect destination.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Mountain, name: "Mountains", color: "from-earth-500 to-earth-600", count: "500+" },
              { icon: Waves, name: "Beaches", color: "from-ocean-500 to-ocean-600", count: "800+" },
              { icon: TreePine, name: "Forests", color: "from-forest-500 to-forest-600", count: "300+" },
              { icon: UtensilsCrossed, name: "Food Tours", color: "from-sunset-500 to-sunset-600", count: "200+" },
              { icon: Globe, name: "Cities", color: "from-ocean-600 to-forest-600", count: "1000+" },
              { icon: Heart, name: "Romance", color: "from-sunset-400 to-earth-500", count: "150+" },
              { icon: Camera, name: "Photography", color: "from-forest-600 to-ocean-600", count: "400+" },
              { icon: MapPin, name: "Adventure", color: "from-earth-600 to-sunset-600", count: "600+" }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} destinations</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Buddy Section */}
      <section id="travel-buddy" className="py-24 bg-gradient-to-br from-sunset-50 via-background to-ocean-50 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-ocean-200 to-forest-200 rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-sunset-200 to-earth-200 rounded-full blur-3xl animate-pulse opacity-20 animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-forest-200 to-ocean-200 rounded-full blur-3xl animate-pulse opacity-20 animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sunset-500 to-ocean-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <Users className="h-4 w-4" />
              <span>Connect with Fellow Adventurers</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-ocean-600 via-forest-600 to-sunset-600 bg-clip-text text-transparent">
              Find Your Perfect
              <span className="block">Travel Buddy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with verified travelers who share your interests, travel style, and destinations. Make lifelong friends and create unforgettable memories together.
            </p>
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Share your travel preferences, interests, and personality to help us find your perfect match.",
                icon: User,
                color: "from-ocean-500 to-ocean-600",
                delay: "0ms"
              },
              {
                step: "02",
                title: "Smart Matching",
                description: "Our AI analyzes compatibility based on destinations, travel dates, budget, and interests.",
                icon: Heart,
                color: "from-forest-500 to-forest-600",
                delay: "200ms"
              },
              {
                step: "03",
                title: "Connect & Explore",
                description: "Chat, plan together, and embark on amazing adventures with your new travel companions.",
                icon: MapPin,
                color: "from-sunset-500 to-sunset-600",
                delay: "400ms"
              }
            ].map((step, index) => (
              <div key={index} className="group text-center transform hover:scale-105 transition-all duration-500" style={{ animationDelay: step.delay }}>
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-r ${step.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-3xl`}>
                    <step.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-4 border-background w-12 h-12 rounded-full flex items-center justify-center font-bold text-muted-foreground text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-ocean-600 transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Travel Buddies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              Meet Some of Our Amazing
              <span className="text-ocean-600"> Travel Community</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alex Rivera",
                  age: 28,
                  location: "Barcelona, Spain",
                  interests: ["Photography", "Hiking", "Culture"],
                  nextTrip: "Japan - Cherry Blossom Season",
                  avatar: "AR",
                  style: "Adventure Seeker",
                  verified: true
                },
                {
                  name: "Maya Patel",
                  age: 32,
                  location: "Mumbai, India",
                  interests: ["Food Tours", "Architecture", "History"],
                  nextTrip: "Italy - Culinary Journey",
                  avatar: "MP",
                  style: "Cultural Explorer",
                  verified: true
                },
                {
                  name: "James Wilson",
                  age: 25,
                  location: "London, UK",
                  interests: ["Backpacking", "Wildlife", "Surfing"],
                  nextTrip: "Costa Rica - Wildlife Adventure",
                  avatar: "JW",
                  style: "Nature Lover",
                  verified: true
                },
                {
                  name: "Sofia Chen",
                  age: 29,
                  location: "Toronto, Canada",
                  interests: ["Art", "Museums", "Festivals"],
                  nextTrip: "Morocco - Art & Culture Tour",
                  avatar: "SC",
                  style: "Art Enthusiast",
                  verified: true
                }
              ].map((buddy, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 hover:-translate-y-4 hover:rotate-1">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className="bg-gradient-to-r from-ocean-400 to-forest-400 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform shadow-lg">
                        {buddy.avatar}
                      </div>
                      {buddy.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-forest-500 w-6 h-6 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="text-center mb-4">
                      <h4 className="font-bold text-foreground text-lg group-hover:text-ocean-600 transition-colors">{buddy.name}</h4>
                      <p className="text-sm text-muted-foreground">{buddy.age} • {buddy.location}</p>
                      <div className="inline-block bg-sunset-100 text-sunset-700 px-3 py-1 rounded-full text-xs font-medium mt-2">
                        {buddy.style}
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-foreground mb-1">Interests:</p>
                        <div className="flex flex-wrap gap-1">
                          {buddy.interests.map((interest, i) => (
                            <span key={i} className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded-md text-xs">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-medium text-foreground mb-1">Next Trip:</p>
                        <p className="text-muted-foreground text-xs">{buddy.nextTrip}</p>
                      </div>
                    </div>

                    <Button size="sm" className="w-full mt-4 bg-gradient-to-r from-ocean-500 to-forest-500 hover:from-ocean-600 hover:to-forest-600 group-hover:scale-105 transition-all">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety & Trust Features */}
          <Card className="border-0 bg-gradient-to-r from-forest-50 to-ocean-50 p-8 mb-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Travel Safe,
                  <span className="text-forest-600"> Travel Smart</span>
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Your safety is our priority. We've built comprehensive verification and safety features to ensure you connect with genuine, trustworthy travelers.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "ID Verification", description: "All users undergo identity verification" },
                    { icon: CheckCircle, title: "Background Checks", description: "Optional enhanced screening available" },
                    { icon: MessageCircle, title: "In-App Messaging", description: "Secure communication before meeting" },
                    { icon: MapPin, title: "Public Meeting Points", description: "Suggested safe meeting locations" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="bg-forest-500 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-forest-600 transition-colors">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-forest-500 to-ocean-600 rounded-3xl p-8 text-white text-center transform hover:rotate-2 transition-all duration-500">
                  <h4 className="text-2xl font-bold mb-6">Community Stats</h4>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="transform hover:scale-110 transition-transform">
                      <div className="text-3xl font-bold mb-2">250K+</div>
                      <div className="text-forest-200">Active Members</div>
                    </div>
                    <div className="transform hover:scale-110 transition-transform">
                      <div className="text-3xl font-bold mb-2">50K+</div>
                      <div className="text-forest-200">Trips Organized</div>
                    </div>
                    <div className="transform hover:scale-110 transition-transform">
                      <div className="text-3xl font-bold mb-2">98%</div>
                      <div className="text-forest-200">Safety Rating</div>
                    </div>
                    <div className="transform hover:scale-110 transition-transform">
                      <div className="text-3xl font-bold mb-2">4.9★</div>
                      <div className="text-forest-200">User Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-sunset-500 via-ocean-500 to-forest-500 hover:from-sunset-600 hover:via-ocean-600 hover:to-forest-600 text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <Users className="mr-3 h-6 w-6" />
              Find Your Travel Buddy
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-ocean-50 to-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              What Our
              <span className="text-ocean-600"> Travelers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories from real travelers who've discovered amazing destinations with Wanderlust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                review: "Wanderlust made planning my European adventure effortless! The AI recommendations were spot-on, and I met incredible travel buddies along the way.",
                trip: "3 weeks in Europe",
                avatar: "SJ"
              },
              {
                name: "Marco Silva",
                location: "São Paulo, Brazil",
                rating: 5,
                review: "The interactive maps and local insights helped me discover hidden gems in Japan that I never would have found otherwise. Absolutely amazing!",
                trip: "2 weeks in Japan",
                avatar: "MS"
              },
              {
                name: "Emily Chen",
                location: "Toronto, Canada",
                rating: 5,
                review: "I was nervous about solo travel, but the travel buddy finder connected me with like-minded adventurers. Made lifelong friends!",
                trip: "Solo backpacking in SEA",
                avatar: "EC"
              },
              {
                name: "David Kumar",
                location: "Mumbai, India",
                rating: 5,
                review: "The premium travel agent support was invaluable during a last-minute change. They went above and beyond to help me.",
                trip: "Business trip to Singapore",
                avatar: "DK"
              },
              {
                name: "Lisa Anderson",
                location: "Stockholm, Sweden",
                rating: 5,
                review: "Perfect for family trips! The itinerary included kid-friendly activities and the photo galleries helped us choose destinations.",
                trip: "Family vacation in Italy",
                avatar: "LA"
              },
              {
                name: "Ahmed Hassan",
                location: "Dubai, UAE",
                rating: 5,
                review: "Secure payments and transparent pricing. No hidden fees, just amazing travel experiences. Highly recommended!",
                trip: "Luxury tour in Switzerland",
                avatar: "AH"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-background hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-ocean-500 to-forest-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-sunset-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.review}"
                  </p>

                  <div className="bg-ocean-50 px-3 py-1 rounded-full inline-block">
                    <span className="text-xs font-medium text-ocean-700">{testimonial.trip}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-ocean-500 hover:bg-ocean-600" onClick={() => scrollToSection('contact')}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Share Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Galleries Section */}
      <section id="galleries" className="py-24 bg-gradient-to-br from-earth-50 via-background to-sunset-50 relative overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-ocean-300 to-forest-300 rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-r from-sunset-300 to-earth-300 rounded-full blur-3xl animate-pulse opacity-20 animation-delay-3000"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-forest-300 to-sunset-300 rounded-full blur-3xl animate-pulse opacity-20 animation-delay-6000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-earth-500 to-sunset-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <Camera className="h-4 w-4" />
              <span>Discover Through Photos</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Inspiring
              <span className="block bg-gradient-to-r from-earth-600 via-sunset-600 to-ocean-600 bg-clip-text text-transparent">
                Photo Galleries
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the world through the eyes of fellow travelers. Stunning photography, authentic reviews, and hidden gems await your discovery.
            </p>
          </div>

          {/* Gallery Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { name: "All Photos", icon: Grid3X3, active: true },
              { name: "Nature", icon: TreePine, active: false },
              { name: "Cities", icon: Globe, active: false },
              { name: "Adventure", icon: Mountain, active: false },
              { name: "Culture", icon: Award, active: false },
              { name: "Beaches", icon: Waves, active: false }
            ].map((category, index) => (
              <button key={index} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${category.active ? 'bg-gradient-to-r from-earth-500 to-sunset-500 text-white shadow-lg' : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:border-earth-500'}`}>
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Featured Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "https://images.pexels.com/photos/33134433/pexels-photo-33134433.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Serene Mountain Lake",
                location: "Swiss Alps, Switzerland",
                photographer: "Elena Rodriguez",
                views: "12.5K",
                likes: "2.1K",
                rating: 4.9,
                description: "Crystal clear waters reflecting towering peaks in perfect harmony.",
                tags: ["Nature", "Mountains", "Reflection"]
              },
              {
                image: "https://images.pexels.com/photos/33108409/pexels-photo-33108409.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Tropical Paradise",
                location: "Maldives",
                photographer: "James Chen",
                views: "18.2K",
                likes: "3.4K",
                rating: 5.0,
                description: "Untouched white sand beaches meet turquoise waters in this slice of heaven.",
                tags: ["Beach", "Tropical", "Paradise"]
              },
              {
                image: "https://images.pexels.com/photos/33090358/pexels-photo-33090358.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "City Lights at Dusk",
                location: "Prague, Czech Republic",
                photographer: "Marco Silva",
                views: "9.8K",
                likes: "1.7K",
                rating: 4.8,
                description: "Historic bridges illuminated against the modern city skyline.",
                tags: ["City", "Architecture", "Night"]
              },
              {
                image: "https://images.pexels.com/photos/33089444/pexels-photo-33089444.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Ancient Heritage",
                location: "Angkor Wat, Cambodia",
                photographer: "Priya Sharma",
                views: "15.3K",
                likes: "2.8K",
                rating: 4.9,
                description: "Centuries-old temple complex showcasing magnificent architectural craftsmanship.",
                tags: ["Culture", "History", "Temple"]
              },
              {
                image: "https://images.pexels.com/photos/33113196/pexels-photo-33113196.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Northern Lights Magic",
                location: "Lapland, Finland",
                photographer: "Andreas Berg",
                views: "22.1K",
                likes: "4.2K",
                rating: 5.0,
                description: "Aurora borealis dancing across the winter sky in spectacular green waves.",
                tags: ["Aurora", "Winter", "Phenomenon"]
              },
              {
                image: "https://images.pexels.com/photos/2150076/pexels-photo-2150076.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Golden Desert Dunes",
                location: "Sahara Desert, Morocco",
                photographer: "Ahmed Hassan",
                views: "14.7K",
                likes: "2.5K",
                rating: 4.7,
                description: "Endless golden sand dunes shaped by wind and time into perfect curves.",
                tags: ["Desert", "Adventure", "Landscape"]
              }
            ].map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-background shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2 mb-3">
                        {photo.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">{photo.description}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-earth-600 transition-colors">{photo.title}</h3>
                      <p className="text-muted-foreground text-sm flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {photo.location}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-sunset-400 fill-current" />
                      <span className="text-sm font-medium text-foreground">{photo.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {photo.views}
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {photo.likes}
                      </span>
                    </div>
                    <span className="text-xs">by {photo.photographer}</span>
                  </div>

                  <Button size="sm" className="w-full bg-gradient-to-r from-earth-500 to-sunset-500 hover:from-earth-600 hover:to-sunset-600 group-hover:scale-105 transition-all">
                    <Camera className="h-4 w-4 mr-2" />
                    View Gallery
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* User-Generated Content Section */}
          <Card className="border-0 bg-gradient-to-r from-ocean-50 to-forest-50 p-8 mb-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Share Your
                  <span className="text-ocean-600"> Adventures</span>
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join our community of photographers and travelers. Share your favorite moments, get featured in our galleries, and inspire others to explore.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-ocean-600 mb-2">500K+</div>
                    <div className="text-muted-foreground text-sm">Photos Shared</div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-forest-600 mb-2">85K+</div>
                    <div className="text-muted-foreground text-sm">Contributors</div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-sunset-600 mb-2">12M+</div>
                    <div className="text-muted-foreground text-sm">Total Views</div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-earth-600 mb-2">4.8★</div>
                    <div className="text-muted-foreground text-sm">Avg Rating</div>
                  </div>
                </div>

                <Button size="lg" className="bg-gradient-to-r from-ocean-500 to-forest-500 hover:from-ocean-600 hover:to-forest-600 text-white">
                  <Camera className="mr-2 h-5 w-5" />
                  Upload Your Photos
                </Button>
              </div>

              <div className="relative">
                {/* Mini Photo Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl overflow-hidden transform hover:rotate-3 hover:scale-105 transition-all duration-500">
                      <img src="https://images.pexels.com/photos/33134433/pexels-photo-33134433.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery sample" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden transform hover:-rotate-3 hover:scale-105 transition-all duration-500">
                      <img src="https://images.pexels.com/photos/33108409/pexels-photo-33108409.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery sample" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="aspect-square rounded-2xl overflow-hidden transform hover:rotate-3 hover:scale-105 transition-all duration-500">
                      <img src="https://images.pexels.com/photos/33090358/pexels-photo-33090358.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery sample" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden transform hover:-rotate-3 hover:scale-105 transition-all duration-500">
                      <img src="https://images.pexels.com/photos/2150076/pexels-photo-2150076.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery sample" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Floating Camera Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-sunset-500 to-earth-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-earth-500 via-sunset-500 to-ocean-500 hover:from-earth-600 hover:via-sunset-600 hover:to-ocean-600 text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <Search className="mr-3 h-6 w-6" />
              Explore All Galleries
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Choose Your
              <span className="text-ocean-600"> Adventure Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options designed to suit every type of traveler, from weekend explorers to digital nomads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Explorer",
                price: "Free",
                period: "Forever",
                description: "Perfect for occasional travelers",
                features: ["3 AI itineraries per month", "Basic destination guides", "Community forum access", "Email support"],
                color: "from-forest-500 to-forest-600",
                popular: false
              },
              {
                name: "Adventurer",
                price: "$19",
                period: "per month",
                description: "Ideal for regular travelers",
                features: ["Unlimited AI itineraries", "Premium destination content", "Travel buddy matching", "Interactive maps", "Priority support", "Offline access"],
                color: "from-ocean-500 to-ocean-600",
                popular: true
              },
              {
                name: "Nomad",
                price: "$49",
                period: "per month",
                description: "For serious travel enthusiasts",
                features: ["Everything in Adventurer", "24/7 travel agent calls", "Concierge booking service", "Exclusive destination access", "Travel insurance discounts", "VIP community access"],
                color: "from-sunset-500 to-sunset-600",
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-4 ${plan.popular ? 'ring-2 ring-ocean-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-ocean-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-r ${plan.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Heart className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-forest-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${plan.popular ? 'bg-ocean-500 hover:bg-ocean-600' : 'bg-muted hover:bg-muted/80'} transition-all duration-300`}
                    size="lg"
                  >
                    {plan.price === 'Free' ? 'Get Started' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">All plans include 30-day money-back guarantee</p>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
              Need a Custom Plan? Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-gradient-to-r from-forest-600 via-ocean-600 to-sunset-600 text-white relative overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay in the
            <span className="block bg-gradient-to-r from-sunset-300 to-forest-300 bg-clip-text text-transparent">
              Adventure Loop
            </span>
          </h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Get weekly travel inspiration, exclusive destination guides, and early access to new features delivered to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-foreground bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-sunset-400 font-medium"
              />
              <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 font-bold whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 25,000+ travelers. Unsubscribe anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Weekly Inspiration</h3>
              <p className="text-white/80 text-sm">Curated travel stories and destination highlights</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Exclusive Guides</h3>
              <p className="text-white/80 text-sm">Insider tips and hidden gems from local experts</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Early Access</h3>
              <p className="text-white/80 text-sm">Be first to try new features and special offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose
                <span className="text-ocean-600"> Wanderlust?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're more than just a travel platform. We're your trusted companion for creating unforgettable memories and meaningful connections around the world.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: "Expert Curation", description: "Hand-picked destinations and experiences by travel experts" },
                  { icon: Users, title: "Community Driven", description: "Connect with verified travelers and share authentic experiences" },
                  { icon: Shield, title: "Secure & Reliable", description: "Bank-level security for all transactions and data protection" },
                  { icon: Clock, title: "24/7 Support", description: "Round-the-clock assistance for any travel emergencies" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-ocean-500 p-2 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-ocean-500 to-forest-600 rounded-3xl p-8 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
                  <p className="text-ocean-100">Connecting travelers worldwide</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50K+</div>
                    <div className="text-ocean-200">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">180+</div>
                    <div className="text-ocean-200">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">2M+</div>
                    <div className="text-ocean-200">Connections Made</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">4.9★</div>
                    <div className="text-ocean-200">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in
              <span className="text-ocean-600"> Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? Need help planning your trip? Our team is here to assist you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-0 bg-gradient-to-br from-ocean-50 to-ocean-100">
              <div className="bg-ocean-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our travel experts</p>
              <p className="font-semibold text-ocean-600">+1 (555) 123-4567</p>
            </Card>

            <Card className="text-center p-8 border-0 bg-gradient-to-br from-forest-50 to-forest-100">
              <div className="bg-forest-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Get detailed responses to your queries</p>
              <p className="font-semibold text-forest-600">hello@wanderlust.com</p>
            </Card>

            <Card className="text-center p-8 border-0 bg-gradient-to-br from-sunset-50 to-sunset-100">
              <div className="bg-sunset-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Instant support for urgent questions</p>
              <Button className="bg-sunset-500 hover:bg-sunset-600">Start Chat</Button>
            </Card>
          </div>

          <Card className="p-8 border-0 bg-background shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  ></textarea>
                  <Button className="w-full bg-ocean-500 hover:bg-ocean-600 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h4>
                  <div className="space-y-4">
                    {[
                      { q: "How does the AI travel planner work?", a: "Our AI analyzes your preferences, budget, and dates to create personalized itineraries." },
                      { q: "Is it safe to connect with travel buddies?", a: "Yes, all users are verified and we provide safety guidelines for meetings." },
                      { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and digital wallets." }
                    ].map((faq, index) => (
                      <div key={index} className="border-l-4 border-ocean-500 pl-4">
                        <h5 className="font-medium text-foreground mb-1">{faq.q}</h5>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-600 via-ocean-500 to-forest-600 text-white relative overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Ready to Talk to
            <span className="block bg-gradient-to-r from-sunset-300 to-sunset-400 bg-clip-text text-transparent">
              Daffy?
            </span>
          </h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join thousands of travelers who've discovered their perfect destinations through voice conversations with Daffy. Your personalized travel suggestions are just a conversation away.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-sunset-500 hover:bg-sunset-600 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-sunset-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/daffy'}
            >
              <Phone className="mr-3 h-6 w-6" />
              Start Voice Chat
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-ocean-600 px-10 py-5 text-xl font-bold backdrop-blur-sm bg-white/10 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('features')}
            >
              <Play className="mr-3 h-6 w-6" />
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* Chat Support */}
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-ocean-500 hover:bg-ocean-600 shadow-2xl hover:shadow-ocean-500/25 transition-all duration-300 group"
          onClick={() => scrollToSection('contact')}
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </Button>

        {/* Trip Planner */}
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-forest-500 hover:bg-forest-600 shadow-2xl hover:shadow-forest-500/25 transition-all duration-300 group"
          onClick={() => window.location.href = '/daffy'}
        >
          <Calendar className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </Button>

        {/* Back to Top */}
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-sunset-500 hover:bg-sunset-600 shadow-2xl hover:shadow-sunset-500/25 transition-all duration-300 group"
          onClick={() => scrollToSection('hero')}
        >
          <ChevronRight className="h-6 w-6 text-white transform -rotate-90 group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Enhanced Mobile Bottom Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-4">
        <div className="flex justify-around items-center max-w-sm mx-auto">
          <button
            onClick={() => scrollToSection('features')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-ocean-600 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-medium">Plan</span>
          </button>
          <button
            onClick={() => scrollToSection('destinations')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-ocean-600 transition-colors"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-xs font-medium">Explore</span>
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-ocean-600 transition-colors"
          >
            <Users className="h-5 w-5" />
            <span className="text-xs font-medium">Buddy</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-ocean-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-medium">Help</span>
          </button>
        </div>
      </div>
    </div>
  );
}
