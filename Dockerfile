FROM node
USER node
ADD ./express /home/node/app
EXPOSE 3000
CMD npm start
WORKDIR /home/node/app
ENV NODE_ENV=production
