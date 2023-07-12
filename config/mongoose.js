const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb+srv://ss8680919:r9XAIlEJ8lv5NUAR@cluster0.4xwmqfb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});