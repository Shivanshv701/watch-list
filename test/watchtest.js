const chai = require('chai');
const chaiHTTP = require('chai-http');
const express = require('express');
const server = require('../server');
const assert = chai.assert;
const request = chai.request;
const { expect } = require("chai");

chai.use(chaiHTTP);

describe("Test about server file", () => {
    describe("Tests return type", () => {
        it("Tests return type of app created", () => {
            let result = express();
            assert.typeOf(result, 'function');
        }) 
    })
})  

const city = {
    _id: "2b8e2efc-84e8-4788-8c8a-49a239eb3ddd",
    cityname: "Kanpur",
    email: "shivanshv701@gmail.com"
};
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhbnNodjcwMUBnbWFpbC5jb20iLCJpYXQiOjE2NTk1MDQwMzd9.u1qWjE99yuWrTowgKrl5aa8l05UHJPzwRxoR8bhjaPc"

describe("Add to watchlist", () => {

    it("Requires user to be logged in to add a city to watchlist", async () => {
        const res = await chai.request('localhost:8002').post("/api/add").set("Authorization", token).send(city);
        expect(res.status).to.equal(409);
      });
})

describe(" Get watchlist", () => {

    it("Gets all elements of the watchlist", async () => {
        const res = await chai.request('localhost:8002').post("/api/get").set("Authorization", token).send(city);
        expect(res.status).to.equal(404);
    });
});

describe("Delete element from watchist", () => {
    it("Deletes one element from the watchlist", async () => {
        const res = await (await chai.request('localhost:8002').post(`/api/delete${city._id}`).set("Authorization", token));
        expect(res.status).to.equal(404);
    })
});