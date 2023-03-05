FROM cypress/base:latest

RUN apt-get update && apt install -y default-jre

WORKDIR /home/cypress/

COPY . /home/cypress/

VOLUME [ "/home/cypress/allure-report" ]

RUN npm install

CMD ["npm", "run", "test:allure"]