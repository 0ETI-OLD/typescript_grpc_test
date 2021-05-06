"use strict";
exports.__esModule = true;
var grpc_1 = require("grpc");
var lolis_grpc_pb_1 = require("../proto/lolis_grpc_pb");
var lolis_pb_1 = require("../proto/lolis_pb");
var lolisClient = new lolis_grpc_pb_1.LolisClient("localhost:40000", grpc_1.credentials.createInsecure());
var addLoliRequest = new lolis_pb_1.AddLoliRequest();
addLoliRequest.setFirstname("Flandre");
addLoliRequest.setLastname("Scarlet");
addLoliRequest.setAge(21);
addLoliRequest.setIslewded(false);
lolisClient.addLoli(addLoliRequest, function (err, res) {
    var loli = res.getLoli();
    console.log(loli.getFirstname() + " " + loli.getLastname() + " (" + loli.getAge() + ") Lewded: " + loli.getIslewded());
});
