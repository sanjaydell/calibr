require('dotenv').config(); 

const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true, // Use the new server discovery and monitoring engine
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
