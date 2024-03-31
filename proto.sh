protoc -I=./protos tasks_api.proto \
  --js_out=import_style=commonjs:./task-manager-ui/src/gen/ \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./task-manager-ui/src/gen