# from base image node
FROM node:18-slim as base

# Create an application directory
RUN mkdir -p /app

WORKDIR /app

# copying all the files from your file system to container file system
COPY backend_typescript/package*.json ./
COPY backend_typescript/tsconfig.json ./

# install all dependencies
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY backend_typescript/ .

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 3333

# Start the app
CMD [ "npm", "start" ]