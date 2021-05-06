// package: lolis.service
// file: lolis.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as lolis_pb from "./lolis_pb";

interface ILolisService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addLoli: ILolisService_IaddLoli;
    getLoli: ILolisService_IgetLoli;
    getLolis: ILolisService_IgetLolis;
    updateLoli: ILolisService_IupdateLoli;
    deleteLoli: ILolisService_IdeleteLoli;
}

interface ILolisService_IaddLoli extends grpc.MethodDefinition<lolis_pb.AddLoliRequest, lolis_pb.AddLoliResponse> {
    path: "/lolis.service.Lolis/addLoli";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lolis_pb.AddLoliRequest>;
    requestDeserialize: grpc.deserialize<lolis_pb.AddLoliRequest>;
    responseSerialize: grpc.serialize<lolis_pb.AddLoliResponse>;
    responseDeserialize: grpc.deserialize<lolis_pb.AddLoliResponse>;
}
interface ILolisService_IgetLoli extends grpc.MethodDefinition<lolis_pb.GetLoliRequest, lolis_pb.GetLoliResponse> {
    path: "/lolis.service.Lolis/getLoli";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lolis_pb.GetLoliRequest>;
    requestDeserialize: grpc.deserialize<lolis_pb.GetLoliRequest>;
    responseSerialize: grpc.serialize<lolis_pb.GetLoliResponse>;
    responseDeserialize: grpc.deserialize<lolis_pb.GetLoliResponse>;
}
interface ILolisService_IgetLolis extends grpc.MethodDefinition<lolis_pb.GetLolisRequest, lolis_pb.GetLolisResponse> {
    path: "/lolis.service.Lolis/getLolis";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lolis_pb.GetLolisRequest>;
    requestDeserialize: grpc.deserialize<lolis_pb.GetLolisRequest>;
    responseSerialize: grpc.serialize<lolis_pb.GetLolisResponse>;
    responseDeserialize: grpc.deserialize<lolis_pb.GetLolisResponse>;
}
interface ILolisService_IupdateLoli extends grpc.MethodDefinition<lolis_pb.UpdateLoliRequest, lolis_pb.UpdateLoliResponse> {
    path: "/lolis.service.Lolis/updateLoli";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lolis_pb.UpdateLoliRequest>;
    requestDeserialize: grpc.deserialize<lolis_pb.UpdateLoliRequest>;
    responseSerialize: grpc.serialize<lolis_pb.UpdateLoliResponse>;
    responseDeserialize: grpc.deserialize<lolis_pb.UpdateLoliResponse>;
}
interface ILolisService_IdeleteLoli extends grpc.MethodDefinition<lolis_pb.DeleteLoliRequest, lolis_pb.DeleteLoliResponse> {
    path: "/lolis.service.Lolis/deleteLoli";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lolis_pb.DeleteLoliRequest>;
    requestDeserialize: grpc.deserialize<lolis_pb.DeleteLoliRequest>;
    responseSerialize: grpc.serialize<lolis_pb.DeleteLoliResponse>;
    responseDeserialize: grpc.deserialize<lolis_pb.DeleteLoliResponse>;
}

export const LolisService: ILolisService;

export interface ILolisServer {
    addLoli: grpc.handleUnaryCall<lolis_pb.AddLoliRequest, lolis_pb.AddLoliResponse>;
    getLoli: grpc.handleUnaryCall<lolis_pb.GetLoliRequest, lolis_pb.GetLoliResponse>;
    getLolis: grpc.handleUnaryCall<lolis_pb.GetLolisRequest, lolis_pb.GetLolisResponse>;
    updateLoli: grpc.handleUnaryCall<lolis_pb.UpdateLoliRequest, lolis_pb.UpdateLoliResponse>;
    deleteLoli: grpc.handleUnaryCall<lolis_pb.DeleteLoliRequest, lolis_pb.DeleteLoliResponse>;
}

