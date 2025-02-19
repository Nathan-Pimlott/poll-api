import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
routes(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
