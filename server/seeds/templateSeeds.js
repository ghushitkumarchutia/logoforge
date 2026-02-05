require("dotenv").config();
const mongoose = require("mongoose");
const Template = require("../models/Template");

const templateData = [
  {
    name: "Modern Business Logo",
    category: "Logo",
    canvasData: {
      version: "5.3.0",
      objects: [
        { type: "circle", left: 100, top: 100, radius: 50, fill: "#3b82f6" },
        {
          type: "text",
          left: 170,
          top: 85,
          text: "BRAND",
          fontSize: 36,
          fontFamily: "Arial",
          fill: "#1f2937",
        },
      ],
      background: "#ffffff",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect fill="%23fff" width="200" height="150"/><circle cx="60" cy="75" r="30" fill="%233b82f6"/><text x="100" y="85" fill="%231f2937" font-size="20">BRAND</text></svg>',
    isPublic: true,
  },
  {
    name: "Minimal Tech Logo",
    category: "Logo",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "rect",
          left: 80,
          top: 80,
          width: 60,
          height: 60,
          fill: "#10b981",
          rx: 10,
        },
        {
          type: "text",
          left: 160,
          top: 95,
          text: "TECH",
          fontSize: 32,
          fontFamily: "Helvetica",
          fill: "#111827",
        },
      ],
      background: "#f9fafb",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect fill="%23f9fafb" width="200" height="150"/><rect x="40" y="55" width="40" height="40" rx="8" fill="%2310b981"/><text x="95" y="85" fill="%23111827" font-size="18">TECH</text></svg>',
    isPublic: true,
  },
  {
    name: "Creative Studio Logo",
    category: "Logo",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "triangle",
          left: 100,
          top: 70,
          width: 80,
          height: 80,
          fill: "#f59e0b",
        },
        {
          type: "text",
          left: 200,
          top: 95,
          text: "STUDIO",
          fontSize: 28,
          fontFamily: "Georgia",
          fill: "#374151",
        },
      ],
      background: "#ffffff",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect fill="%23fff" width="200" height="150"/><polygon points="60,110 100,50 140,110" fill="%23f59e0b"/><text x="150" y="85" fill="%23374151" font-size="16">STUDIO</text></svg>',
    isPublic: true,
  },
  {
    name: "Social Media Banner",
    category: "Banner",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "rect",
          left: 0,
          top: 0,
          width: 1200,
          height: 630,
          fill: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
        {
          type: "text",
          left: 400,
          top: 280,
          text: "YOUR MESSAGE HERE",
          fontSize: 48,
          fontFamily: "Arial",
          fill: "#ffffff",
        },
      ],
      background: "#667eea",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="105"><rect fill="%23667eea" width="200" height="105"/><text x="30" y="60" fill="%23fff" font-size="12">YOUR MESSAGE</text></svg>',
    isPublic: true,
  },
  {
    name: "YouTube Thumbnail",
    category: "Banner",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "rect",
          left: 0,
          top: 0,
          width: 1280,
          height: 720,
          fill: "#ef4444",
        },
        {
          type: "text",
          left: 450,
          top: 320,
          text: "CLICK HERE",
          fontSize: 72,
          fontFamily: "Impact",
          fill: "#ffffff",
        },
      ],
      background: "#ef4444",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="112"><rect fill="%23ef4444" width="200" height="112"/><text x="50" y="65" fill="%23fff" font-size="16" font-weight="bold">CLICK HERE</text></svg>',
    isPublic: true,
  },
  {
    name: "Professional Business Card",
    category: "Card",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "rect",
          left: 0,
          top: 0,
          width: 350,
          height: 200,
          fill: "#1f2937",
        },
        {
          type: "text",
          left: 20,
          top: 40,
          text: "John Doe",
          fontSize: 24,
          fontFamily: "Helvetica",
          fill: "#ffffff",
        },
        {
          type: "text",
          left: 20,
          top: 80,
          text: "CEO & Founder",
          fontSize: 14,
          fontFamily: "Helvetica",
          fill: "#9ca3af",
        },
        {
          type: "text",
          left: 20,
          top: 150,
          text: "john@company.com",
          fontSize: 12,
          fontFamily: "Helvetica",
          fill: "#60a5fa",
        },
      ],
      background: "#1f2937",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="175" height="100"><rect fill="%231f2937" width="175" height="100"/><text x="10" y="30" fill="%23fff" font-size="12">John Doe</text><text x="10" y="50" fill="%239ca3af" font-size="8">CEO</text></svg>',
    isPublic: true,
  },
  {
    name: "Minimal Business Card",
    category: "Card",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "rect",
          left: 0,
          top: 0,
          width: 350,
          height: 200,
          fill: "#ffffff",
        },
        {
          type: "line",
          left: 20,
          top: 100,
          x2: 330,
          y2: 100,
          stroke: "#e5e7eb",
          strokeWidth: 1,
        },
        {
          type: "text",
          left: 20,
          top: 50,
          text: "Your Name",
          fontSize: 20,
          fontFamily: "Arial",
          fill: "#111827",
        },
        {
          type: "text",
          left: 20,
          top: 130,
          text: "email@domain.com",
          fontSize: 12,
          fontFamily: "Arial",
          fill: "#6b7280",
        },
      ],
      background: "#ffffff",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="175" height="100"><rect fill="%23fff" width="175" height="100" stroke="%23e5e7eb"/><text x="10" y="35" fill="%23111827" font-size="10">Your Name</text><line x1="10" y1="55" x2="165" y2="55" stroke="%23e5e7eb"/></svg>',
    isPublic: true,
  },
  {
    name: "Event Poster",
    category: "Poster",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "rect",
          left: 0,
          top: 0,
          width: 800,
          height: 1200,
          fill: "#0f172a",
        },
        {
          type: "text",
          left: 200,
          top: 400,
          text: "EVENT",
          fontSize: 120,
          fontFamily: "Impact",
          fill: "#fbbf24",
        },
        {
          type: "text",
          left: 250,
          top: 550,
          text: "DATE & VENUE",
          fontSize: 36,
          fontFamily: "Arial",
          fill: "#ffffff",
        },
      ],
      background: "#0f172a",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="133" height="200"><rect fill="%230f172a" width="133" height="200"/><text x="20" y="100" fill="%23fbbf24" font-size="24" font-weight="bold">EVENT</text><text x="20" y="130" fill="%23fff" font-size="10">DATE</text></svg>',
    isPublic: true,
  },
  {
    name: "Sale Poster",
    category: "Poster",
    canvasData: {
      version: "5.3.0",
      objects: [
        {
          type: "rect",
          left: 0,
          top: 0,
          width: 800,
          height: 1200,
          fill: "#dc2626",
        },
        {
          type: "text",
          left: 200,
          top: 350,
          text: "SALE",
          fontSize: 150,
          fontFamily: "Arial Black",
          fill: "#ffffff",
        },
        {
          type: "text",
          left: 280,
          top: 550,
          text: "UP TO 50% OFF",
          fontSize: 48,
          fontFamily: "Arial",
          fill: "#fef2f2",
        },
      ],
      background: "#dc2626",
    },
    thumbnail:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="133" height="200"><rect fill="%23dc2626" width="133" height="200"/><text x="25" y="90" fill="%23fff" font-size="28" font-weight="bold">SALE</text><text x="20" y="120" fill="%23fef2f2" font-size="10">50% OFF</text></svg>',
    isPublic: true,
  },
];

const seedTemplates = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Template.deleteMany({});
    console.log("Cleared existing templates");

    await Template.insertMany(templateData);
    console.log(`Inserted ${templateData.length} templates`);

    await mongoose.connection.close();
    console.log("Database connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding templates:", error.message);
    process.exit(1);
  }
};

seedTemplates();
