# Use an official Node.js runtime as the base image
FROM node:20-buster-slim

# Set the working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your backend application code to the container
COPY . .

# Expose the port your Express.js server will run on (replace 5000 with your actual port)
EXPOSE 5000

# Define the command to start your Express.js server
CMD ["node", "server.js"]
