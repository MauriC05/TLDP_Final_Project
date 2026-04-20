**Cuisine-ator**


Cuisine-ator is a React + TypeScript web app that helps users:

- Find recipes from available ingredients

- Generate recipe instructions with AI

- Find nearby stores where ingredients are sold


**Tech Stack**

- React

- TypeScript

- Vite

- Express

**APIs**

- Spoonacular (recipe and ingredient search)

- Groq (AI recipe instructions)

- Kroger (nearby stores and ingredient availability)

- Browser Geolocation API

**Setup**

Install dependencies

- npm install

Create a .env file in the project root with:

- VITE_SPOONACULAR_KEY=your_key

- VITE_GROQ_KEY=your_key

- KROGER_CLIENT_ID=your_id

- KROGER_CLIENT_SECRET=your_secret

- PORT=3001

Run

Start backend:

- npm run server

Start frontend:

- npm run dev

Then open the local URL shown by Vite (usually http://localhost:5173).

**Notes**

Keep .env private and never commit real secrets.

Nearby ingredient search requires location permission in the browser.