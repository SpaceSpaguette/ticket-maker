# Ticket Master

This is a combination of frontend and backend.
Frontend is a website with single purpose. Its a combination of a user report system and an admin panel which shows the priority. The backend's job is to simply send the ticket description, summarize it, and add priority via OpenAI's API.

## Project Work & Task Breakdown

```text
index.html
  - Semantic layout for User Form & Admin Dashboard     : TODO
  - Ticket creation form (Title, Description, Details)  : TODO
  - Submit button with interactive loading indicators   : TODO
  - Admin tickets container & list section              : TODO
  - Priority filters & search bar controls              : TODO

css/main.css
  - Modern design tokens (color palette, typography)    : TODO
  - Clean card and form layout styling                  : TODO
  - Status & Priority badges (Urgent, High, Med, Low)   : TODO
  - Responsive layout for desktop and mobile            : TODO
  - Hover states, micro-interactions, and animations    : TODO

meta/script.js
  - Form input validation & submit event handler        : TODO
  - Backend API communication (fetch / post tickets)    : TODO
  - Dynamic ticket card rendering in admin panel        : TODO
  - Filter & sort logic (by priority, status, date)     : TODO
  - Improve motion smoothness & transition effects      : TODO

server/ (Backend & OpenAI Service)
  - Server initialization (Node/Express or Python)      : TODO
  - Environment config (.env for OPENAI_API_KEY)        : TODO
  - OpenAI prompt engineering (summary + priority tier) : TODO
  - POST /api/tickets endpoint (process with OpenAI)    : TODO
  - GET /api/tickets endpoint (retrieve tickets list)   : TODO
  - In-memory or file-based ticket persistence storage  : TODO
```
