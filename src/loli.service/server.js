"use strict";
exports.__esModule = true;
var grpc_1 = require("grpc");
var lolis_grpc_pb_1 = require("../proto/lolis_grpc_pb");
var addLoli_1 = require("./implementations/addLoli");
var LolisServer = /** @class */ (function () {
    function LolisServer() {
        this.addLoli = function (call, callback) {
            callback(null, addLoli_1.addLoli(call.request));
        };
        this.getLoli = function (call, callback) { };
        this.getLolis = function (call, callback) { };
        this.updateLoli = function (call, callback) { };
        this.deleteLoli = function (call, callback) { };
    }
    return LolisServer;
}());
var server = new grpc_1.Server();
// @ts-ignore
server.addService(lolis_grpc_pb_1.LolisService, new LolisServer());
server.bindAsync("localhost:40000", grpc_1.ServerCredentials.createInsecure(), function () {
    console.log("SERVER STARTED");
    server.start();
});
