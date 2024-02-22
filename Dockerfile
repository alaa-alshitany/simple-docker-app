#base stage 
FROM node as base


# for development env
FROM base as development
# create folder
WORKDIR /app
# command to copy packages.json to container
COPY package.json .
# run npm command to install modules folder
RUN npm install 
# check which environment is running --> instead using multi stage
#RUN if ["${NODE_ENV}" == "production"]; then npm install --only=production; else npm install; fi```
# copy index.js to container
COPY . .
# specify the port
EXPOSE 4000
# run the app
CMD ["npm","run","start-dev"]


# for production env
FROM base as production
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD ["npm","start"]



