import express from 'express';
import cors from 'cors';
import path from 'path';
import vars from './config/vars';
import AllRoutes  from './app/index';

const app = express();

// settings
app.set('port', vars.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(AllRoutes);

export default app;