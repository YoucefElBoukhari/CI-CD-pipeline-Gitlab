FROM node:14

WORKDIR /app

COPY package*.json ./


RUN npm run backend

COPY . .

EXPOSE 3000 

CMD ["node", "server.js"]  
