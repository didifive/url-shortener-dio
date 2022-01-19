import express from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

require('dotenv').config();

const api = express();
const PORT = process.env.PORT || 5000;

api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.get('/', urlController.list);

api.listen(PORT, () => console.log(`⚡️[server]: Server is running at ${process.env.URL}:${PORT}`));
