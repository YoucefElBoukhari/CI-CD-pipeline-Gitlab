# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your backend application code to the container
COPY . .

# Expose the port your Node.js backend application will run on
EXPOSE 8080  # Replace with the actual port your app uses

# Define the command to start your Node.js backend server
CMD ["node", "server.js"]  
