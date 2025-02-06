FROM node:latest

RUN rm -rf node_modules
RUN rm -f package-lock.json
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

WORKDIR /app/ngryu-project
RUN npm install -g npm@11.1.0

RUN npm install @aws-amplify/ui-react
RUN npm install -g npm@latest
RUN npm install -g @aws-amplify/cli
RUN npm install aws-amplify
RUN npm install -g aws-cli


COPY . .
RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]