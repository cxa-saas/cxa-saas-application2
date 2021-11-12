#本地快速打包
FROM nginx
RUN mkdir /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf


#标准打包
# FROM node:14.18.1-alpine
# COPY ./ /app
# WORKDIR /app
# RUN npm install && npm run build

# FROM nginx
# RUN mkdir /app
# COPY --from=0 /app/dist /app
# COPY nginx.conf /etc/nginx/nginx.conf