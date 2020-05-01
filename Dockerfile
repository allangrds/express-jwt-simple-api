FROM node:10.15.3-alpine

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3000
