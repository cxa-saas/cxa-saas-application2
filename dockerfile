FROM node:14.18.1-alpine
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf