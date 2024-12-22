# AI Powered Blog Website

A full-stack AI-powered blog website built using **Express.js**, **MongoDB**, **React**, and **Next.js**. This project provides a simple blog API that allows users to create, manage, and view blog posts, as well as generate AI summaries for posts.
[Demo](https://tarsh-arogo-ai-assignment.vercel.app/posts)

---

## Features

### Backend:
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **AI Summary**: Generate summaries for blog posts using the Gemini API.
- **MongoDB**: Stores blog posts in a MongoDB database (local or cloud).
- **Environment Variables**: Configured with `dotenv`.

### Frontend:
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **AI Summary**: Generate summaries for blog posts.
- **React**: For building dynamic user interfaces.
- **Next.js**: For optimized server-side rendering and routing.
- **Tailwind CSS**: A utility-first CSS framework for building responsive layouts.

---

## Technologies Used

### Backend:
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Gemini API** (For generating AI summaries)
- **dotenv** (For managing environment variables)

### Frontend:
- **React** (Frontend framework)
- **Next.js** (Framework for React)
- **Tailwind CSS** (Utility-first CSS framework)

---

## Setup Instructions

### 1. Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (>= 14.x)
- **MongoDB** (either local or cloud, e.g., MongoDB Atlas)
- **Git** (For cloning the repository)

### 2. Backend Setup

#### Clone the repository and install dependencies:
```bash
git clone https://github.com/T1A0R3S2H/Tarsh-ArogoAI-Assignment.git
cd arogo-ai/backend
npm install
```

#### Configure Environment Variables:

Create a `.env` file inside the `backend` directory and add the following:

```env
GEMINI_API_KEY=Your_Gemini_API_Key
MONGO_URI=mongodb://localhost:27017/ai-blog
```

- **GEMINI_API_KEY**: Your Gemini API key (for AI summaries).
- **MONGODB_URI**: Your MongoDB connection string.
- 

#### Build the project:
```bash
npm run build
```

#### Start the application:
```bash
npm start
```

#### For development:
```bash
npm run dev
```

---

### 3. Frontend Setup

#### Clone the repository and install dependencies:
```bash
git clone https://github.com/T1A0R3S2H/Tarsh-ArogoAI-Assignment.git
npm install
```

#### Configure Environment Variables:

- **NEXT_PUBLIC_API_URL**: The backend API URL (if running locally, use `http://localhost:5000`).

#### Start the frontend application:
```bash
npm start
```

#### For development:
```bash
npm run dev
```

---

## Endpoints

### Backend Endpoints

#### Posts Management (`/v1/posts`)

| Method | Endpoint          | Description               |
|--------|-------------------|---------------------------|
| `GET`  | `/v1/posts`       | Get all blog posts        |
| `POST` | `/v1/posts`       | Create a new blog post    |
| `PUT`  | `/v1/posts/:id`   | Update an existing post   |
| `DELETE` | `/v1/posts/:id` | Delete a blog post        |
| `GET`  | `/v1/posts/:id`   | Get a single blog post    |

---

## Demo

You can view a live demo of the frontend and interact with the API once both the backend and frontend are up and running on your local machine.
and also here: https://tarsh-arogo-ai-assignment.vercel.app/posts
