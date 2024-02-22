# base layer
FROM node:14

# create folder
WORKDIR /app

# command to copy packages.json to container
COPY package.json .

# run npm command to install modules folder
RUN npm install 

#ccopy index.js to container
COPY . .

# run the app
CMD ["npm","run","start-dev"]

# specify the port
EXPOSE 4000

