# Setup your golang project
go mod init <project-name>

# Install Necessary Packages:

## go get the required packages for gRPC.

```
go get google.golang.org/grpc
```

# Setup Go Lang for Proto Generation
## Installing the packages

`$GOROOT` is for the Go installation itself, including standard libraries and tools.

`$GOPATH` is for your workspace and your own projects.

`$GOBIN`  Is for where your Go binaries (executables) are installed when you use commands like `go install`.

Considering your project's location: `~/temp/learngo/protobuf/go-env`

Setting `$GOPATH`, `$GOBIN` and `$PATH`

Setting `$PATH` is important to generate protos. Otherwise you will get error - `protoc-gen-go-grpc: program not found or is not executable`

```
export GOPATH=$HOME/temp/learngo/protobuf/go-env
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOBIN
```


## Generate code from Proto file
Install the following:

```
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.27
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1
```

Run the following command to generate the proto files:

```
protoc -I=./protos --go_out=./tasks-backend --go-grpc_out=./tasks-backend tasks_api.proto
```

**Note:** with the latest compiler it generates additional function - `mustEmbedUnimplementedTaskServiceServer`.
To Avoid this use the following command with `require_unimplemented_servers=false`

```
protoc -I=./protos --go_out=./tasks-backend --go-grpc_out=require_unimplemented_servers=false:./tasks-backend tasks_api.proto
```






# Building UI

Create a New React Project:

```
npx create-react-app task-manager-ui
```

## Navigate to the Project Directory and Start the Development Server

```
cd task-manager-ui
npm start
```


protoc -I=./protos --go_out=./tasks-backend --go-grpc_out=require_unimplemented_servers=false:./tasks-backend tasks_api.proto

protoc --I=./protos --js_out=library=mylibrary,binary:out tasks_api.proto
protoc --I=./protos --js_out=import_style=commonjs,binary:out tasks_api.proto
