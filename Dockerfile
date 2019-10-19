FROM node:10.16.3

WORKDIR /usr/src/app
COPY . .
RUN npm i

CMD [ "node", "serverNode.js" ]
