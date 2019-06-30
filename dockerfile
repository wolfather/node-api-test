FROM node:10-alpine

WORKDIR /nodejsapp

COPY package*.json ./

COPY . .

RUN npm i
RUN npm run dev

EXPOSE 8080