FROM node:argon
# Likely constants should stay at the top
EXPOSE 3000
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
CMD [ "npm", "run", "start" ]
