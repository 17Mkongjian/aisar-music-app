#build stage
FROM node:lts-alpine as build-stage
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 80
CMD [ "http-server", "dist" ]