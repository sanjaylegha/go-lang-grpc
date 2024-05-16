# Setup your golang project

```bash
go mod init <project-name>
```

## Install Necessary Packages

### Go get the required packages for gRPC

```bash
go get google.golang.org/grpc
```

## Setup Go Lang for Proto Generation

### Installing the packages

`$GOROOT` is for the Go installation itself, including standard libraries and tools.

`$GOPATH` is for your workspace and your own projects.

`$GOBIN`  Is for where your Go binaries (executables) are installed when you use commands like `go install`.

Considering your project's location: `~/temp/learngo/protobuf/go-env`

Setting `$GOPATH`, `$GOBIN` and `$PATH`

Setting `$PATH` is important to generate protos. Otherwise you will get error - `protoc-gen-go-grpc: program not found or is not executable`

```bash
export GOPATH=$HOME/temp/learngo/protobuf/go-env
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOBIN
```

### Generate code from Proto file

Install the following:

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.27
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1
```

Run the following command to generate the proto files:

```bash
protoc -I=./protos --go_out=./tasks-backend --go-grpc_out=./tasks-backend tasks_api.proto
```

**Note:** with the latest compiler it generates additional function - `mustEmbedUnimplementedTaskServiceServer`.
To Avoid this use the following command with `require_unimplemented_servers=false`

```bash
protoc -I=./protos --go_out=./tasks-backend --go-grpc_out=require_unimplemented_servers=false:./tasks-backend tasks_api.proto
```

## Building UI

Create a New React Project:

```bash
npx create-react-app task-manager-ui
```

## Navigate to the Project Directory and Start the Development Server

```bash
cd task-manager-ui
npm start
```

## Configure gRPC in Web Project

For gRPC class lets use  `grpc-web` package.

### Install `grpc-web` in UI project

```bash
npm i grpc-web
npm install grpc-web
```

### Download `protoc-gen-grpc-web` protoc plugin

Further reference can be taken from here - [grpc.io](https://grpc.io/)

Download be referenced from the [release](https://github.com/grpc/grpc-web/releases) page.

If you don't already have `protoc` installed, you will have to download it
first from [here](https://github.com/protocolbuffers/protobuf-javascript/releases).

**Note:** Make sure they are both (`protoc`, `protoc-gen-grpc-web`) executable and are discoverable from your PATH.

For example, in Linux, you can do:

Make sure to re-name the file: `protoc-gen-grpc-web`

```bash
sudo mv ~/Downloads/protoc-gen-grpc-web-1.5.0-linux-x86_64 $GOBIN
chmod +x protoc-gen-grpc-web
```

### Client Configuration Options

Typically, you will run the following command to generate the proto messages
and the service client stub from your `.proto` definitions:

```sh
$ protoc -I=$DIR echo.proto \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

### Generate JS Files

```bash
protoc -I=./protos tasks_api.proto \
  --js_out=import_style=commonjs:./task-manager-ui/src/gen/ \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./task-manager-ui/src/gen
```
