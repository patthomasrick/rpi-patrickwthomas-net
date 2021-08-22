FROM node:16

EXPOSE 3000

# COPY . /home/node/app
# WORKDIR /home/node/app
# RUN npm install
# RUN npx next build

# CMD npx next start

# ---

WORKDIR /home/node/app
CMD npm run dev
