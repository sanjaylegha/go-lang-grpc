package main

import (
	"context"
	"log"

	"net"

	"github.com/sanjay/tasks-backend/proto-gen/tasksApi"
	"google.golang.org/grpc"
)

// type TaskServiceServer interface {
// 	AddTask(context.Context, *AddTaskReq) (*AddTaskResp, error)
// 	UpdateTask(context.Context, *UpdateTaskReq) (*UpdateTaskResp, error)
// 	DeleteTask(context.Context, *DeleteTaskReq) (*DeleteTaskResp, error)
// 	ListTasks(context.Context, *ListTasksReq) (*ListTasksResp, error)
// 	mustEmbedUnimplementedTaskServiceServer()
// }

// Define taskServer struct
type taskServer struct {
	tasksApi.UnimplementedTaskServiceServer
}

// mustEmbedUnimplementedTaskServiceServer implements tasksApi.TaskServiceServer.

// Implement CreateTask method
func (s *taskServer) AddTask(ctx context.Context, req *tasksApi.AddTaskReq) (*tasksApi.AddTaskResp, error) {
	// Implement logic to create task

	return &tasksApi.AddTaskResp{}, nil
}

func (s *taskServer) UpdateTask(ctx context.Context, req *tasksApi.UpdateTaskReq) (*tasksApi.UpdateTaskResp, error) {
	// Implement logic to edit task
	return &tasksApi.UpdateTaskResp{}, nil
}

// Implement DeleteTask method
func (s *taskServer) DeleteTask(ctx context.Context, req *tasksApi.DeleteTaskReq) (*tasksApi.DeleteTaskResp, error) {
	// Implement logic to delete task
	return &tasksApi.DeleteTaskResp{}, nil
}

func (s *taskServer) ListTasks(ctx context.Context, req *tasksApi.ListTasksReq) (*tasksApi.ListTasksResp, error) {
	// Implement logic to list tasks
	return &tasksApi.ListTasksResp{}, nil
}

// Implement Ping method
func (s *taskServer) Ping(ctx context.Context, req *tasksApi.PingReq) (*tasksApi.PingResp, error) {
	return &tasksApi.PingResp{
		Status: true,
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	tasksApi.RegisterTaskServiceServer(grpcServer, &taskServer{})
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
