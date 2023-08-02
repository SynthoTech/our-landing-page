const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.MONGODB_URL;
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

app.use(express.json());
app.use(cors());

// Routes
const applyRoutes = require('./routes/applyRoutes');
app.use('/api/apply', applyRoutes)



app.listen(PORT,
    console.log(`Server is running on http://localhost:${PORT}`)
);