FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN ls -l

RUN npm install

EXPOSE 4200

CMD ["npm","run","start"]