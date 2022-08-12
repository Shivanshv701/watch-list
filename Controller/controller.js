const repository = require('../Repository/watchRepository');


function Add(req, res){
    repository.Add(req.token, req.body).then(data => {
        if (data.status === 200) {
            res.status(200).send(data.Data)
        }
        else if (data.status === 409) {
            res.status(409).send(data.message);
        }
        else {
            res.send("Error");
        }
    });
}

function GetList(req, res) {
    repository.Getlist(req.token).then(data => {
        res.send(data);
    })
}

function DeleteList(req, res) {
    repository.DeleteList(req.params._id).then(data => {
        res.send(data);
    })
}

module.exports = { Add, GetList, DeleteList }