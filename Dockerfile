FROM node:22-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

COPY $PWD/docker/entrypoint.sh /usr/local/bin
ENTRYPOINT ["/bin/sh", "/usr/local/bin/entrypoint.sh"]