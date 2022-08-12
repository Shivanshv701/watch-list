const mongoose = require('mongoose');
const watchlistModal = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    cityname: {
        type: String,
        require: true
    },
    temp:{
        type: Number,
        require: true
    },
    max_temp:{
        type: Number,
        require: true
    },
    min_temp: {
        type: Number,
        require: true
    }

});

module.exports = mongoose.model('watchlistModal', watchlistModal, 'Lists');