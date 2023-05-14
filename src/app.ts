import express from 'express';
import routes from './routes/routes';

const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(express.json());

// Mount the routes
app.use('/api', routes);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
