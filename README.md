# LogoForge

![LogoForge Banner](https://via.placeholder.com/1200x400?text=LogoForge+Banner)

> **Professional Logo Design Made Simple.**  
> A powerful, web-based vector graphics editor built for creating stunning logos, icons, and illustrations directly in your browser.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Fabric.js](https://img.shields.io/badge/Fabric.js-%23E34F26.svg?style=flat&logo=fabric&logoColor=white)](http://fabricjs.com/)

---

## 🚀 Overview

**LogoForge** is a full-stack web application that brings desktop-grade graphic design capabilities to the web. It features a robust canvas editor powered by Fabric.js, allowing users to manipulate shapes, text, and images with precision. The platform includes a comprehensive dashboard for project management, authentication, and cloud saving.

### ✨ Key Features

- **Advanced Vector Editor**:
  - **Shape Tools**: 5+ primitive shapes (Rectangle, Circle, Triangle, Line, etc.) with customizable properties.
  - **Text Engine**: Rich text editing with custom fonts, colors, and styling.
  - **Layer Management**: Photoshop-like layer panel with z-index reordering (drag-and-drop coming soon), locking, and visibility toggles.
  - **Alignment Tools**: Precision alignment controls (center, left, right, top, bottom).
  - **History**: Full Undo/Redo support.
  - **Export**: Download designs as PNG, JPG, or SVG.

- **Dashboard & Project Management**:
  - Create, edit, duplicate, and delete projects.
  - Auto-save functionality to prevent data loss.
  - Search and filter projects by tags.

- **Modern UI/UX**:
  - **Dark Mode**: Fully supported system-wide dark mode.
  - **Responsive Design**: Works seamlessly across desktop and tablet devices.
  - **Monochrome Aesthetic**: Clean, distraction-free interface focused on creativity.

---

## 🛠 Tech Stack

### Frontend (`/client`)

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: React Context API
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) + CSS Modules
- **Canvas Engine**: [Fabric.js v6](http://fabricjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: React Router v7

### Backend (`/server`)

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens) + Cookies
- **Security**: Helmet, Rate Limiting, CORS, Bcrypt

---

## 📦 Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/ghushitkumarchutia/logoforge.git
cd logoforge
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/logoforge
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the client directory, and install dependencies:

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory (optional, defaults are set):

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

Your app should now be running at `http://localhost:5173`!

---

## 📂 Project Structure

```
logoforge/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Editor, Dashboard, Common)
│   │   ├── contexts/       # Global state (Canvas, Auth, Theme)
│   │   ├── hooks/          # Custom hooks (useCanvas, useAutoSave)
│   │   ├── pages/          # Route pages (Home, Editor, Login)
│   │   ├── services/       # API integration
│   │   └── utils/          # Helper functions and constants
│   └── ...
├── server/                 # Backend Express Application
│   ├── config/             # DB and App configuration
│   ├── controllers/        # Route logic
│   ├── middleware/         # Auth and Error handling middleware
│   ├── models/             # Mongoose Schemas (User, Project)
│   ├── routes/             # API Endpoints
│   └── ...
└── ...
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: Add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Developed with ❤️ by Ghushit Kumar Chutia**
