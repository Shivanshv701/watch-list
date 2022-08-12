const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const routes = require('./routes/WatchlistRoutes');

const DB_URI= 'mongodb+srv://shivanshv701:xX6g5n4vX6MKjsQk@cluster0.wxz5nuz.mongodb.net/Watchlistdb?retryWrites=true&w=majority';
// const DB_URI = process.env.MONGODB_SERVER

app.use(cors());

mongoose.connect(DB_URI);
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log('Connected to MongoDB');
    }
});

app.use(bodyParser.json());
app.use('/api', routes);


let port = process.env.PORT || 8002;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})

module.exports = app