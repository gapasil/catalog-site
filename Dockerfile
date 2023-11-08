# Stage 1: Сборка приложения
FROM node:latest as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Развертывание приложения
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
COPY certs/server.conf /etc/nginx/conf.d/server.conf
COPY certs/cg-bot.site.crt /etc/nginx/cg-bot.site.crt
COPY certs/device.key /etc/nginx/device.key
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]