const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const mongoose = require("mongoose");
const Icon = require("../models/Icon");

const iconData = [
  {
    name: "briefcase",
    category: "Business",
    svgPath:
      "M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5z",
    viewBox: "0 0 24 24",
    keywords: ["work", "job", "office", "business"],
  },
  {
    name: "chart",
    category: "Business",
    svgPath:
      "M3 13h2v8H3v-8zm4-6h2v14H7V7zm4 3h2v11h-2V10zm4-6h2v17h-2V4zm4 4h2v13h-2V8z",
    viewBox: "0 0 24 24",
    keywords: ["analytics", "graph", "stats", "growth"],
  },
  {
    name: "building",
    category: "Business",
    svgPath:
      "M12 3L2 12h3v9h14v-9h3L12 3zm0 12.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    viewBox: "0 0 24 24",
    keywords: ["company", "corporate", "office", "building"],
  },
  {
    name: "money",
    category: "Business",
    svgPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z",
    viewBox: "0 0 24 24",
    keywords: ["dollar", "finance", "payment", "currency"],
  },
  {
    name: "handshake",
    category: "Business",
    svgPath:
      "M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63 3.9-3.91-1.06-1.06-4.24 4.24 7.76 7.76 1.77-1.77c.78-.78.78-2.05 0-2.83l-3.18-3.18 1.42-1.41 3.18 3.18c1.56 1.56 1.56 4.09 0 5.65l-2.02 2.02 3.29 3.29 7.02-7.02c.78-.78.78-2.05 0-2.83l-.49-.49c-.78-.78-2.05-.78-2.83 0z",
    viewBox: "0 0 24 24",
    keywords: ["deal", "partnership", "agreement", "cooperation"],
  },

  {
    name: "facebook",
    category: "Social",
    svgPath:
      "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z",
    viewBox: "0 0 24 24",
    keywords: ["social", "fb", "meta", "network"],
  },
  {
    name: "twitter",
    category: "Social",
    svgPath:
      "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
    viewBox: "0 0 24 24",
    keywords: ["social", "tweet", "x", "network"],
  },
  {
    name: "instagram",
    category: "Social",
    svgPath:
      "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
    viewBox: "0 0 24 24",
    keywords: ["social", "photo", "ig", "network"],
  },
  {
    name: "linkedin",
    category: "Social",
    svgPath:
      "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
    viewBox: "0 0 24 24",
    keywords: ["social", "professional", "job", "network"],
  },
  {
    name: "youtube",
    category: "Social",
    svgPath:
      "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z",
    viewBox: "0 0 24 24",
    keywords: ["video", "stream", "media", "channel"],
  },

  {
    name: "star",
    category: "General",
    svgPath:
      "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    viewBox: "0 0 24 24",
    keywords: ["favorite", "rating", "review", "bookmark"],
  },
  {
    name: "heart",
    category: "General",
    svgPath:
      "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    viewBox: "0 0 24 24",
    keywords: ["love", "like", "favorite", "emotion"],
  },
  {
    name: "search",
    category: "General",
    svgPath:
      "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    viewBox: "0 0 24 24",
    keywords: ["find", "lookup", "magnify", "explore"],
  },
  {
    name: "home",
    category: "General",
    svgPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    viewBox: "0 0 24 24",
    keywords: ["house", "main", "start", "landing"],
  },
  {
    name: "checkmark",
    category: "General",
    svgPath: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    viewBox: "0 0 24 24",
    keywords: ["done", "complete", "success", "tick"],
  },
  {
    name: "arrow-right",
    category: "General",
    svgPath: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    viewBox: "0 0 24 24",
    keywords: ["next", "forward", "continue", "direction"],
  },

  {
    name: "laptop",
    category: "Technology",
    svgPath:
      "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
    viewBox: "0 0 24 24",
    keywords: ["computer", "device", "work", "tech"],
  },
  {
    name: "phone",
    category: "Technology",
    svgPath:
      "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
    viewBox: "0 0 24 24",
    keywords: ["mobile", "smartphone", "device", "call"],
  },
  {
    name: "cloud",
    category: "Technology",
    svgPath:
      "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
    viewBox: "0 0 24 24",
    keywords: ["storage", "server", "online", "sync"],
  },
  {
    name: "wifi",
    category: "Technology",
    svgPath:
      "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
    viewBox: "0 0 24 24",
    keywords: ["internet", "wireless", "connection", "network"],
  },
  {
    name: "code",
    category: "Technology",
    svgPath:
      "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
    viewBox: "0 0 24 24",
    keywords: ["developer", "programming", "software", "coding"],
  },
  {
    name: "database",
    category: "Technology",
    svgPath:
      "M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13z",
    viewBox: "0 0 24 24",
    keywords: ["storage", "data", "server", "backend"],
  },
];

const seedIcons = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Icon.deleteMany({});
    console.log("Cleared existing icons");

    await Icon.insertMany(iconData);
    console.log(`Inserted ${iconData.length} icons`);

    await mongoose.connection.close();
    console.log("Database connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding icons:", error.message);
    process.exit(1);
  }
};

seedIcons();
