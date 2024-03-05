FROM node:20

WORKDIR /usr

COPY avocado/src/ ./src
COPY avocado/public ./public
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./babel.config.js babel.config.js

RUN npm install
RUN tar -czvf node_modules.tar.gz ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
