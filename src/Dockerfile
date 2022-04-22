FROM node

WORKDIR /studenthubApp
COPY package.json .

RUN npm install
# copy everything from app directory to current directory 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
