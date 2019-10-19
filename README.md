docker image build -t servernode:1.5 .
docker container run --publish 8001:3008 --detach --name servernode servernode:1.5
docker container stop servernode
docker container rm servernode
