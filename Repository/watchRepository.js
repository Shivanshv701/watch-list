const watchlistModal = require('../modal/WatchlistModal');
const {v4:uuid} = require('uuid');


function Add(data1, data2){
    return new Promise((resolve, reject) => {
        watchlistModal.findOne({cityname: data2.cityname, email: data1.email}, (err, watch) => {
            if(!watch){
                let watch = new watchlistModal();
                watch._id = uuid();
                watch.email = data1.email;
                watch.cityname = data2.cityname;
                watch.temp = data2.temp;
                watch.max_temp = data2.max_temp;
                watch.min_temp = data2.min_temp;

                watch.save((err) => {
                    if (!err) {
                        resolve({ status: 200, Data: watch });
                    }
                    else{
                        throw err;
                    }
                });
            }
            else if(watch){
                resolve({ status: 409, message: 'City already exists in watchlist' });
            }

            else{
                reject(err);
            }
        });
    })
}

function Getlist(data) {
    return new Promise((resolve, reject) => {
        watchlistModal.find({email: data.email}, (err, watch) => {
            if(!watch){
                resolve({ status: 404, message: 'List is not present' });
            }
            else {
                resolve(watch);
            }
        });
    })
}


function DeleteList(data){
    return new Promise((resolve, reject) => {
        watchlistModal.findOneAndDelete({ _id: data }, (err, result) => {
            if (!result) {
                resolve({ status: 404, message: 'City is not present in watchlist' });
            }
            else {
                resolve(result);
            }
        })
    })
}


module.exports = { Add, Getlist, DeleteList }
