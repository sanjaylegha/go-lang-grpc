/**
 * @fileoverview gRPC-Web generated client stub for tasksApi
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.6.1
// source: tasks_api.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.tasksApi = require('./tasks_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tasksApi.TaskServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tasksApi.TaskServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasksApi.AddTaskReq,
 *   !proto.tasksApi.AddTaskResp>}
 */
const methodDescriptor_TaskService_AddTask = new grpc.web.MethodDescriptor(
  '/tasksApi.TaskService/AddTask',
  grpc.web.MethodType.UNARY,
  proto.tasksApi.AddTaskReq,
  proto.tasksApi.AddTaskResp,
  /**
   * @param {!proto.tasksApi.AddTaskReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasksApi.AddTaskResp.deserializeBinary
);


/**
 * @param {!proto.tasksApi.AddTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasksApi.AddTaskResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasksApi.AddTaskResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasksApi.TaskServiceClient.prototype.addTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasksApi.TaskService/AddTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_AddTask,
      callback);
};


/**
 * @param {!proto.tasksApi.AddTaskReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasksApi.AddTaskResp>}
 *     Promise that resolves to the response
 */
proto.tasksApi.TaskServicePromiseClient.prototype.addTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasksApi.TaskService/AddTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_AddTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasksApi.UpdateTaskReq,
 *   !proto.tasksApi.UpdateTaskResp>}
 */
const methodDescriptor_TaskService_UpdateTask = new grpc.web.MethodDescriptor(
  '/tasksApi.TaskService/UpdateTask',
  grpc.web.MethodType.UNARY,
  proto.tasksApi.UpdateTaskReq,
  proto.tasksApi.UpdateTaskResp,
  /**
   * @param {!proto.tasksApi.UpdateTaskReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasksApi.UpdateTaskResp.deserializeBinary
);


/**
 * @param {!proto.tasksApi.UpdateTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasksApi.UpdateTaskResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasksApi.UpdateTaskResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasksApi.TaskServiceClient.prototype.updateTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasksApi.TaskService/UpdateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_UpdateTask,
      callback);
};


/**
 * @param {!proto.tasksApi.UpdateTaskReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasksApi.UpdateTaskResp>}
 *     Promise that resolves to the response
 */
proto.tasksApi.TaskServicePromiseClient.prototype.updateTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasksApi.TaskService/UpdateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_UpdateTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasksApi.DeleteTaskReq,
 *   !proto.tasksApi.DeleteTaskResp>}
 */
const methodDescriptor_TaskService_DeleteTask = new grpc.web.MethodDescriptor(
  '/tasksApi.TaskService/DeleteTask',
  grpc.web.MethodType.UNARY,
  proto.tasksApi.DeleteTaskReq,
  proto.tasksApi.DeleteTaskResp,
  /**
   * @param {!proto.tasksApi.DeleteTaskReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasksApi.DeleteTaskResp.deserializeBinary
);


/**
 * @param {!proto.tasksApi.DeleteTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasksApi.DeleteTaskResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasksApi.DeleteTaskResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasksApi.TaskServiceClient.prototype.deleteTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasksApi.TaskService/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_DeleteTask,
      callback);
};


/**
 * @param {!proto.tasksApi.DeleteTaskReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasksApi.DeleteTaskResp>}
 *     Promise that resolves to the response
 */
proto.tasksApi.TaskServicePromiseClient.prototype.deleteTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasksApi.TaskService/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_DeleteTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasksApi.ListTasksReq,
 *   !proto.tasksApi.ListTasksResp>}
 */
const methodDescriptor_TaskService_ListTasks = new grpc.web.MethodDescriptor(
  '/tasksApi.TaskService/ListTasks',
  grpc.web.MethodType.UNARY,
  proto.tasksApi.ListTasksReq,
  proto.tasksApi.ListTasksResp,
  /**
   * @param {!proto.tasksApi.ListTasksReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasksApi.ListTasksResp.deserializeBinary
);


/**
 * @param {!proto.tasksApi.ListTasksReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasksApi.ListTasksResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasksApi.ListTasksResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasksApi.TaskServiceClient.prototype.listTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasksApi.TaskService/ListTasks',
      request,
      metadata || {},
      methodDescriptor_TaskService_ListTasks,
      callback);
};


/**
 * @param {!proto.tasksApi.ListTasksReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasksApi.ListTasksResp>}
 *     Promise that resolves to the response
 */
proto.tasksApi.TaskServicePromiseClient.prototype.listTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasksApi.TaskService/ListTasks',
      request,
      metadata || {},
      methodDescriptor_TaskService_ListTasks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasksApi.PingReq,
 *   !proto.tasksApi.PingResp>}
 */
const methodDescriptor_TaskService_Ping = new grpc.web.MethodDescriptor(
  '/tasksApi.TaskService/Ping',
  grpc.web.MethodType.UNARY,
  proto.tasksApi.PingReq,
  proto.tasksApi.PingResp,
  /**
   * @param {!proto.tasksApi.PingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasksApi.PingResp.deserializeBinary
);


/**
 * @param {!proto.tasksApi.PingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasksApi.PingResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasksApi.PingResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasksApi.TaskServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasksApi.TaskService/Ping',
      request,
      metadata || {},
      methodDescriptor_TaskService_Ping,
      callback);
};


/**
 * @param {!proto.tasksApi.PingReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasksApi.PingResp>}
 *     Promise that resolves to the response
 */
proto.tasksApi.TaskServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasksApi.TaskService/Ping',
      request,
      metadata || {},
      methodDescriptor_TaskService_Ping);
};


module.exports = proto.tasksApi;