export interface ILolisClient {
    addLoli(request: lolis_pb.AddLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.AddLoliResponse) => void): grpc.ClientUnaryCall;
    addLoli(request: lolis_pb.AddLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.AddLoliResponse) => void): grpc.ClientUnaryCall;
    addLoli(request: lolis_pb.AddLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.AddLoliResponse) => void): grpc.ClientUnaryCall;
    getLoli(request: lolis_pb.GetLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLoliResponse) => void): grpc.ClientUnaryCall;
    getLoli(request: lolis_pb.GetLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLoliResponse) => void): grpc.ClientUnaryCall;
    getLoli(request: lolis_pb.GetLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLoliResponse) => void): grpc.ClientUnaryCall;
    getLolis(request: lolis_pb.GetLolisRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLolisResponse) => void): grpc.ClientUnaryCall;
    getLolis(request: lolis_pb.GetLolisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLolisResponse) => void): grpc.ClientUnaryCall;
    getLolis(request: lolis_pb.GetLolisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLolisResponse) => void): grpc.ClientUnaryCall;
    updateLoli(request: lolis_pb.UpdateLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.UpdateLoliResponse) => void): grpc.ClientUnaryCall;
    updateLoli(request: lolis_pb.UpdateLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.UpdateLoliResponse) => void): grpc.ClientUnaryCall;
    updateLoli(request: lolis_pb.UpdateLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.UpdateLoliResponse) => void): grpc.ClientUnaryCall;
    deleteLoli(request: lolis_pb.DeleteLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.DeleteLoliResponse) => void): grpc.ClientUnaryCall;
    deleteLoli(request: lolis_pb.DeleteLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.DeleteLoliResponse) => void): grpc.ClientUnaryCall;
    deleteLoli(request: lolis_pb.DeleteLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.DeleteLoliResponse) => void): grpc.ClientUnaryCall;
}

export class LolisClient extends grpc.Client implements ILolisClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addLoli(request: lolis_pb.AddLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.AddLoliResponse) => void): grpc.ClientUnaryCall;
    public addLoli(request: lolis_pb.AddLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.AddLoliResponse) => void): grpc.ClientUnaryCall;
    public addLoli(request: lolis_pb.AddLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.AddLoliResponse) => void): grpc.ClientUnaryCall;
    public getLoli(request: lolis_pb.GetLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLoliResponse) => void): grpc.ClientUnaryCall;
    public getLoli(request: lolis_pb.GetLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLoliResponse) => void): grpc.ClientUnaryCall;
    public getLoli(request: lolis_pb.GetLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLoliResponse) => void): grpc.ClientUnaryCall;
    public getLolis(request: lolis_pb.GetLolisRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLolisResponse) => void): grpc.ClientUnaryCall;
    public getLolis(request: lolis_pb.GetLolisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLolisResponse) => void): grpc.ClientUnaryCall;
    public getLolis(request: lolis_pb.GetLolisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.GetLolisResponse) => void): grpc.ClientUnaryCall;
    public updateLoli(request: lolis_pb.UpdateLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.UpdateLoliResponse) => void): grpc.ClientUnaryCall;
    public updateLoli(request: lolis_pb.UpdateLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.UpdateLoliResponse) => void): grpc.ClientUnaryCall;
    public updateLoli(request: lolis_pb.UpdateLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.UpdateLoliResponse) => void): grpc.ClientUnaryCall;
    public deleteLoli(request: lolis_pb.DeleteLoliRequest, callback: (error: grpc.ServiceError | null, response: lolis_pb.DeleteLoliResponse) => void): grpc.ClientUnaryCall;
    public deleteLoli(request: lolis_pb.DeleteLoliRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lolis_pb.DeleteLoliResponse) => void): grpc.ClientUnaryCall;
    public deleteLoli(request: lolis_pb.DeleteLoliRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lolis_pb.DeleteLoliResponse) => void): grpc.ClientUnaryCall;
}
