// package: lolis.service
// file: lolis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Loli extends jspb.Message { 
    getId(): string;
    setId(value: string): Loli;
    getFirstname(): string;
    setFirstname(value: string): Loli;
    getLastname(): string;
    setLastname(value: string): Loli;
    getAge(): number;
    setAge(value: number): Loli;
    getIslewded(): boolean;
    setIslewded(value: boolean): Loli;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Loli.AsObject;
    static toObject(includeInstance: boolean, msg: Loli): Loli.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Loli, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Loli;
    static deserializeBinaryFromReader(message: Loli, reader: jspb.BinaryReader): Loli;
}

export namespace Loli {
    export type AsObject = {
        Id: string,
        firstname: string,
        lastname: string,
        age: number,
        islewded: boolean,
    }
}

export class AddLoliRequest extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): AddLoliRequest;
    getLastname(): string;
    setLastname(value: string): AddLoliRequest;
    getAge(): number;
    setAge(value: number): AddLoliRequest;
    getIslewded(): boolean;
    setIslewded(value: boolean): AddLoliRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLoliRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddLoliRequest): AddLoliRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLoliRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLoliRequest;
    static deserializeBinaryFromReader(message: AddLoliRequest, reader: jspb.BinaryReader): AddLoliRequest;
}

export namespace AddLoliRequest {
    export type AsObject = {
        firstname: string,
        lastname: string,
        age: number,
        islewded: boolean,
    }
}

export class AddLoliResponse extends jspb.Message { 

    hasLoli(): boolean;
    clearLoli(): void;
    getLoli(): Loli | undefined;
    setLoli(value?: Loli): AddLoliResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLoliResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddLoliResponse): AddLoliResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLoliResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLoliResponse;
    static deserializeBinaryFromReader(message: AddLoliResponse, reader: jspb.BinaryReader): AddLoliResponse;
}

export namespace AddLoliResponse {
    export type AsObject = {
        loli?: Loli.AsObject,
    }
}

export class GetLoliRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetLoliRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLoliRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLoliRequest): GetLoliRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLoliRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLoliRequest;
    static deserializeBinaryFromReader(message: GetLoliRequest, reader: jspb.BinaryReader): GetLoliRequest;
}

export namespace GetLoliRequest {
    export type AsObject = {
        Id: string,
    }
}

export class GetLoliResponse extends jspb.Message { 

    hasLoli(): boolean;
    clearLoli(): void;
    getLoli(): Loli | undefined;
    setLoli(value?: Loli): GetLoliResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLoliResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLoliResponse): GetLoliResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLoliResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLoliResponse;
    static deserializeBinaryFromReader(message: GetLoliResponse, reader: jspb.BinaryReader): GetLoliResponse;
}

export namespace GetLoliResponse {
    export type AsObject = {
        loli?: Loli.AsObject,
    }
}

export class GetLolisRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLolisRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLolisRequest): GetLolisRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLolisRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLolisRequest;
    static deserializeBinaryFromReader(message: GetLolisRequest, reader: jspb.BinaryReader): GetLolisRequest;
}

export namespace GetLolisRequest {
    export type AsObject = {
    }
}

export class GetLolisResponse extends jspb.Message { 
    clearLolisList(): void;
    getLolisList(): Array<Loli>;
    setLolisList(value: Array<Loli>): GetLolisResponse;
    addLolis(value?: Loli, index?: number): Loli;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLolisResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLolisResponse): GetLolisResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLolisResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLolisResponse;
    static deserializeBinaryFromReader(message: GetLolisResponse, reader: jspb.BinaryReader): GetLolisResponse;
}

export namespace GetLolisResponse {
    export type AsObject = {
        lolisList: Array<Loli.AsObject>,
    }
}

export class UpdateLoliRequest extends jspb.Message { 

    hasLoli(): boolean;
    clearLoli(): void;
    getLoli(): Loli | undefined;
    setLoli(value?: Loli): UpdateLoliRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLoliRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLoliRequest): UpdateLoliRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLoliRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLoliRequest;
    static deserializeBinaryFromReader(message: UpdateLoliRequest, reader: jspb.BinaryReader): UpdateLoliRequest;
}

export namespace UpdateLoliRequest {
    export type AsObject = {
        loli?: Loli.AsObject,
    }
}

export class UpdateLoliResponse extends jspb.Message { 

    hasLoli(): boolean;
    clearLoli(): void;
    getLoli(): Loli | undefined;
    setLoli(value?: Loli): UpdateLoliResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLoliResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLoliResponse): UpdateLoliResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLoliResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLoliResponse;
    static deserializeBinaryFromReader(message: UpdateLoliResponse, reader: jspb.BinaryReader): UpdateLoliResponse;
}

export namespace UpdateLoliResponse {
    export type AsObject = {
        loli?: Loli.AsObject,
    }
}

export class DeleteLoliRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteLoliRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLoliRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLoliRequest): DeleteLoliRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLoliRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLoliRequest;
    static deserializeBinaryFromReader(message: DeleteLoliRequest, reader: jspb.BinaryReader): DeleteLoliRequest;
}

export namespace DeleteLoliRequest {
    export type AsObject = {
        Id: string,
    }
}

export class DeleteLoliResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): DeleteLoliResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLoliResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLoliResponse): DeleteLoliResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLoliResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLoliResponse;
    static deserializeBinaryFromReader(message: DeleteLoliResponse, reader: jspb.BinaryReader): DeleteLoliResponse;
}

export namespace DeleteLoliResponse {
    export type AsObject = {
        message: string,
    }
}
