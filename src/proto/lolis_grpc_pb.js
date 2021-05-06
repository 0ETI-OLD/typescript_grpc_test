// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var lolis_pb = require('./lolis_pb.js');

function serialize_lolis_service_AddLoliRequest(arg) {
  if (!(arg instanceof lolis_pb.AddLoliRequest)) {
    throw new Error('Expected argument of type lolis.service.AddLoliRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_AddLoliRequest(buffer_arg) {
  return lolis_pb.AddLoliRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_AddLoliResponse(arg) {
  if (!(arg instanceof lolis_pb.AddLoliResponse)) {
    throw new Error('Expected argument of type lolis.service.AddLoliResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_AddLoliResponse(buffer_arg) {
  return lolis_pb.AddLoliResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_DeleteLoliRequest(arg) {
  if (!(arg instanceof lolis_pb.DeleteLoliRequest)) {
    throw new Error('Expected argument of type lolis.service.DeleteLoliRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_DeleteLoliRequest(buffer_arg) {
  return lolis_pb.DeleteLoliRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_DeleteLoliResponse(arg) {
  if (!(arg instanceof lolis_pb.DeleteLoliResponse)) {
    throw new Error('Expected argument of type lolis.service.DeleteLoliResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_DeleteLoliResponse(buffer_arg) {
  return lolis_pb.DeleteLoliResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_GetLoliRequest(arg) {
  if (!(arg instanceof lolis_pb.GetLoliRequest)) {
    throw new Error('Expected argument of type lolis.service.GetLoliRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_GetLoliRequest(buffer_arg) {
  return lolis_pb.GetLoliRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_GetLoliResponse(arg) {
  if (!(arg instanceof lolis_pb.GetLoliResponse)) {
    throw new Error('Expected argument of type lolis.service.GetLoliResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_GetLoliResponse(buffer_arg) {
  return lolis_pb.GetLoliResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_GetLolisRequest(arg) {
  if (!(arg instanceof lolis_pb.GetLolisRequest)) {
    throw new Error('Expected argument of type lolis.service.GetLolisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_GetLolisRequest(buffer_arg) {
  return lolis_pb.GetLolisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_GetLolisResponse(arg) {
  if (!(arg instanceof lolis_pb.GetLolisResponse)) {
    throw new Error('Expected argument of type lolis.service.GetLolisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_GetLolisResponse(buffer_arg) {
  return lolis_pb.GetLolisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_UpdateLoliRequest(arg) {
  if (!(arg instanceof lolis_pb.UpdateLoliRequest)) {
    throw new Error('Expected argument of type lolis.service.UpdateLoliRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_UpdateLoliRequest(buffer_arg) {
  return lolis_pb.UpdateLoliRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lolis_service_UpdateLoliResponse(arg) {
  if (!(arg instanceof lolis_pb.UpdateLoliResponse)) {
    throw new Error('Expected argument of type lolis.service.UpdateLoliResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lolis_service_UpdateLoliResponse(buffer_arg) {
  return lolis_pb.UpdateLoliResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LolisService = exports.LolisService = {
  addLoli: {
    path: '/lolis.service.Lolis/addLoli',
    requestStream: false,
    responseStream: false,
    requestType: lolis_pb.AddLoliRequest,
    responseType: lolis_pb.AddLoliResponse,
    requestSerialize: serialize_lolis_service_AddLoliRequest,
    requestDeserialize: deserialize_lolis_service_AddLoliRequest,
    responseSerialize: serialize_lolis_service_AddLoliResponse,
    responseDeserialize: deserialize_lolis_service_AddLoliResponse,
  },
  getLoli: {
    path: '/lolis.service.Lolis/getLoli',
    requestStream: false,
    responseStream: false,
    requestType: lolis_pb.GetLoliRequest,
    responseType: lolis_pb.GetLoliResponse,
    requestSerialize: serialize_lolis_service_GetLoliRequest,
    requestDeserialize: deserialize_lolis_service_GetLoliRequest,
    responseSerialize: serialize_lolis_service_GetLoliResponse,
    responseDeserialize: deserialize_lolis_service_GetLoliResponse,
  },
  getLolis: {
    path: '/lolis.service.Lolis/getLolis',
    requestStream: false,
    responseStream: false,
    requestType: lolis_pb.GetLolisRequest,
    responseType: lolis_pb.GetLolisResponse,
    requestSerialize: serialize_lolis_service_GetLolisRequest,
    requestDeserialize: deserialize_lolis_service_GetLolisRequest,
    responseSerialize: serialize_lolis_service_GetLolisResponse,
    responseDeserialize: deserialize_lolis_service_GetLolisResponse,
  },
  updateLoli: {
    path: '/lolis.service.Lolis/updateLoli',
    requestStream: false,
    responseStream: false,
    requestType: lolis_pb.UpdateLoliRequest,
    responseType: lolis_pb.UpdateLoliResponse,
    requestSerialize: serialize_lolis_service_UpdateLoliRequest,
    requestDeserialize: deserialize_lolis_service_UpdateLoliRequest,
    responseSerialize: serialize_lolis_service_UpdateLoliResponse,
    responseDeserialize: deserialize_lolis_service_UpdateLoliResponse,
  },
  deleteLoli: {
    path: '/lolis.service.Lolis/deleteLoli',
    requestStream: false,
    responseStream: false,
    requestType: lolis_pb.DeleteLoliRequest,
    responseType: lolis_pb.DeleteLoliResponse,
    requestSerialize: serialize_lolis_service_DeleteLoliRequest,
    requestDeserialize: deserialize_lolis_service_DeleteLoliRequest,
    responseSerialize: serialize_lolis_service_DeleteLoliResponse,
    responseDeserialize: deserialize_lolis_service_DeleteLoliResponse,
  },
};

exports.LolisClient = grpc.makeGenericClientConstructor(LolisService);
