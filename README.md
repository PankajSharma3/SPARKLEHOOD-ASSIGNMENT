# AI Safety Incident Log API (Node.js + MongoDB + ES Modules)

A RESTful API service to log and manage hypothetical AI safety incidents using ES Modules.

## Technology Stack
- Node.js (with ES Modules)
- Express.js
- MongoDB
- Mongoose (ODM)

## Prerequisites
- Node.js (v14+ recommended)
- MongoDB (local or cloud instance)
- npm or yarn

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-safety-incidents.git
   cd ai-safety-incidents


Install dependencies:

bash
npm install
Create a .env file:

bash
cp .env.example .env
Start MongoDB service (if using local MongoDB)

Run the application:

bash
npm start
# or for development with nodemon:
npm run dev
The API will be available at http://localhost:3000.

API Endpoints
1. GET /incidents
Retrieve all incidents.

Example:

bash
curl http://localhost:3000/incidents
2. POST /incidents
Create a new incident.

Example:

bash
curl -X POST -H "Content-Type: application/json" -d '{
    "title": "Facial Recognition Error",
    "description": "System misidentified individuals in critical situation.",
    "severity": "High"
}' http://localhost:3000/incidents
3. GET /incidents/{id}
Retrieve a specific incident by ID.

Example:

bash
curl http://localhost:3000/incidents/5f8d04b3b547644a7c8f3b2a
4. DELETE /incidents/{id}
Delete an incident by ID.

Example:

bash
curl -X DELETE http://localhost:3000/incidents/5f8d04b3b547644a7c8f3b2a
Key Differences from CommonJS Version
ES Modules: All files use import/export syntax instead of require/module.exports

File Extensions: Import statements must include file extensions (.js)

package.json: Contains "type": "module" to enable ES Modules

dotenv: Imported using import 'dotenv' instead of require('dotenv').config()


## Key Features

1. **ES Modules**: The entire application uses modern ES Module syntax
2. **Automatic Database Seeding**: Sample incidents are added when the database is empty
3. **Error Handling**: Comprehensive error handling for all endpoints
4. **Validation**: Built-in validation for required fields and enum values
5. **Environment Configuration**: Uses `.env` for sensitive configuration

This implementation provides all the required functionality while using modern JavaScript module syntax. The code is organized following MVC architecture and includes proper error handling and validation.