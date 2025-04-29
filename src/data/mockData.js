// Mock user profile image
const userImageUrl =
  "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300";

// Mock project images (instead of songs or album covers)
const projectImages = [
  "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300", // Smart Dustbin
  "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=300", // Attendance App
  "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300", // Line Following Robot
];

// Mock engineering memories images
const memoriesImages = [
  "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=300", // Library
  "https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&w=300", // Canteen
  "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=300", // Lab
  "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=300", // Back Bench
];

// Updated card data with engineering life stats
export const cardData = [
  // Total Time Spent in Engineering (in days)
  {
    id: "total-time-card",
    type: "minutes",
    totalTime: 57600, // Example time in minutes (4 years in minutes, or any total time)
    totalLectures: 1080, // Total lectures attended
    totalVivas: 15, // Total vivas given
    totalSubmissions: 150, // Total submissions done
    totalProjects: 5, // Total projects done
    attendancePercentage: 72, // Attendance percentage
    country: "Engineering Life",
    userImage: userImageUrl,
  },

  // Top Subjects - Projects Section (based on themes)
  {
    id: "top-subjects",
    type: "topSubjects",
    title: "Top 5 Subjects (Survived, Not Loved)",
    subjects: [
      {
        name: "Advanced Maths III",
        description: "Still don't know what happened here.",
      },
      { name: "Thermodynamics", description: "Burned calories and brains." },
      {
        name: "DBMS",
        description: "Can't explain normalization but passed somehow.",
      },
      { name: "EDC", description: "Electronic Devices & Confusion." },
      {
        name: "Machine Learning",
        description: "Learnt nothing, still passed.",
      },
    ],
    userImage: userImageUrl,
  },

  // Google Search Stats
  {
    id: "top-google-searches",
    type: "topGoogleSearches",
    title: "Top 5 Google Searches",
    searches: [
      { query: "What is the full form of OOPS?" },
      { query: "How to pass without studying?" },
      { query: "C program that compiles itself" },
      { query: "Difference between Java and JavaScript" },
      { query: "Will backlogs ruin my life?" },
    ],
    userImage: userImageUrl,
  },

  // Top Projects - Projects Section
  {
    id: "top-projects",
    type: "topProjects",
    title: "Top 3 Projects (Copied Successfully)",
    projects: [
      { name: "Smart Dustbin (from YouTube)", image: projectImages[0] },
      {
        name: "Attendance App (didn't work on attendance)",
        image: projectImages[1],
      },
      {
        name: "Line Following Robot (followed nothing)",
        image: projectImages[2],
      },
    ],
    userImage: userImageUrl,
  },

  // Most Visited Locations on Campus
  {
    id: "most-visited-places",
    type: "mostVisitedPlaces",
    title: "Most Visited Locations on Campus",
    locations: [
      { name: "Library (for AC & sleep)", image: memoriesImages[0] },
      { name: "Lab (last-minute project panic)", image: memoriesImages[2] },
      {
        name: "Canteen (meeting spot, not for food)",
        image: memoriesImages[1],
      },
      { name: "Back Bench (permanent residence)", image: memoriesImages[3] },
    ],
    userImage: userImageUrl,
  },

  // Most Used Words During Engineering
  {
    id: "most-used-words",
    type: "mostUsedWords",
    title: "Most Used Words During Engineering",
    words: [
      { word: "Lag gaye" },
      { word: "Kya karna hai bhai?" },
      { word: "Group mein add kar na" },
      { word: "Assignment bhej na pdf mein" },
      { word: "Isme kya karte hain?" },
    ],
    userImage: userImageUrl,
  },

  // Group Stats - Group Members
  {
    id: "top-group-members",
    type: "topGroupMembers",
    title: "Top Group Members (Legends Only)",
    members: [
      { name: "Leader Bhai: Did the work" },
      { name: "Backup Bhai: Said “mai kar lunga” and vanished" },
      { name: "Moral Support Bhai: Kept saying “ho jaayega”" },
      { name: "Report Bhai: Copy-pasted everything from seniors" },
    ],
    userImage: userImageUrl,
  },
];
