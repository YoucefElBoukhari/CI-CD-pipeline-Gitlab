# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your Express.js application will run on
EXPOSE 3000

# Define the command to start your Express.js application
CMD ["node", "app.js"]
