const mongoose = require('mongoose');
require('dotenv').config();
// MongoDB URI (update with your database name)
// const mongoURL = 'mongodb://localhost/27017/mydatabase';
const mongoURL=process.env.MONGODB_URL

// Connect to MongoDB
mongoose.connect(mongoURL)
// )
// Optional: Handle connection events
const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});
db.on('connected', () => {
    console.log('Mongoose is connected to the database.');
});
db.on('disconnected', () => {
    console.log('Mongoose connection is disconnected.');
});


module.exports = db;
