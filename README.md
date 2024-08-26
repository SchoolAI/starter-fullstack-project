![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
# AI Q&A App - Fullstack Coding Challenge

## Overview

This project is a simple AI-powered Q&A web application built using the T3 stack (TypeScript, Tailwind CSS, tRPC). Users can ask questions and receive AI-generated responses.

## Features

- Ask questions and receive AI-generated answers
- View recent Q&A history
- Simple and responsive UI

## Tech Stack

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or pnpm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ai-qa-app.git
   cd ai-qa-app
   ```

2. Install dependencies:
   ```
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your AI service API key to `.env.local`

4. Run the development server:
   ```
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/components`: React components
- `src/pages`: Next.js pages
- `src/server`: tRPC API routes and server-side logic
- `src/styles`: Global styles and Tailwind CSS configuration
- `src/utils`: Utility functions and API helpers

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint
- `npm run test`: Run tests (if implemented)

## Notes for Candidates

- This project is designed to be completed in 2-4 hours.
- Focus on implementing the core functionality first.
- Pay attention to code organization, type safety, and basic error handling.
- If time allows, consider adding extra features or improving the UI.

## License

This project is open source and available under the [MIT License](LICENSE).
