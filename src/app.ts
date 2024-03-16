require('aws-sdk/lib/maintenance_mode_message').suppress = true;
require('dotenv').config();
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import RootRoute from './routes/RootRoute';
import AWSRoute from './routes/AWSRoute';
import ExpressService from './services/ExpressService';
import OpenAIRoute from './routes/OpenAIRoute';
import MongoDBRoute from './routes/MongoDBRoute';

// Get the express application instance.
const app = ExpressService.app;

// App middlewares.
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(json());
app.use(urlencoded({ extended: true }));

// App other endpoints.
app.use('/', RootRoute);
app.use('/api/aws', AWSRoute);
app.use('/api/openai', OpenAIRoute);
app.use('/api/mongodb', MongoDBRoute);

// Separate app and server.
export default app;
