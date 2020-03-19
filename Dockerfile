FROM node:alpine

WORKDIR /opt/app

COPY package.json

RUN nmp install

COPY . .

CMD ["nmp", "start"]
