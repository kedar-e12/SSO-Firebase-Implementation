# Use node image as base
FROM node:14-alpine 

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
