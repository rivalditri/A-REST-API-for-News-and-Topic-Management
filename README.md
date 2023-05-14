# News and Topic API

This is a RESTful API for managing news articles and topics. It provides CRUD endpoints for news and topic entities, with the ability to associate multiple topics with a news article. Each news article can have a status of 'draft', 'deleted', or 'published', and the GET endpoint allows for filtering by status and topic.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Sequelize (ORM)
- PostgreSQL (or your preferred database)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL database configured (update the connection details in `config/config.json`)

### Installation

1. Clone the repository:

```bash```
git clone https://github.com/rivalditri/A-REST-API-for-News-and-Topic-Management.git
cd news-topic-api

2. Install the dependencies:
```bash```
npm install

3. Set up the database:
Create a new mysql / PostgreSQL database
Update the database connection details in config/config.json

4. Run the migrations to create the necessary tables:
```bash```
npx sequelize-cli db:migrate

### Usage
1. Start the server:
```bash```
npm start

2. The API will be accessible at http://localhost:3000
### API Endpoints
# GET /news: Get all news articles (supports filtering by status and topic)
# GET /news/:id: Get a specific news article by ID
# POST /news: Create a new news article
# PUT /news/:id: Update a news article by ID
# DELETE /news/:id: Delete a news article by ID
# GET /topics: Get all topics
# GET /topics/:id: Get a specific topic by ID
# POST /topics: Create a new topic
# PUT /topics/:id: Update a topic by ID
# DELETE /topics/:id: Delete a topic by ID
For detailed request and response examples, please refer to the API documentation.
