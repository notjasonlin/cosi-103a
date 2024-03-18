FROM node:20

WORKDIR /usr

COPY avocado/src/ ./src
COPY avocado/public ./public
COPY server ./server
COPY avocado/package.json package.json
COPY avocado/package-lock.json package-lock.json
COPY avocado/babel.config.js babel.config.js
COPY docker-setup.sh docker-setup.sh

RUN npm install
# RUN tar -czvf node_modules.tar.gz ./node_modules

EXPOSE 3000
EXPOSE 5001
CMD ["/usr/docker-setup.sh"]
