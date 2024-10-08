FROM node:latest AS build

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . .

RUN npm run build --prod

FROM nginx:latest 

COPY --from=build /app/dist/tailwind /usr/share/nginx/html


