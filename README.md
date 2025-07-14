# Name Greeting React App

A simple React application that greets users by name. This project demonstrates basic React concepts including state management with hooks and user input handling.

## Features

- Text input field for entering your name
- Dynamic greeting that displays "Hello [name]!" when a name is entered
- Clean and modern UI with smooth animations
- Built with React 19 and Vite for optimal performance

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Technology Stack

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

## Project Structure

```
src/
  ├── App.jsx          # Main application component
  ├── App.css          # Application styles
  ├── main.jsx         # Entry point
  └── index.css        # Global styles
```

## How It Works

1. The app uses React's `useState` hook to manage the name input
2. As you type in the input field, the state updates in real-time
3. When a name is entered, a greeting message appears with a smooth animation
4. The greeting automatically updates as you modify the name
