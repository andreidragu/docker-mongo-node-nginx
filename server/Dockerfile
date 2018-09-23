FROM node:8.12.0

# create project directory
RUN mkdir -p /usr/src/docker-mongo-node-nginx/server
WORKDIR /usr/src/docker-mongo-node-nginx/server

# install project dependencies
COPY package.json /usr/src/docker-mongo-node-nginx/server
RUN npm install

# bundle project source
COPY . /usr/src/docker-mongo-node-nginx/server

# build arguments
ARG NODE_VERSION=8.12.0

# environment
ENV NODE_VERSION $NODE_VERSION

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start