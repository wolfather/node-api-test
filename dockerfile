FROM node:10-alpine

WORKDIR /usr/nodejsapp

COPY package*.json ./
RUN npm i
RUN npm run dev


COPY . .

EXPOSE 8080

# CMD ["node", "run", "build"]