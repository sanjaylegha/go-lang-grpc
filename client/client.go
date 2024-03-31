package main

import (
	"context"
	"log"

	"tasks-client/proto-gen/tasksApi"

	"google.golang.org/grpc"
)

func main() {
	// Create a gRPC client connection
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to dial server: %v", err)
	}
	defer conn.Close()

	// Create a client
	client := tasksApi.NewTaskServiceClient(conn)

	// Call the Ping method
	response, err := client.Ping(context.Background(), &tasksApi.PingReq{})
	if err != nil {
		log.Fatalf("Error calling Ping method: %v", err)
	}

	// Print the response
	log.Printf("Ping response: %v", response.Status)

}
