const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config();

const connectionString = process.env.MONGODB_URL ;
const PORT = process.env.PORT || 3030;

function dbConnect() {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => {
          console.log('Connected to MongoDB Atlas');
        })
        .catch(err => {
          console.error('Error connecting to MongoDB Atlas:', err);
        });
}

dbConnect();

const app = express();

// Set up view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

// Using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes
const applyRoutes = require('./routes/applyRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/apply', applyRoutes)
app.use('/api/service', serviceRoutes)



app.listen(PORT,
    console.log(`Server is running on http://localhost:${PORT}`)
);