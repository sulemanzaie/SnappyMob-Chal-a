FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run generate && npm run read > /app/processed_output.txt && cat /app/processed_output.txt"]


