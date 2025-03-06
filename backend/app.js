import bodyParser from 'body-parser';
import express from 'express';
import db from './config/db.config.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import jobRoutes from './routes/job.routes.js';
import profileRoutes from './routes/profile.routes.js';


const env = dotenv.config().parsed;
const app = express();
const port = env.PORT || 3000;

// enable cors-policy for api-being used by unknown browsers from another ports
app.use(cookieParser());

const allowedOrigins = [
    'http://localhost:5173',
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl requests, etc)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Enable CORS with credentials
  };
    app.use(cors(corsOptions));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
db.connect();

app.use("/api/user", userRoutes);

app.use("/job",jobRoutes);

app.use("/profile",profileRoutes);

app.listen(port,()=>{
    console.log("server is running at localhost " + port);
});