FROM node:13.12.0-alpine as build
WORKDIR /
COPY . .
RUN yarn
RUN yarn build

# prod
FROM nginx:stable-alpine
COPY --from=build /dist /usr/share/nginx/html