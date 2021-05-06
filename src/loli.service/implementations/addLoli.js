"use strict";
exports.__esModule = true;
exports.addLoli = void 0;
var lolis_pb_1 = require("../../proto/lolis_pb");
var addLoli = function (loliRequest) {
    var loliResponse = new lolis_pb_1.AddLoliResponse();
    var loli = new lolis_pb_1.Loli();
    loli.setId("1");
    loli.setFirstname(loliRequest.getFirstname());
    loli.setLastname(loliRequest.getLastname());
    loli.setAge(loliRequest.getAge());
    loli.setIslewded(loliRequest.getIslewded());
    loliResponse.setLoli(loli);
    return loliResponse;
};
exports.addLoli = addLoli;
