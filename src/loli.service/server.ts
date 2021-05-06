import { Server, ServerCredentials, handleUnaryCall } from "grpc";
import { ILolisServer, LolisService } from "../proto/lolis_grpc_pb";
import {
  AddLoliRequest,
  AddLoliResponse,
  GetLoliRequest,
  GetLoliResponse,
  GetLolisRequest,
  GetLolisResponse,
  UpdateLoliRequest,
  UpdateLoliResponse,
  DeleteLoliRequest,
  DeleteLoliResponse,
} from "../proto/lolis_pb";
import { addLoli } from "./implementations/addLoli";

class LolisServer implements ILolisServer {
  addLoli: handleUnaryCall<AddLoliRequest, AddLoliResponse> = (
    call,
    callback
  ) => {
    callback(null, addLoli(call.request));
  };
  getLoli: handleUnaryCall<GetLoliRequest, GetLoliResponse> = (
    call,
    callback
  ) => {};
  getLolis: handleUnaryCall<GetLolisRequest, GetLolisResponse> = (
    call,
    callback
  ) => {};
  updateLoli: handleUnaryCall<UpdateLoliRequest, UpdateLoliResponse> = (
    call,
    callback
  ) => {};
  deleteLoli: handleUnaryCall<DeleteLoliRequest, DeleteLoliResponse> = (
    call,
    callback
  ) => {};
}

const server = new Server();
// @ts-ignore
server.addService(LolisService, new LolisServer());
server.bindAsync("localhost:40000", ServerCredentials.createInsecure(), () => {
  console.log("SERVER STARTED");
  server.start();
});
