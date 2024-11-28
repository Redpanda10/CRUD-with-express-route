const mongoose = require('mongoose');

// MongoDB URI (update with your database name)
const mongoURI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true 
})
// )
// Optional: Handle connection events
const db = mongoose.connection;


db.on('connected', () => {
    console.log('Mongoose is connected to the database.');
});
db.on('disconnected', () => {
    console.log('Mongoose connection is disconnected.');
});

db.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});
module.exports = db;
