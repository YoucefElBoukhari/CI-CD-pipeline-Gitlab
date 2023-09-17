FROM node:14

WORKDIR /app

COPY package*.json ./


RUN npm install -g npm
RUN npm install

COPY . .

EXPOSE 3000 

CMD ["node", "server.js"]  
